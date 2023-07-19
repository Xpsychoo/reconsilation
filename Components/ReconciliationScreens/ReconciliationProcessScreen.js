import Link from 'next/link'
import React from 'react'
import ArrowLeft from '../Basics/svg/ArrowLeft'
import { useRouter } from 'next/router'

export default function ReconciliationProcessScreen() {
    const router = useRouter()

    function submitHandler(e) {
        e.preventDefault();
        router.push('/ReconciliationProcess')
    }

  return (
    <React.Fragment >
            <div className="screenHead">
                <div className="heads">26AS Reconciliation</div>
                <Link href='/Reconsilation'>
                    <button className="btn btn-primary add-btn">
                        <div className="icon"><ArrowLeft /></div>
                        <div className="text">Go Back</div>
                    </button>
                </Link>
            </div>
            <div className='addReconciliation'>
                <div className="tabsSection">
                    
                </div>
            </div>
        </React.Fragment>
  )
}
