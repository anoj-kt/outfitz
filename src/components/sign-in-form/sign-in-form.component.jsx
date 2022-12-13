import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // =========EVENT HANDLERS=========
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            setFormFields(defaultFormFields);
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong password': 
                    alert('Incorrect password');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    // =========JSX=========
    return (
        <SignInContainer>
            <h2>Already have an account yet?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
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
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button 
                        type='button' 
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={signInWithGoogle}
                    >
                        Google Sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;