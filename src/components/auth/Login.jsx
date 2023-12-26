import React, { useState } from 'react'
import logo from '../../assets/img/app/ico_neobyt_256.png'
import { QRCodeCanvas } from 'qrcode.react';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {

    const navigate = useNavigate()

    const [showOTP, setShowOTP] = useState(false);

    const handleOptionClick = () => {
        setShowOTP(true);
    };

    return (
        <div className="d-flex flex-column flex-root" style={{ height: '100vh' }}>
            <div className="d-flex flex-column flex-lg-row flex-column-fluid" id="kt_login">
                <div className="d-flex flex-column flex-lg-row-auto bg-primary col-6 pt-15 pt-lg-0">
                    <div className="d-flex flex-row-fluid flex-center flex-column-auto flex-column text-center mb-5">
                        <p className="mb-6">
                            <img alt="Logo" src={logo} className="h-50px h-lg-75px" />
                        </p>


                        <h3 className="fw-bold fs-2x text-white lh-lg">
                            Discover Start<br />
                            with great build tools
                        </h3>
                    </div>
                    <div
                        className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px login-image"

                    ></div>
                </div>
                <div
                    className="login-content flex-lg-row-fluid col-6 d-flex flex-column justify-content-center position-relative overflow-hidden py-10 py-lg-20 px-10 p-lg-7 mx-auto mw-450px w-100">

                    <div className="d-flex flex-column-fluid flex-center py-10">

                        <form className="form w-100" novalidate="novalidate" id="kt_login_signin_form"
                            data-after-login-url="../index-2.html">

                            <div className="pb-5 pb-lg-15 d-flex justify-content-center">
                                <h3 className="fw-bold text-gray-900 display-6">
                                    Welcome to NeoByt
                                </h3>
                            </div>


                            {!showOTP ? (
                                <div>
                                    <div className="d-flex justify-content-center">
                                        {/* QR Code component */}
                                        <QRCodeCanvas value="https://reactjs.org/" className='qrcode' />
                                    </div>
                                    <div className='qr-login'>
                                        {/* Clicking this will show OTP */}
                                        <p onClick={() => handleOptionClick()}>Try another option</p>
                                    </div>
                                    <div className='text-center qr-inst'>
                                        <p>Unable to scan Q.R please use authentication code to login</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='otp-field'>
                                    {/* OTP input fields */}
                                    <div className="fv-row mb-2">
                                        <div className="d-flex justify-content-center mt-n5">
                                            <label className="text-center"
                                            >Authentication Code</label>
                                        </div>
                                        <input
                                            className="form-control w-100"
                                            type="password"
                                            name="password"
                                            autocomplete="off"
                                            maxLength={6}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary fw-bold fs-6 px-4 py-2 my-1 me-1"
                                        onClick={() => navigate("/dashboard")}
                                    >
                                        Let me in
                                    </button>
                                </div>
                            )}



                        </form>
                    </div>
                    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">

                        <div className="container-xxl d-flex flex-column justify-content-center flex-md-row flex-stack">

                            <div className="text-gray-900 order-2 order-md-1">
                                <span className="text-muted fw-semibold me-2">2023&copy;</span>
                                <a href="https://neobyt.com/" target="_blank" className="text-gray-800 text-hover-primary">NeoByt Fintech
                                    Pvt. Ltd.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login