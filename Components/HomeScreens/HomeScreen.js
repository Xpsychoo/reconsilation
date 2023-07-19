import React from 'react'
import { useSelector } from 'react-redux';
import TopNav from '../Basics/TopNav';
import Sidebar from '../Basics/Sidebar';

export default function HomeScreen() {
    const sideView = useSelector((state) => state.sideView.value);
  return (
    <React.Fragment>
        <TopNav />
        <div className="MainContent">
          <Sidebar />
          <div className={`content ${sideView}`}>
            Dashboard
          </div>
        </div>
    </React.Fragment>
  )
}
