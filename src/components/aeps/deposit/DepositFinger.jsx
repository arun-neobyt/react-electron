import React from 'react'

const DepositFinger = ({handle}) => {
    
    return (
        <div className='aeps-form'>
            <div className="card card-stretch mb-5 mb-xxl-8">

                <div className="card-header align-items-center border-0">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="fw-bold text-gray-900 fs-3">Biometric Capture</span>
                        <span className="text-muted mt-2 fw-semibold fs-6">890,344 Sales</span>
                    </h3>
                    <div className="card-toolbar">
                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i className="ki-duotone ki-category fs-1"><span className="path1"></span><span
                                className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                        </button>
                    </div>
                </div>
                <div className="fs-6 d-flex flex-column-fluid" id="kt_content">
                    <div className="col-xl-12">
                        <div className="">

                            <div className="card-body p-lg-15 p-xxl-30">
                                <div className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
                                    id="kt_stepper">
                                    <div className="d-flex flex-row-fluid justify-content-center">
                                        <div className="pt-10 w-100 w-md-400px w-xl-500px" 
                                            id="kt_stepper_form">
                                            <div className="pt-12">
                                                <div className="aeps-finger">
                                                    <i className="fa-solid fa-fingerprint aeps-finger-i text-danger"
                                                        id="fingerprintIcon"></i>
                                                </div>


                                                <div className="d-flex justify-content-around pt-18">
                                                    <div className="row mb-13">
                                                        <div className="">
                                                            <div className="form-check form-check-custom form-check-solid gap-5">
                                                                <input className="form-check-input" type="checkbox" id="customCheck5"
                                                                    value="option1"  />
                                                                <label className="form-check-label fw-semibold fs-8"
                                                                    htmlFor="customCheck5">I hereby declare my consent to
                                                                    provide UID/ VID and biometrics
                                                                    to continue with this AEPS
                                                                    transaction using Aadhaar
                                                                    authentication.</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-footer border-0">
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-lg btn-primary fw-bold py-4 ps-8 w-300px" id="convertToJsonBtn"
                        onClick={handle}
                        >
                            Proceed to Authenticate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositFinger