import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmpassword } = formFields;

    // =========EVENT HANDLERS=========
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields)
        } catch (error) {
            console.log('user creation error', error)
        }


    }

    // =========JSX=========
    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required onChange={handleChange} 
                    name='displayName' 
                    value={displayName}
                />
                <FormInput 
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <FormInput 
                    label='Confirm password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmpassword' 
                    value={confirmpassword}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;