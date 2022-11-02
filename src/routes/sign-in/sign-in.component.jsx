import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth();
  }

  return (
    <div>
      <button onClick={logGoogleUser}>
        Sign with google
      </button>
    </div>
  )
}

export default SignIn