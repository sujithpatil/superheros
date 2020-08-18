import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import Form from './form';

import './index.css';

class Data extends React.Component {

    state = {
        showForm: false
    }

    setShowForm = ( showForm ) => {
        this.setState({
            showForm
        });
    }

    search = ( event ) => {
        this.props.search( event.target.value.toLowerCase() );
    }

    render() {

        const { showForm } = this.state;

        return <div className='component data'>
            <button className='button delete' onClick={ this.props.delete }>
                Delete Record
            </button>
            <button className='button add' onClick={ () => this.setShowForm( true ) } >
                Add Record
            </button>
            <input className='input search' type='text' onChange={ this.search } />
            {
                showForm && <div className='popup container'>
                    <div className='popup content'>
                        <Form onSubmit = { () => this.setShowForm( false ) }/>
                    </div>
                </div>
            }
        </div>
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        delete: () => dispatch({
            type: actions.DELETE_RECORD
        }),
        search: (text) => dispatch({
            type: actions.SEARCH_RECORD,
            text: text
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);