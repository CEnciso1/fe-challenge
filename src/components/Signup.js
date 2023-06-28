import './Signup.css'
import { useState, useRef } from 'react'
import illustrationDesktop from '../images/illustration-sign-up-desktop.svg'
import illustrationMobile from '../images/illustration-sign-up-mobile.svg'
import bulletImage from '../images/icon-list.svg'
import successImage from '../images/icon-success.svg'
export default function Signup(){
    const [showAlert, setShowAlert] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [alert, setAlert] = useState('')
    const [email, setEmail] = useState('')
    const inputEmailRef = useRef('')

   const handleSubmit = (event) => {
        event.preventDefault()
        console.log(/\S+@\S+\.\S+/.test(inputEmailRef.current.value))
        if(inputEmailRef.current.value === '' || !/\S+@\S+\.\S+/.test(inputEmailRef.current.value)){
            setShowAlert(true)
            setAlert('Email is invalid')
            console.log('test')
        }
        else{
            setShowAlert(false)
            setShowSuccess(true)
            setEmail(inputEmailRef.current.value)
        }
   }

   const handleDismiss = (event) => {
        event.preventDefault()
        setShowSuccess(false)
   }

   const signupPage = () => {
    return(
        <div class='card'>
            <div class='email-form'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers recieving monthly updates on:</p>
                <br></br>
                <div class='list-container'>
                    <div class='list-item'>
                        <img class='bullet-image' src={bulletImage} alt=''/>
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div class='list-item'>
                        <img class='bullet-image' src={bulletImage} alt=''/>
                        <p>Measuring toensure updates are a success</p>
                    </div>
                    <div class='list-item'>
                        <img class='bullet-image' src={bulletImage} alt=''/>
                        <p>And much more!</p>
                    </div>
                </div>
                <br></br>
                <form class='form-box' onSubmit={handleSubmit}>
                    <div class='label-box'>
                        <label for='email-address-input'> 
                            Email address
                        </label>
                        <label id='alert-label' for='email-address-input'>{alert}</label>
                    </div>
                    <input
                        ref={inputEmailRef} 
                        id='email-address-input' 
                        type='email' 
                        placeholder='email@company.com'
                        style={{
                            borderColor: showAlert ? "hsl(4, 100%, 67%)" : "",
                            backgroundColor: showAlert ? "hsla(4, 100%, 67%, 0.2)" : "",
                            color: showAlert ? "hsl(4, 100%, 67%)" : "",
                        }}
                        />
                    <input class='submit-button'id='form-submit' type="submit" value="Subscribe to monthly newsletter"/>
                </form>
            </div>
            <div id='display-image'>
                <picture>
                    <source id='mobile-image' media="(max-width: 950px)" srcSet={illustrationMobile}></source>
                    <img src={illustrationDesktop} alt=''/>
                </picture>
            </div>
        </div>
    )
   }

   const thankYouPage = () => {
    return (
        <div class='card-success'>
            <img id='success-image' src={successImage} alt=''/>
            <h1>
                Thanks for subscribing!
            </h1>
            <p >
                A confirmation email has been sent to {email}. please open it and click the button insside to confirm your subscription.
            </p>
            <input class='submit-button'id='form-submit' onClick={handleDismiss} type="submit" value="Dismiss"/>
        </div>
    )
   }

    return(
        <div class='main'>
            {showSuccess ? thankYouPage() : signupPage()}
        </div>
    )

}