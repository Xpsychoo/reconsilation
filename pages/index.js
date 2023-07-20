import HomeScreen from '@/Components/HomeScreens/HomeScreen'
import SignInScreen from '@/Components/SignInScreens/SignInScreen'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { hasCookie } from 'cookies-next';
import { LoggedOut, loggedIn } from '@/store/userLoginSlice';

export default function Home() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasCookie('loggedIn')) {
      dispatch(loggedIn());
    } else {
      dispatch(LoggedOut());
    }
  }, [isLoggedIn])


  return (
    <div className="MainWrapper">
      {isLoggedIn ? <HomeScreen /> : <SignInScreen />}
    </div>
  )
}
