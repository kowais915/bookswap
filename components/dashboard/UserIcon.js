import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import {useRouter } from 'next/router'

// * using auth context

import {useAuthContext } from '../../hooks/useAuthContext';
import { useSignout } from '@/hooks/useSignout';

export default function UserIcon() {
    //* user from the context

    const {user } = useAuthContext();



    // * importing "signout" function to log the user out from the dashbaord menu
    const {signout} = useSignout();

    const router = useRouter();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    signout();
    if(!user){
        router.push('/');
    }

  };

  return (
    <div>
     
     <Avatar
        src='/user.jpeg'
        alt='book'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    />

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}