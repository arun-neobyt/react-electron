import React from 'react'

const DepositSuggestion = () => {
    return (
        <div className="card mb-5" style={{ height: "20vh" }}>
            <div
                className="card-header d-flex align-items-center border-0"
                style={{ minHeight: "40px", justifyContent: "space-between" }}
            >
                <h3 className="card-title fw-bold fs-6">Customer Preference</h3>
                <i
                    className="fa-solid fa-xmark"
                    style={{ cursor: "pointer" }}
                    // onClick={() => props.setData({ ...props.data, mobile: false })}
                ></i>
            </div>
            <div className="card-body py-0">
                <div className="row g-2">
                    <div className="col-4">
                        <label
                            className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-stack text-start  p-2 h-50px"
                            // onClick={() =>
                            //     props.setData({
                            //         ...props.data,
                            //         bank_name: Banks[0].name,
                            //         amount: 1000,
                            //     })
                            // }
                        >
                            <div className="d-flex align-items-center me-2">
                                {/* <img src={Banks[0].logo} alt="" className="w-20px me-4" /> */}
                                <div>
                                    <div className="fs-9" style={{ lineHeight: "1.2" }}>
                                        Bank Of India
                                    </div>
                                    <div className="fs-7">₹ 1000</div>
                                </div>
                            </div>
                        </label>
                    </div>
                    {/* <div className="col-4">
                        <label
                            className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-stack text-start p-2 h-50px"
                            onClick={() =>
                                props.setData({
                                    ...props.data,
                                    bank_name: Banks[1].name,
                                    amount: 500,
                                })
                            }
                        >
                            <div className="d-flex align-items-center me-2">
                                <img src={Banks[1].logo} alt="" className="w-20px me-4" />
                                <div>
                                    <div className="fs-9" style={{ lineHeight: "1.2" }}>
                                        {Banks[1].name}
                                    </div>
                                    <div className="fs-7">₹ 500</div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="col-4">
                        <label
                            className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-stack text-start p-2 h-50px"
                            onClick={() =>
                                props.setData({
                                    ...props.data,
                                    bank_name: Banks[2].name,
                                    amount: 1500,
                                })
                            }
                        >
                            <div className="d-flex align-items-center me-2">
                                <img src={Banks[2].logo} alt="" className="w-20px me-4" />
                                <div>
                                    <div className="fs-9" style={{ lineHeight: "1.2" }}>
                                        {Banks[2].name}
                                    </div>
                                    <div className="fs-7">₹ 1500</div>
                                </div>
                            </div>
                        </label>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DepositSuggestion