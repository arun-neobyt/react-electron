import React from 'react'
import Plan from './Plan'
import Services from './Services'
import Reports from './Reports'
import Navbar from './Navbar'
import Footer from './Footer'
import Stats from './Stats'

const Dashboard = () => {
    return (
        <div>
            <div
                id="kt_body"
                data-sidebar="on"
                className="header-fixed header-tablet-and-mobile-fixed sidebar-enabled d-flex "
            >
                <div className='col-9 container-xxl'>
                    <Navbar />
                    <div className='row g-0 g-xl-5 g-xxl-8'>
                        <div className='col-4'>
                            <Plan />
                        </div>
                        <div className='col-8'>
                            <div className="shortcuts">
                                <Services />
                            </div>
                            <div className="reports">
                                <Reports />
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                <div className='col-3'>
                    <Stats />
                </div>

            </div>
        </div>
    )
}

export default Dashboard
