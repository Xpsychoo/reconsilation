import Sidebar from '@/Components/Basics/Sidebar';
import TopNav from '@/Components/Basics/TopNav';
import ReconciliationProcessScreen from '@/Components/ReconciliationScreens/ReconciliationProcessScreen';
import React from 'react'
import { useSelector } from 'react-redux';

export default function ReconciliationProcess() {
    const sideView = useSelector((state) => state.sideView.value);

    return (
        <div className='MainWrapper'>
            <TopNav />
            <div className="MainContent">
                <Sidebar />
                <div className={`content ${sideView}`}>
                    <ReconciliationProcessScreen />
                </div>
            </div>
        </div>
    )
}
