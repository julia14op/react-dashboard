import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <nav>
    
        <div >
        <input
            type="text"
            placeholder="Search..."
            className='searchBar'

          InputProps={{
            startAdornment: (
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
 </div>
 
 <div className='nav2'>
            <ul>
              <li> Feedback</li>
              <li>Contact</li>
              <li>Help</li>
              </ul>
</div>

<div className='nav3'>
  <ul>
              <li>
              <IconButton >
          <Badge badgeContent={1}>
            <NotificationsIcon  color="#A49EDB" />
          </Badge>
        </IconButton>
                </li>

              <li>
              <IconButton>
          <AccountCircleIcon color='#00C3F8' />
        </IconButton>
                </li>
            </ul>
            </div>

            
          </nav>
  
  );
}



export default Header
