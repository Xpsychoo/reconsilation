import React from 'react'
import { useSelector } from 'react-redux';
import TopNav from '../Basics/TopNav';

export default function HomeScreen() {
    const sideView = useSelector((state) => state.sideView.value);
  return (
    <div>
        <TopNav />
    </div>
  )
}
