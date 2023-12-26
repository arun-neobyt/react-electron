import React from 'react'

const DepositInstruction = () => {
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
                {/*begin::Card*/}
                <div>
                    <div className="card-body py-8">


                        {/*begin::Accordion*/}
                        <div
                            className="accordion accordion-icon-toggle"
                            id="kt_accordion_1"
                        >
                            {/*begin::Item*/}
                            <div className="mb-5">
                                {/*begin::Header*/}
                                <div
                                    className="accordion-header py-3 d-flex"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#kt_accordion_1_item_1"
                                >
                                    <span className="accordion-icon"
                                    ><i className="ki-duotone ki-arrow-right fs-4"
                                    ><span className="path1"></span
                                    ><span className="path2"></span></i
                                        ></span>
                                    <h3
                                        className="fs-6 text-gray-800 fw-semibold mb-0 ms-2"
                                    >
                                        The best way to quick start business
                                    </h3>
                                </div>
                                {/*end::Header*/}

                                {/*begin::Body*/}
                                <div
                                    id="kt_accordion_1_item_1"
                                    className="fs-7 collapse show ps-2"
                                    data-bs-parent="#kt_accordion_1"
                                >
                                    <div className="mb-5">
                                        Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since.
                                    </div>
                                </div>
                                {/*end::Body*/}
                            </div>
                            {/*end::Item*/}


                        </div>
                        {/*end::Accordion*/}
                    </div>
                </div>
                {/*end::Card*/}
            </div>
        </div>
    )
}

export default DepositInstruction