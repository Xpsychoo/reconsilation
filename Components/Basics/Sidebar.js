import React, { useState } from 'react';
import BarsIcon from './svg/BarsIcon';
import { useSelector, useDispatch } from 'react-redux';
import { fullView, closedView } from '@/store/sideViewSlice';
import DashboardIcon from './svg/DashboardIcon';
import Link from 'next/link';
import ReconciliationIcon from './svg/ReconciliationIcon';
import ArrowDown from './svg/ArrowDown';

const Sidebar = () => {
  const sideView = useSelector(state => state.sideView.value);
  const dispatch = useDispatch();
  const [viewList, setViewList] = useState('');

  function sideListToggle(value) {
    setViewList((prevState) => value === prevState ? '' : value);
  }

  const sideToggle = () => {
    dispatch(sideView === 'open' ? closedView() : fullView());
  };

  return (
    <div className={`SideMain ${sideView}`}>
      <div className="sideHeader">
        <div className="icon" onClick={sideToggle}>
          <BarsIcon />
        </div>
      </div>
      <ul className="sideList">
        <Link href='/'>
          <li className="list-item">
            <div className="headings">
              <div className="icon"> <DashboardIcon /> </div>
              <div className="text"> Dashboard </div>
            </div>
          </li>
        </Link>
        <li className="list-item">
          <div className="headings" onClick={() => sideListToggle('Reconsilation')}>
            <div className="icon x2"> <ReconciliationIcon /> </div>
            <div className="text"> Reconsilation </div>
            <div className={`arrowIcon ${viewList === 'Reconsilation' && 'open'}`}>
              <ArrowDown />
            </div>
          </div>
          {viewList === 'Reconsilation' && <ul className="sidesublist">
            <Link href='/Reconsilation'>
              <li className="child-list">26AS</li>
            </Link>
          </ul>}
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
