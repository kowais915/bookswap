import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import styles from '../../styles/Dashboard.module.css'
import {useState} from 'react';

// * dashboard components
import UpateProfile from './UpdateProfile';
import Avatar from '@mui/material/Avatar'
import {ListItems} from './ListItems';
import Books from './pages/Books';
import UserIcon from './UserIcon';
import Add from './pages/Add';

// * importing dashboard context
import {DashboardContext} from '../../context/DashboardContext';
import {useContext } from 'react';
import UpdateProfile from './UpdateProfile';
import Exchanged from './pages/Exchanged';
import Profile from './pages/Profile';

// * dark mode context

import {ThemeContext } from '../../context/ThemeContext';







function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
       BookSwap
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const defaultTheme = createTheme();

export default function Dashboard() {

  // * Theme context
  const {color, changeColor } = useContext(ThemeContext);

  //* using page's value from context
  const {page, changePage, dispatch} = useContext(DashboardContext);


  //  * destructring the listitems 
  const mainListItems  = ListItems();



  // *conditonal rendering based context state
 
  const myPage = (page)=>{
    switch(page){
      case "Update Information":
        return <UpdateProfile/>
        break;
      case "Home":
        return <UpdateProfile/>
        break;
      case "List a Book":
          return <Add/>
          break;
      case "Books":
        return <Books/>
        break;
      case "Exchanged":
        return <Exchanged/>
        break;
      case "Profile":
        return <Profile/>
        break;
    }

  }


  // * handlpage 

  const handlePage = (event)=>{
    setPage()
  }


  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar position="absolute" open={open} className ={styles.appbar} style={{background: color}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {page}
            </Typography>

            <Stack direction="row" spacing={2}>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="error">
              
              <NotificationsIcon/>
               
              </Badge>
            </IconButton>

                {/* {//* user avatar} */}
                  <UserIcon/>

            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >

          <Typography
                align='center'
                style={{margin:"25px", color: 'brown'}}
                variant='h5'

              >

                BookSwap
                
            </Typography>
            <IconButton onClick={toggleDrawer}>
             
              <ChevronLeftIcon />
            </IconButton>

          
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          
          </List>
        </Drawer>

        {/* //* dashboard content start here */}
        <Box
          className={styles.paper}
          component="main"
          
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3} >
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height:700,
                  
                    
                  }}

                  align="center"

                  className={styles.paper}
                >
                
              

                  {myPage(page)}
                

                </Paper>
              </Grid>
              
        
             

            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}