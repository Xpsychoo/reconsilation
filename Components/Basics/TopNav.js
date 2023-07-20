import Link from 'next/link';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useRouter } from 'next/router'
import { hasCookie, deleteCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { LoggedOut } from '@/store/userLoginSlice';

function TopNav() {
  const router = useRouter()
  const dispatch = useDispatch();

  function logoutFunc() {
    if (hasCookie('loggedIn')) {
      deleteCookie('loggedIn');
      router.push('/');
      dispatch(LoggedOut());
    } else {
      router.push('/')
      dispatch(LoggedOut());
    }
  }
  return (
    <div className="customNav">
      <div className="brandIcon">
        <Link href='/' className='logo'>
          <img src="/images/yesaudit.png" alt="User Logo" />
        </Link>
      </div>
      <div className="userProfile">
        <Dropdown>
          <Dropdown.Toggle variant="profile" id="dropdown-basic">
            <div className="icon">
              <img src="/images/avatar.jpg" alt="userimage" />
            </div>
            <div className="details">
              <div className="name">Ajay Kumar</div>
              <div className="position">Admin</div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <ul className="profile-list">
              <Link href='/'> <li className="list-item">Profile</li></Link>
              <li onClick={() => logoutFunc()} className="list-item">Logout</li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopNav;