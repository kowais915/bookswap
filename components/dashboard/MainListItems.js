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
// *  icons
import EditIcon from '@mui/icons-material/Edit';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


// * using context
import {useContext } from 'react';
import {DashboardContext } from '../../context/DashboardContext';
const MainListItems = () => {
    const router = useRouter();
    const {page, changePage} = useContext(DashboardContext);
  
    console.log('current page', page);
    const changer = ()=>{
      alert('clicked')
      router.push('/')
     
    }
  
    const handleRoute = ()=>{
      router.push('/')
    }
  
  
return    (



        <React.Fragment>
      
          <ListItemButton 
             onClick={  ()=> router.push('/')}
          >
            <ListItemIcon>
                <HomeIcon className={styles.icon} />
              </ListItemIcon>
              <ListItemText primary="Home"  />
            </ListItemButton>
    
    
            <ListItemButton 
             onClick={()=>changePage('List a Book')}
          >
            <ListItemIcon>
                <AddCircleOutlineIcon className={styles.icon} />
              </ListItemIcon>
              <ListItemText primary="List a Book"  />
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
    
          {/* //* update information */}
    
    
    
            <ListItemButton
    
              // onClick={()=>changePage('Update Information')}
              onClick={()=> changePage('Update Information')}
            
            >
        
        
              <ListItemIcon>
                <EditIcon className={styles.icon} />
              </ListItemIcon>
              <ListItemText primary="Update Information" />
            </ListItemButton>
         
    
          {/* //* Exchanged */}
          <ListItemButton
          onClick={()=>changePage('Exchanged')}
          
          >
            <ListItemIcon>
              <MoveUpIcon className={styles.icon}/>
            </ListItemIcon>
            <ListItemText primary="Exchanged" />
          </ListItemButton>
    
          {/* //* integrations */}
          <ListItemButton
            onClick={()=>changePage('Books')}
          >
            <ListItemIcon>
              <ImportContactsIcon className={styles.icon}/>
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </React.Fragment>
      );
}
 
export default MainListItems;