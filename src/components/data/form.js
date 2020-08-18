import React from 'react';

import * as actions from '../../store/actions';

import { connect } from 'react-redux';

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        age: 0,
        superHero: '',
        gender: ''
    }

    handleChange = ( event ) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = ( event ) => {
        event.preventDefault();
        this.props.addRecord( this.state );
    }

    render() {
        const { firstName, lastName, email, age, superHero, gender } = this.state;
        return <div className='form-container'>
            <h3 className='form-heading' >
                 ADD HERO
             </h3>
             <div onClick={ this.props.onSubmit } className='close-block'>
                 X
             </div>
            <form method='POST' >
                <div className='input-container'>
                    <label>
                        First Name :
                        <input
                            type='text'
                            className='input form-element'
                            name='firstName'
                            value={ firstName }
                            onChange={ this.handleChange }
                            required 
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label>
                        Last Name : 
                        <input 
                            type='text'
                            className='input form-element'
                            name='lastName'
                            value={ lastName }
                            onChange={ this.handleChange }
                            required
                         />
                    </label>
                </div>
                <div className='input-container'>
                    <label>
                        Super Hero Name : 
                        <input
                            type='text'
                            className='input form-element'
                            name='superHero'
                            value={ superHero }
                            onChange={ this.handleChange }
                            required 
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label>
                        Email : 
                        <input
                            type='text'
                            className='input form-element'
                            name='email'                            
                            value={ email }
                            onChange={ this.handleChange }
                            required 
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <label>
                        Gender: 
                        <select name='gender' value={ gender } onChange={ this.handleChange }  className='input form-element'>
                            <option> SELECT </option>
                            <option value='M' > Male </option>
                            <option value='F' > Female </option>
                            <option value='O' > Others </option>  
                        </select>
                    </label>
                </div>
                <div className='input-container'>
                    <label>
                        Age: 
                        <input
                             type='number'
                             className='input form-element'
                             name='age'
                             value={ age }
                             onChange={ this.handleChange }
                             required
                        />
                    </label>
                </div>
                <div className='input-container'>
                    <button onClick={ this.submitForm } className='button add-hero' type='submit'>
                        ADD RECORD
                    </button>
                </div>
            </form>
        </div>
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        addRecord: (body) => {
            dispatch({type: actions.ADD_RECORD, body: body});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);