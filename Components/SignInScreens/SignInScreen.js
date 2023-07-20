import { validEmail } from '@/Utils/regex';
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { loggedIn } from '@/store/userLoginSlice';

const requiredFields = {
    email: 'Please Enter Your email',
    password: 'Please Enter Your password'
};

export default function SignInScreen() {
    const router = useRouter()
    const dispatch = useDispatch();

    const [userInfo, setuserInfo] = useState({})
    const [errorData, setErrorData] = useState({})


    function submitHandler(e) {
        e.preventDefault();
        const errors = {};

        for (const [key, value] of Object.entries(requiredFields)) {
            if (!userInfo[key]) {
                errors[key] = value;
            }
        }

        if (userInfo.email && !validEmail.test(userInfo.email)) {
            errors.email = 'Please Enter a Valid Email';
        }

        if (userInfo.password && userInfo.password.length < 5) {
            errors.password = 'Password must contain at least 5 characters';
        }

        console.log(errors);
        setErrorData(errors);

        if (Object.keys(errors).length === 0) {
            toast.success('Logged in Successfully');
            setCookie('loggedIn', true);
            setuserInfo({});
            dispatch(loggedIn());
            router.push('/');
        }
    }

    function changeHandler(e) {
        const key = e.target.name;
        const value = e.target.value
        setuserInfo({ ...userInfo, [key]: value })
        setErrorData({ ...errorData, [key]: '' })
    }

    return (
        <div className='signinScreen row'>
            <div className="col-xl-7 col-md-7 col-sm-12 col-12 p-0">
                <div className="imageBox">
                    <img src="/images/signinbg.jpg" alt="signin" />
                </div>
            </div>
            <div className="col-xl-5 col-md-5 col-sm-12 col-12 p-0">
                <div className="signinBox">
                    <form className='signinform' onSubmit={submitHandler}>
                        <div className="signinhead">
                            Please Login to Continue
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text" name='email' id='email' autoComplete="off"
                                className={`form-control ${errorData.email ? 'is-invalid' : ''}`}
                                value={userInfo.email ? userInfo.email : ''}
                                placeholder='Enter Email/Username' onChange={(e) => changeHandler(e)}
                            />
                            <div className="errorText">{errorData.email ? errorData.email : ''} </div>
                        </div>
                        <div className="form-box">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password" name='password' id='password' autoComplete="off"
                                value={userInfo.password ? userInfo.password : ''}
                                className={`form-control ${errorData.password ? 'is-invalid' : ''}`}
                                placeholder='Enter Password' onChange={(e) => changeHandler(e)}
                            />
                            <div className="errorText">{errorData.password ? errorData.password : ''} </div>
                        </div>
                        <div className="submit-btn">
                            <button className="btn btn-orange">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
