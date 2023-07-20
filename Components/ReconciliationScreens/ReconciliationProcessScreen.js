import Link from 'next/link';
import React, { useState } from 'react';
import ArrowLeft from '../Basics/svg/ArrowLeft';
import { useRouter } from 'next/router';
import FileUploadComponent from './FileUploadComponent';
import MapFieldTds from './MapFieldTds';
import MapFieldsAs from './MapFieldsAs';
import ReconsilationTab from './ReconsilationTab';

const ReconciliationProcessScreen = () => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState('File Upload');

    const handleTabClick = (tabName) => {
        setCurrentTab(tabName);
    };

    return (
        <>
            <div className="screenHead">
                <div className="heads">26AS Reconciliation</div>
                <Link href="/Reconsilation">
                    <button className="btn btn-primary add-btn">
                        <div className="icon">
                            <ArrowLeft />
                        </div>
                        <div className="text">Go Back</div>
                    </button>
                </Link>
            </div>
            <div className="addReconciliation">
                <div className="tabsSection">
                    <div className="tabs-buttons-wrapper">
                        {['File Upload', 'Map Fields TDS Ledger', 'Map Fields 26AS', 'Reconciliation'].map((tabName) => (
                            <button
                                key={tabName}
                                className={`btn ${currentTab == tabName && 'active'}`}
                                onClick={() => handleTabClick(tabName)} >
                                {tabName}
                            </button>
                        ))}
                    </div>
                    <div className="tabs-content">
                        {currentTab === 'File Upload' && <FileUploadComponent />}
                        {currentTab === 'Map Fields TDS Ledger' && <MapFieldTds />}
                        {currentTab === 'Map Fields 26AS' && <MapFieldsAs />}
                        {currentTab === 'Reconciliation' && <ReconsilationTab />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReconciliationProcessScreen;
