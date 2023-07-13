import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import styles from '../../styles/Icons.module.css'
import  {useRouter} from 'next/router';

// *using context
import {useContext } from 'react';
import {DashboardContext } from '../../context/DashboardContext';





const ListItems = () => {
  const router = useRouter();
  const {page, changePage} = useContext(DashboardContext);

  console.log('current page', page);
  const changer = ()=>{
    alert('clicked')
    router.push('/')
   
  }

  const mainListItems = (



    <React.Fragment>
  
      <ListItemButton 
         onClick={  ()=> router.push('/')}
      >
        <ListItemIcon>
            <DashboardIcon className={styles.icon} />
          </ListItemIcon>
          <ListItemText primary="Home"  />
        </ListItemButton>



      <ListItemButton

        onClick={()=>changePage('Update Information')}
      
      >
  
  
        <ListItemIcon>
          <DashboardIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary="Update Information" />
      </ListItemButton>
     

     {/* //* profile */}
      <ListItemButton
         onClick={()=>changePage('Profile')}
      
      >
        <ListItemIcon>
          <PeopleIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>

      {/* //* Exchanged */}
      <ListItemButton
      onClick={()=>changePage('Exchanged')}
      
      >
        <ListItemIcon>
          <BarChartIcon className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary="Exchanged" />
      </ListItemButton>

      {/* //* integrations */}
      <ListItemButton
        onClick={()=>changePage('Integrations')}
      >
        <ListItemIcon>
          <LayersIcon className={styles.icon}/>
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );


  return { mainListItems };

  
}
 
export default ListItems;

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );