import React from 'react'
import { Link } from 'react-router-dom'

const DepositSuccess = ({handleFalse}) => {

    return (
        <div className="card bg-primary aeps-form">
            {/*begin::Engage Widget 5*/}
            <div className=" mb-5 mb-xxl-8">
                {/*begin::Body*/}
                <div className="card-body pb-0">
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column h-100">
                        {/*begin::Text*/}
                        <h3 className="text-white text-center fs-2x fw-bold pt-15 lh-lg">
                            Transaction Successful!
                        </h3>
                        <h4 className="text-white text-center fs-2x fw-bold pt-1 lh-lg">
                        ₹ 10,000
                        </h4>
                        {/*end::Text*/}
                        {/*begin::Image*/}
                        <div className="d-flex justify-content-center pt-10">
                            <i className="ki-duotone ki-verify text-white fs-7x">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </div>
                        {/*end::Image*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Body*/}
            </div>
            <div className="card-footer border-0 d-flex justify-content-center">
                <Link onClick={() => handleFalse()} style={{cursor:'pointer'}} title="Go back">
                <i className="fa-solid fa-arrow-right-to-bracket fa-rotate-180 text-light fs-4x"></i>
                     
                </Link>
            </div>

            {/*end::Engage Widget 5*/}
        </div>
    )
}

export default DepositSuccess