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




const ListItems = () => {
  const router = useRouter();

  
}
 









export const mainListItems = (


  <React.Fragment>

    <ListItemButton onClick={()=>}>
      <ListItemIcon>
          <DashboardIcon className={styles.icon} />
        </ListItemIcon>
        <ListItemText primary="Home"  />
      </ListItemButton>
    <ListItemButton>


      <ListItemIcon>
        <DashboardIcon className={styles.icon} />
      </ListItemIcon>
      <ListItemText primary="Update Information" />
    </ListItemButton>
   
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon className={styles.icon} />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon className={styles.icon}/>
      </ListItemIcon>
      <ListItemText primary="Exchanged" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon className={styles.icon}/>
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

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