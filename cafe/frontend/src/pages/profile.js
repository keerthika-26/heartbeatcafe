import React from 'react';
import './profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <h3 style={{ textAlign: 'center' }}>No user data found</h3>;
  }

  return (
    <div className="profile-container">
      <div className="profile-name">
        Name: {user.Firstname} {user.secondname}
      </div>

      <div className="profile-text">Username: {user.username}</div>
      <div className="profile-text">Email: {user.email}</div>
      <div className="profile-text">Phone: {user.phonenumber}</div>
      <div className="profile-text">Aadhar: {user.adharnumber}</div>
      <div className="profile-text">Address: {user.address}</div>
      <div className="profile-text">Role: {user.role}</div>
      <div className="profile-text">User ID: {user.userId}</div>
    </div>
  );
};

export default Profile;


