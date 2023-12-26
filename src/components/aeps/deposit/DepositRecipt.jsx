import React from 'react'
import logo from '../../../assets/img/app/ico_neobyt_256.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import enRecipt from '../../../labelData/en.json'

const DepositRecipt = () => {

    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CashWithdraw.pdf");
    };

    const handlePrint = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.autoPrint();
        window.open(pdf.output("bloburl"), "_blank");
    };

    let recipt = enRecipt.aepsRecipt

    return (
        <div>
            <div id="kt_app_content_container" className="app-container container-xxl ">

                <div className="card col-12 aeps-form">
                    <div className='d-flex justify-content-end pt-5 pe-4'>
                        <div className="float-end ">
                            <button
                                className="btn btn-info btn-sm mx-1"
                                onClick={handleDownloadPdf}
                            >
                                <i className="fa-solid fa-download"></i>
                            </button>
                            <button
                                className="btn btn-info btn-sm mx-1"
                                onClick={handlePrint}
                            >
                                <i className="fa-solid fa-print"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body" ref={printRef}>

                        <div className="mw-lg-950px mx-auto w-100">

                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <div>
                                    <img className="w-30px h-30px"
                                        src={logo} alt="" />
                                </div>
                                <h6 className="text-center fw-bolder text-gray-800 pe-5">NeoByt Fintech
                                    PVT. LTD.</h6>
                            </div>

                            <div className="pb p-4">

                                <div className="d-flex flex-column gap-7 gap-md-6">

                                    <div className="separator"></div>


                                    <div className="d-flex flex-column flex-sm-row fw-bold">

                                        <div className="flex-root d-flex flex-column gap-3">
                                            <div className="d-flex flex-column">
                                                <span className="text-muted">{recipt.map((data) => data.agentId)}</span>
                                                <span className="fs-5">12345678987687</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Agent Name</span>
                                                <span className="fs-5">Rajesh Kumar</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Terminal ID</span>
                                                <span className="fs-5">12223435456575</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">UIDAI Auth Code</span>
                                                <span
                                                    className="fs-5">495c6f186-c0dd-4b4c-916a-12132324344</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">RRN</span>
                                                <span className="fs-5">5908764587123</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Customer Phone No</span>
                                                <span className="fs-5">9773518045</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Bank</span>
                                                <span className="fs-5">State Bank Of India</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Payment Method</span>
                                                <span className="fs-5">AEPS</span>
                                            </div>




                                        </div>

                                        <div className="flex-root text-end d-flex flex-column gap-3">
                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Date</span>
                                                <span className="fs-5">29 November, 2023</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="fs-5"><img className="w-80px h-80px"
                                                    src="../../assets/media/misc/dropdown-header-bg.jpg"
                                                    alt="QR_code" /></span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">STAN</span>
                                                <span className="fs-5">4234225345345</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Aadhar Number</span>
                                                <span className="fs-5">123456789123</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">IIN Number</span>
                                                <span className="fs-5">508548</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Transaction Status</span>
                                                <span className="fs-5">Successful</span>
                                            </div>

                                            <div className="d-flex flex-column">
                                                <span className="text-muted">Transaction Amount</span>
                                                <span className="fs-5">500</span>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositRecipt