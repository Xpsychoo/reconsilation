import HomeScreen from '@/Components/HomeScreens/HomeScreen'
import SignInScreen from '@/Components/SignInScreens/SignInScreen'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { hasCookie } from 'cookies-next';
import { LoggedOut, loggedIn } from '@/store/userLoginSlice';

export default function Home() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);
  const dispatch = useDispatch();
  const [isLoader, setisLoader] = useState(true);

  useEffect(() => {
    if (hasCookie('loggedIn')) {
      dispatch(loggedIn());
      setisLoader(false)
    } else {
      dispatch(LoggedOut());
      setisLoader(false)
    }
  }, [isLoggedIn])


  return (
    <div className="MainWrapper">
      {isLoader && <div className="mainLoader"> <img src="/images/yesaudit.png" alt="Yesaudit" />  </div>}
      {isLoggedIn ? <HomeScreen /> : <SignInScreen />}
    </div>
  )
}
