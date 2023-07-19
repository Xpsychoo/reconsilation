import React from 'react';
import BarsIcon from './svg/BarsIcon';
import { useSelector, useDispatch } from 'react-redux';
import { fullView, closedView } from '@/store/sideViewSlice';

const Sidebar = () => {
  const sideView = useSelector(state => state.sideView.value);
  const dispatch = useDispatch();

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
        <li className="list-item">Dashboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;
