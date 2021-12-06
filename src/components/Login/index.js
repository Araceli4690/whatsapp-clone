import React from 'react'
import { Button } from '@mui/material';
import './style.css'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
    //pull from data layer
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        //signin with provider (googleAuth from firebase.js)
        auth.signInWithPopup(provider)
            .then((result) => {
                //put info into datalayer
                dispatch({
                    //setUsER action
                    type: actionTypes.SET_USER,
                    //user is whatever we get back from google
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://www.transparentpng.com/thumb/whatsapp/LhZ97X-whatsapp-hd-image.png"
                    alt="">
                </img>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
