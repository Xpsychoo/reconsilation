import React from 'react'

export default function FileUploadComponent() {
    return (
        <div className="tabs-box">
            <div className="form-box">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                <label htmlFor="tdsledger" className="form-label">TDS Ledger
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                                <input type="file" className='form-control' id='tdsledger' name='tdsledger'
                                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-box">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                <label htmlFor="26AS" className="form-label">26AS
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                                <input type="file" className='form-control' id='26AS' name='26AS'
                                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-box col-xl-6 xol-md-6 col-sm-12 col-12">
                <button className="btn btn-primary">Upload</button>
                <button className="btn btn-primary">Next</button>
            </div>
            <div className="note-box">
                <div className="header">Note :-</div>
                <ol type='1'>
                    <li className="list-item">File Types Supported .xlsx or .xls</li>
                    <li className="list-item">The Maximum file size is 5 MB</li>
                </ol>
            </div>
        </div>
    )
}
