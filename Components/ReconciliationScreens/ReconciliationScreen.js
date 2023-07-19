import React from 'react'
import { useSelector } from 'react-redux';
import TopNav from '../Basics/TopNav';
import Sidebar from '../Basics/Sidebar';
import dynamic from 'next/dynamic';
import PlusIcon from '../Basics/svg/PlusIcon';
import Link from 'next/link';

const DynamicTable = dynamic(
  () => import('./ReconsilationMui'),
  { ssr: false }
)

export default function ReconciliationScreen() {
  const sideView = useSelector((state) => state.sideView.value);
  return (
    <React.Fragment>
      <TopNav />
      <div className="MainContent">
        <Sidebar />
        <div className={`content ${sideView}`}>
          <div className="dashboadheader">
            <div className="head">  Reconciliation </div>
            <div className="add-button">
            <Link href='/AddReconciliation'>
              <button className="btn btn-primary add-btn">
                <div className="icon"><PlusIcon /></div>
                <div className="text">Add new</div>
              </button>
              </Link>
            </div>
          </div>
          <div className="contentunder">
            <DynamicTable />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
