import Link from 'next/link'
import React from 'react'
import ArrowLeft from '../Basics/svg/ArrowLeft'
import { useRouter } from 'next/router'

export default function AddReconsilation() {
    const router = useRouter()

    function submitHandler(e) {
        e.preventDefault();
        router.push('/ReconciliationProcess')
    }
    return (
        <React.Fragment >
            <div className="screenHead">
                <div className="heads">New 26AS Reconciliation</div>
                <Link href='/Reconsilation'>
                    <button className="btn btn-primary add-btn">
                        <div className="icon"><ArrowLeft /></div>
                        <div className="text">Go Back</div>
                    </button>
                </Link>
            </div>
            <div className='addReconciliation'>
                <div className="row">
                    <div className="col-xl-6 col-md-10 col-sm-12 col-12">
                        <form onSubmit={submitHandler}>
                            <div className="form-box">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                        <label htmlFor="recoName" className="form-label">Reconciliation Name
                                            <span className="text-danger ms-1">*</span>
                                        </label>
                                    </div>
                                    <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                                        <input
                                            className='form-control'
                                            type="text" id='recoName'
                                            name='recoName'
                                            placeholder='Enter Reco Name'
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="form-box">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                        <label htmlFor="startDate" className="form-label">Start Date
                                            <span className="text-danger ms-1">*</span>
                                        </label>
                                    </div>
                                    <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                                        <input className='form-control' type="date" id='startDate' name='startDate' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-box">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                        <label htmlFor="endDate" className="form-label">End Date
                                            <span className="text-danger ms-1">*</span>
                                        </label>
                                    </div>
                                    <div className="col-xl-8 col-md-8 col-sm-12 col-12">
                                        <input className='form-control' type="date" id='endDate' name='endDate' />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box d-flex">
                                <button className="btn btn-primary ms-auto">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
