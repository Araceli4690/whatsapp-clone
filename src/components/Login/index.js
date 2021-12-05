import React from 'react'
import { Button } from '@mui/material';
import './style.css'

function Login() {
    const signIn = () => {

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
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
