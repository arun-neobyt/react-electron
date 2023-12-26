import React from 'react'
import Select from 'react-select'
import enJson from '../../../labelData/en.json'
import { discoverPort } from '../../../lib/bioDevice/bio';

const DepositForm = () => {

    let dev

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            color: "#222",
            backgroundColor: '#E8F0FD',
            padding: '5px 2px',
            border: "none",
            '&:hover': {
                border: 'none',
            },
            borderRadius: '10px'
        }),
    };

    let label = enJson.aepsForm


    const bankOtipns = [
        {name: "Bank of India"}
    ]

    async function deviceFun() {
        dev = await discoverPort();
     //console.log("readyDevices --- " + JSON.stringify(dev))
    }




    return (
        <div className='aeps-form'>
            <div className="card card-stretch mb-5 mb-xxl-8 ">
                <div className="card-header align-items-center border-0">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="fw-bold text-gray-900 fs-3">AEPS Cash Deposit</span>
                        <button onClick={() => deviceFun()} > device </button>
                        {/* <span className="text-muted mt-2 fw-semibold fs-6">890,344 Sales</span> */}
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
                            <div className="card-body p-xxl-30">
                                <div className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
                                    id="kt_stepper">
                                    <div className="d-flex flex-row-fluid justify-content-center">
                                        <form className="w-100 w-md-400px w-xl-500px" id="kt_stepper_form">

                                            <div className="current" data-kt-stepper-element="content">
                                                <div className="w-100">
                                                    <div className="fv-row mb-5">
                                                        <label className="fs-7 form-label fw-bold text-gray-900">{label.map((data) => data.phone)}</label>
                                                        <input
                                                            type="text"
                                                            id="customerNumber"
                                                            name="customerNumber"
                                                            placeholder="Enter phone number"
                                                            className="form-control form-control-lg form-control-solid"
                                                        // onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="fv-row mb-5">
                                                        <label className="fs-7 form-label fw-bold text-gray-900">{label.map((data) => data.bank)}</label>

                                                        {/* <Select
                                        className="basic-single"
                                        styles={customStyles}
                                        classNamePrefix="select"
                                        // defaultValue={colourOptions[0]}
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}


                                      // options={colourOptions}
                                      /> */}
                                                        <Select
                                                            name="ApplicantCountry"
                                                            styles={customStyles}
                                                            isSearchable={true}
                                                            menuPlacement="auto"
                                                            closeMenuOnSelect="blue"
                                                            options={bankOtipns}
                                                        />
                                                    </div>
                                                    <div className="fv-row mb-5">
                                                        <label className="fs-7 form-label fw-bold text-gray-900">{label.map((data) => data.aadhaar)}</label>
                                                        <input
                                                            type="text"
                                                            id="customerAadhaar"
                                                            name="customerAadhaar"
                                                            placeholder="Enter aadhaar number"
                                                            className="form-control form-control-lg form-control-solid"

                                                        // value={data.ApplicantCity.toUpperCase()}
                                                        // onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="fv-row mb-5">
                                                        <label className="fs-7 form-label fw-bold text-gray-900">{label.map((data) => data.amount)}</label>
                                                        <input
                                                            type="text"
                                                            id="customerAmount"
                                                            name="customerAmount"
                                                            placeholder="Enter amount"
                                                            className="form-control form-control-lg form-control-solid"

                                                        // value={data.ApplicantCity.toUpperCase()}
                                                        // onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer border-0">
                    <div className="d-flex justify-content-between pt-2">
                      <div className="mr-2">
                        <button type="button" className="btn btn-lg btn-danger fw-bold py-4 ps-8 me-2"
                          data-kt-stepper-action="next">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div> */}
            </div>
        </div>
    )
}

export default DepositForm