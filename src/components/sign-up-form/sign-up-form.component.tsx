import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignUpContainer } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmpassword } = formFields;

    // =========EVENT HANDLERS=========
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            setFormFields(defaultFormFields)
        } catch (error) {
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Cannot create user, email already in use');
            } else {
                alert('Error encountered while creating user!');
                console.log('user creation error', error);
            };
        };
    };

    // =========JSX=========
    return (
        <SignUpContainer>
            <h2>Don't have an account yet?</h2>
            <span>Sign up with email and password</span>
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
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
};

export default SignUpForm;