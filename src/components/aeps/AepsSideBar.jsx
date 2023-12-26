import React from 'react'
import logo from '../../assets/img/app/ico_neobyt_256.png'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom'

const AepsSideBar = () => {

    const sidebar = [
        {
            "name": "Home",
            "icon": "fa-solid fa-house-window",
            "path": "/"
        },
        {
            "name": "Cash Withdraw",
            "icon": "fa-solid fa-money-simple-from-bracket",
            "path": ""
        },
        {
            "name": "Cash Deposit",
            "icon": "fa-solid fa-money-simple-from-bracket fa-rotate-180",
            "path": ""
        },
        {
            "name": "Balance Enquiry",
            "icon": "fa-solid fa-file-circle-question",
            "path": ""
        },
        {
            "name": "Mini Statement",
            "icon": "fa-solid fa-file-chart-column",
            "path": ""
        },
    ]


    return (
        <div id="kt_aside" className="aside bg-info" data-kt-drawer="true" data-kt-drawer-name="aside"
            data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
            data-kt-drawer-width="70px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggler">

            <div className="aside-primary d-flex flex-column align-items-center flex-row-auto">

                <div className="aside-logo d-flex flex-column align-items-center flex-column-auto py-4 pt-lg-10 pb-lg-7"
                    id="kt_aside_logo">
                    <a href="../dashboard/dashboard.html">
                        <img alt="Logo" src={logo} className="mh-50px" />

                    </a>
                </div>

                {sidebar.map((data, index) => {
                    return (
                        <div className="aside-nav d-flex flex-column align-items-center pt-0 pb-2"
                            id="kt_aside_nav" key={index}>
                                
                            <div className="hover-scroll-y scroll-ms px-2" data-kt-scroll="true" data-kt-scroll-height="auto"
                                data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                                data-kt-scroll-wrappers="#kt_aside_nav" data-kt-scroll-offset="10px">
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-1" title="Dashboard" data-tooltip-id="my-tooltip" data-tooltip-content={data.name} data-bs-placement="right">
                                        <Link to={data.path}
                                            className="nav-link h-40px w-40px h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                                            data-bs-target="#kt_aside_tab_1" role="tab">
                                            <i className={`${data.icon} fs-2 fs-lg-1`} style={{ color: "white" }} ><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}

                <div>
                    <Tooltip id="my-tooltip" place='right' />
                </div>
            </div>
        </div>
    )
}

export default AepsSideBar