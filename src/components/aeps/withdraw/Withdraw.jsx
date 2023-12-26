import React, { useState } from 'react'
import DepositForm from './DepositForm'
import DepositFinger from './DepositFinger'
import AepsSideBar from '../AepsSideBar'
import DepositInstruction from './DepositInstruction'
import Navbar from '../../../commons/Navbar'
import DepositSuggestion from './DepositSuggestion'
import DepositRecipt from './DepositRecipt'
import DepositSuccess from './WithdrawSuccess'
import DepositDetails from './DepositDetails'
import { DepositFun } from '../../../context/DepositContext'

const Withdraw = () => {

    const {show, setShow} = DepositFun()


    const handle = () => {
        setShow(true)
    }
    const handleFalse = () => {
        setShow(false)
    }

    return (
        <div>
            <div id="kt_body"
                className="header-fixed header-tablet-and-mobile-fixed aside-enabled aside-fixed aside-primary-enabled aside-secondary-disabled">

                <div className="d-flex flex-column flex-root">

                    <div className="page d-flex flex-row flex-column-fluid">
                        <AepsSideBar />
                    </div>
                    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        <Navbar />
                        <div className="flex-column flex-column-fluid">

                            <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
                                <div className="container-xxl">

                                    {
                                        !show ? (
                                            <div className="row g-0 g-xl-5 g-xxl-12">

                                                <div className="col-xl-5">
                                                    <DepositForm />
                                                </div>
                                                <div className="col-xl-4">
                                                    {/* <DepositSuggestion/> */}
                                                    <DepositFinger handle={handle} />
                                                </div>
                                                <div className="col-xl-3">

                                                    <DepositInstruction />
                                                </div>
                                            </div>
                                        )
                                            : (
                                                <div className="row g-0 g-xl-5 g-xxl-12">

                                                    <div className='col-xl-3'>
                                                        <DepositSuccess handleFalse = {handleFalse} />

                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <DepositRecipt />

                                                    </div>
                                                    <div className='col-xl-3'>
                                                        <DepositDetails />

                                                    </div>
                                                </div>

                                            )
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Withdraw