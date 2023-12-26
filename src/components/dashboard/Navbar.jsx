import React from 'react'
import logo from '../../assets/img/app/neobyt_logo_180b.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navbar = [
        // {
        //     "icon": "fa-solid fa-bars-sort",
        //     "path": "/mega-menu"
        // },
        {
            "icon": "fa-solid fa-house-window",
            "path": "/dashboard"
        },
        {
            "icon": "fa-duotone fa-wallet",
            "path": "/wallet"
        },
        {
            "icon": "fa-solid fa-file-chart-column",
            "path": "/report"
        },
        {
            "icon": "fa-solid fa-headset",
            "path": "/support"
        },
        // {
        //     "icon": "fa-solid fa-user-tie",
        //     "path": "/profile"
        // },
    ]

    return (
        <div
            id="kt_header"
            className="header"
            data-kt-sticky="true"
            data-kt-sticky-name="header"
            data-kt-sticky-offset="{default: '200px', lg: '300px'}"
        >
            {/*begin::Container*/}
            <div
                className="container-xxl d-flex align-items-stretch justify-content-between"
            >
                {/*begin::Left*/}
                <div className="d-flex align-items-center">


                    {/*begin::Logo*/}
                    <a href="index-2.html">
                        <img
                            alt="Logo"
                            src={logo}
                            className="h-50px"
                        />
                    </a>
                    {/*end::Logo*/}
                </div>
                {/*end::Left*/}

                {/*begin::Right*/}
                <div className="d-flex align-items-center">
                    {/*begin::Mega Menu Toggler*/}
                    <button
                        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                        id="kt_mega_menu_toggle"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_mega_menu_modal"
                    >
                        <i className="fa-solid fa-bars-sort fs-1">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                        </i>
                    </button>
                    {/*end::Mega Menu Toggler*/}



                    {navbar.map((data) => {
                        return (
                            <Link to={data.path} key={data.path}>
                                <button
                                    className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6 p-1"
                                >
                                    <i className={`${data.icon} fs-1 fs-lg-1`}>
                                    </i>
                                </button>
                            </Link>
                        )
                    })}
                    {/*begin::home*/}


                    {/*begin::User*/}
                    <div className="ms-1 ms-lg-6">
                        {/*begin::Toggle*/}
                        <div
                            className="btn btn-icon btn-sm btn-active-bg-accent"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            id="kt_header_user_menu_toggle"
                        >
                            <i className="fa-solid fa-user-tie fs-1 "
                            ><span className="path1"></span><span className="path2"></span
                            ></i>
                        </div>
                        {/*begin::Menu*/}
                        <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-300px"
                            data-kt-menu="true"
                        >
                            <div
                                className="menu-content fw-semibold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
                                style={{
                                    backgroundImage: "url('../../assets/media/misc/dropdown-header-bg.jpg')",
                                }}

                            >
                                <div className="symbol symbol-45px mx-5 py-5">
                                    <span className="symbol-label bg-primary align-items-end">
                                        <img
                                            alt="Logo"
                                            src="../../assets/media/svg/avatars/001-boy.svg"
                                            className="mh-35px"
                                        />
                                    </span>
                                </div>
                                <div className="">
                                    <span className="text-white fw-bold fs-4"
                                    >Hello, James</span
                                    >
                                    <span className="text-white fw-semibold fs-7 d-block"
                                    >CRM Product Designer</span
                                    >
                                </div>
                            </div>

                            {/*begin::Row*/}
                            <div className="row row-cols-2 g-0">
                                <a
                                    href="../profile/my-account.html"
                                    className="border-bottom border-end text-center py-10 btn btn-active-color-success rounded-0"
                                >
                                    <i className="ki-duotone ki-element-11 fs-3x me-n1"
                                    ><span className="path1"></span><span className="path2"></span
                                    ><span className="path3"></span><span className="path4"></span
                                    ></i>
                                    <span className="fw-bold fs-6 d-block pt-3">
                                        My Profile
                                    </span>
                                </a>

                                <a
                                    href="../../profile/account.html"
                                    className="col border-bottom text-center py-10 btn btn-active-color-success rounded-0"
                                >
                                    <i className="ki-duotone ki-switch fs-3x me-n1"
                                    ><span className="path1"></span><span className="path2"></span
                                    ></i>
                                    <span className="fw-bold fs-6 d-block pt-3">
                                        Settings
                                    </span>
                                </a>

                                <a
                                    href="../profile/settings.html"
                                    className="col text-center border-end py-10 btn btn-active-color-success rounded-0"
                                >
                                    <i className="ki-duotone ki-euro fs-3x me-n1"
                                    ><span className="path1"></span><span className="path2"></span
                                    ><span className="path3"></span
                                    ></i>
                                    <span className="fw-bold fs-6 d-block pt-3">
                                        Subscriptions
                                    </span>
                                </a>

                                <a
                                    href="../auth/login.html"
                                    className="col text-center py-10 btn btn-active-color-success rounded-0"
                                >
                                    <i className="ki-duotone ki-entrance-right fs-3x me-n1"
                                    ><span className="path1"></span><span className="path2"></span
                                    ></i>
                                    <span className="fw-bold fs-6 d-block pt-3">
                                        Sign Out
                                    </span>
                                </a>
                            </div>
                            {/*end::Row*/}
                        </div>
                        {/*end::Menu*/}
                    </div>
                    {/*end::User*/}


                    {/*begin::Aside Toggler*/}
                    {/*end::Aside Toggler*/}

                    {/*begin::Sidebar Toggler*/}
                    <button
                        className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
                        id="kt_sidebar_toggler"
                    >
                        <i className="ki-duotone ki-abstract-14 fs-1 text-gray-900"
                        ><span className="path1"></span><span className="path2"></span
                        ></i>
                    </button>
                    {/*end::Sidebar Toggler*/}
                </div>
                {/*end::Right*/}
            </div>
            {/*end::Container*/}
        </div>
    )
}

export default Navbar