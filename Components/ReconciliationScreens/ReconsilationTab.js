import React from 'react'

export default function ReconsilationTab() {
  return (
    <div className="tabs-box">
            <div className=" col-xl-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                    <div className="form-box">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                <label htmlFor="TanNO" className="form-label">Reco ID : </label>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                               22073
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                <label htmlFor="TanNO" className="form-label">Status : </label>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                              <span className="bg-warning px-2 py-1 rounded text-light"> Done</span> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                <label htmlFor="TanNO" className="form-label">Period/Date : </label>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                               2023-04-01 to 2023-07-20
                            </div>
                        </div>
                    </div>
                    
                    <div className="button-box ">
                        <button className="btn btn-light">Auto Reconciliation</button>
                        <button className="btn btn-orange">Stop Reconciliation</button>
                        <button className="btn btn-warning text-light">Download</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
