import React from 'react'
import Img from "../../assets/img/illustrations/sigma-1/2.png";


const Plan = () => {
    return (
        <div className="card card-stretch" style={{ height: "80vh" }}>
            <div className="card-body pb-0">
                <div className="d-flex flex-column h-100">
                    <h3 className="text-dark text-center fs-1 fw-bold pt-10 lh-lg">
                        You are on <br /><span className="text-primary">Free</span><br /> Plan
                    </h3>
                    <div className="text-center pt-7">
                        <a href="javascript:void(0)" className="btn btn-primary fw-bold fs-6 px-7 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Subscribe Now</a>
                    </div>
                    <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px" style={{ backgroundImage: `url(${Img})` }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan