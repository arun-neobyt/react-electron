import React from 'react'
import { Link } from 'react-router-dom'

const Reports = () => {

    const report = [
        {
            "name": "AEPS",
            "desc": "Cash/Statement/Aadhaar Pay",
            "icon": "fa-regular fa-fingerprint",
            "progressWidth": "60",
            "progressNumber": "60%",
            "path": ""
        },
        {
            "name": "BBPS",
            "desc": "Cash/Statement/Aadhaar Pay",
            "icon": "fa-regular fa-lightbulb-on",
            "progressWidth": "60",
            "progressNumber": "60%",
            "path": ""
        },
        {
            "name": "DMT",
            "desc": "Cash/Statement/Aadhaar Pay",
            "icon": "fa-solid fa-money-simple-from-bracket",
            "progressWidth": "60",
            "progressNumber": "60%",
            "path": ""
        },
        {
            "name": "mATM",
            "desc": "Cash/Statement/Aadhaar Pay",
            "icon": "fa-regular fa-fingerprint",
            "progressWidth": "60",
            "progressNumber": "60%",
            "path": ""
        },
    ]

    return (
        <div className="card card-strech pt-5 my-3" style={{ height: "64vh" }}>
            <h3 className="card-title my-3 px-10 ">
                <span className="card-label fw-bold text-dark fs-3">Reports</span>
            </h3>
            <div className="table-responsive px-10">
                <table className="table table-borderless align-middle">
                    <thead >
                        <tr>
                            <th className="p-0 w-50px" />
                            <th className="p-0 min-w-200px" />
                            <th className="p-0 min-w-100px" />
                            <th className="p-0 min-w-40px" />
                        </tr>
                    </thead>
                    <tbody >
                        {report.map((data) => {
                            return (
                                <tr>
                                    <th className="px-0 py-1">
                                        <div className="symbol symbol-60px me-5">
                                            <span className="symbol-label bg-light-primary">
                                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                    <i className={data.icon}></i>
                                                </span>
                                            </span>
                                        </div>
                                    </th>
                                    <td className="ps-0">
                                        <a
                                            href="javascript:void(0)"
                                            className="text-gray-800 fw-bold text-hover-primary fs-6"
                                        >
                                            {data.name}
                                        </a>
                                        <span className="text-muted fw-semibold d-block mt-1">
                                            {data.desc}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex flex-column w-100 me-3">
                                            <div className="d-flex flex-stack mb-2">
                                                <span className="text-dark me-2 fs-6 fw-bold">
                                                    Progress
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="progress h-6px  w-100 bg-light-primary">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        role="progressbar"
                                                        style={{ width: 60 }}
                                                        aria-valuenow={50}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <span className="text-muted fs-7 fw-semibold ps-3">
                                                    {data.progressNumber}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end pe-0">
                                        <Link
                                            to={data.path}
                                            className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                                        >
                                            <span className="svg-icon svg-icon-4">
                                                <i className="fa-duotone fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports