import React from 'react'
import { useSelector } from 'react-redux';
import TopNav from '../Basics/TopNav';
import Sidebar from '../Basics/Sidebar';
import dynamic from 'next/dynamic';

const DynamicTable = dynamic(
  () => import('./ReconsilationMui'),
  { ssr: false }
)

export default function HomeScreen() {
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
              <button className="btn btn-primary">New Reco</button>
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
