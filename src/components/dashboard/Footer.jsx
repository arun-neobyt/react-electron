import React from 'react'

const Footer = () => {
    return (
        <div className="d-flex flex-column flex-md-row flex-stack px-10">
            <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-semibold me-2">2023©</span>
                <a
                    href="https://neobyt.com"
                    target="_blank"
                    className="text-gray-800 text-hover-primary"
                >
                    NeoByt Fintech Pvt. Ltd.
                </a>
            </div>
            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item">
                    <a
                        href="https://neobyt.com/about-us"
                        target="_blank"
                        className="menu-link px-2"
                    >
                        About
                    </a>
                </li>
                <li className="menu-item">
                    <a
                        href="https://neobyt.com/support"
                        target="_blank"
                        className="menu-link px-2"
                    >
                        Support
                    </a>
                </li>
                <li className="menu-item">
                    <a
                        href="https://neobyt.com/purchase"
                        target="_blank"
                        className="menu-link px-2"
                    >
                        Purchase
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer