import React from "react";
import logoApp from '../../asserts/images/logo.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="sideNav-header">
      <div> <img src={logoApp} alt="logo"/></div>
      <div> <NotificationsNoneIcon color="action"/></div>
      <div> <AccountCircleIcon color="action"/></div>
      </div>
    </div>
  );
};
