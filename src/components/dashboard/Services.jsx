import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import aeps from '../../assets/img/app/aeps.svg';
import bbps from '../../assets/img/app/bills.svg';
import mamt from '../../assets/img/app/matm.svg';
import dmt from '../../assets/img/app/dmt.svg';
import pos from '../../assets/img/app/pos.svg';
import store from '../../assets/img/app/shop.svg';

const services = [
    {
        name: "AEPS",
        icon: aeps,
        path: "/aeps-deposit"
    },
    {
        name: "BBPS",
        icon: bbps,
        path: "/bbps"
    },
    {
        name: "DMT",
        icon: dmt,
        path: "/dmt"
    },
    {
        name: "mATM",
        icon: mamt,
        path: "/matm"
    },
    {
        name: "POS",
        icon: pos,
        path: "/pos"
    },
    {
        name: "Store",
        icon: store,
        path: "/store"
    },

];

const Services = () => {
    return (
        <div className='card p-5 d-flex flex-row justify-content-around'>
            {services.map((data) => (
                <div key={data.name}>
                    <Link to={data.path} className='mb-0 py-5 px-4'>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={data.name} src={data.icon} alt={data.name} />
                    </Link>
                </div>
            ))}
            <div>
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Services;
