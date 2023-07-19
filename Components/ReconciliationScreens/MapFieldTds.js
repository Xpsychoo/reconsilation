import React, { useState } from 'react'
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function MapFieldTds() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="tabs-box">
            <div className=" col-xl-7 col-md-7 col-sm-12 col-12">
                <div className="row maps-head">
                    <div className="col-xl-4 col-ms-4 col-sm-12 col-12">
                        <div className="head">Firmway Fields</div>
                    </div>
                    <div className="col-xl-4 col-ms-4 col-sm-12 col-12">
                        <div className="head">Excel headers</div>
                    </div>
                    <div className="col-xl-4 col-ms-4 col-sm-12 col-12">
                        <div className="head">Value</div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-box">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                                <label htmlFor="TanNO" className="form-label">TAN
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-5 col-md-5 col-sm-12 col-12">
                                <Select
                                    id='TanNO'
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                                <label htmlFor="tdsAmt" className="form-label">TDS Amount
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-5 col-md-5 col-sm-12 col-12">
                                <Select
                                    id='tdsAmt'
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                                <label htmlFor="trncDate" className="form-label">Transaction Date
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-5 col-md-5 col-sm-12 col-12">
                                <Select
                                    id='trncDate'
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                                <label htmlFor="partyName" className="form-label">Party Name
                                    <span className="text-danger ms-1">*</span>
                                </label>
                            </div>
                            <div className="col-xl-5 col-md-5 col-sm-12 col-12">
                                <Select
                                    id='partyName'
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="button-box ">
                        <button className="btn btn-light">Previous</button>
                        <button className="btn btn-primary">Save & Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
