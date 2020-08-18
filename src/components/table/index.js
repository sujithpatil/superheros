import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import './index.css';

class Table extends React.Component {

    componentDidMount() {
        this.props.getAllRecords();
    }

    handleCheckboxClick = ( event ) => {
        this.props.toDelete( event.target.value );
    }

    render() {
        const { heros } = this.props;
        const tableMarkup = heros.length > 0 && (
            heros.map((hero, index) => {
                const { firstName, lastName, superHero, email, gender, age } = hero;
                return <div className='row content' key={ email } >
                    <span className='number'> <input type='checkbox' onChange={ this.handleCheckboxClick } value={ email } /> {index + 1} </span>
                    <span className='firstName'>{firstName}</span>
                    <span className='lastName'>{lastName}</span>
                    <span className='superHero'>{superHero}</span>
                    <span className='email'>{email}</span>
                    <span className='gender'>{gender}</span>
                    <span className='age'>{age}</span>
                </div>
            })
        );
        return <div className='component table'>
            <div className='row heading'>
                <span className='number'>#</span>
                <span className='firstName'>First Name</span>
                <span className='lastName'>Last Name</span>
                <span className='superHero'>Super Hero</span>
                <span className='email'>Email</span>
                <span className='gender'>Gender</span>
                <span className='age'>Age</span>
            </div>
            { tableMarkup }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRecords: () => dispatch({
            type: actions.GET_ALL_RECORDS
        }),
        toDelete: ( email ) => dispatch({
            type: actions.DELETE_ITEM,
            key: email
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);