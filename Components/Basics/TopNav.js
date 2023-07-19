import Link from 'next/link';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function TopNav() {
  return (
    <div className="customNav">
      <div className="brandIcon">
        <div className="logo">
          <img src="/images/logo.png" alt="User Logo" />
        </div>
      </div>
      <div className="userProfile">
        <Dropdown>
          <Dropdown.Toggle variant="profile" id="dropdown-basic">
            <div className="icon">
              <img src="/images/avatar.png" alt="userimage" />
            </div>
            <div className="details">
              <div className="name">Ajay Kumar</div>
              <div className="position">Admin</div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <ul className="profile-list">
              <Link href='/'> <li className="list-item">Profile</li></Link>
              <Link href='/Signin'> <li className="list-item">Logout</li></Link>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopNav;