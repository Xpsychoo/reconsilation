import Sidebar from '@/Components/Basics/Sidebar';
import TopNav from '@/Components/Basics/TopNav';
import AddReconsilation from '@/Components/ReconciliationScreens/AddReconsilation';
import React from 'react'
import { useSelector } from 'react-redux';

export default function AddReconciliation() {
    const sideView = useSelector((state) => state.sideView.value);

    return (
        <div className='MainWrapper'>
            <TopNav />
            <div className="MainContent">
                <Sidebar />
                <div className={`content ${sideView}`}>
                    <AddReconsilation />
                </div>
            </div>
        </div>
    )
}
