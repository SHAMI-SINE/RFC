import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen,setMobileOpen]= useState(false)
  //handleMenu click
  const handlerDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //Menu Drawer
  const drawer =(
    <Box onClick={handlerDrawerToggle} sx={{textAlign:'center'}}> 
     <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component="div" 
          sx={{flexGrow:1, my:2}}>

            <FastfoodIcon />
            RFC Chines Restaurant
            </Typography>
            <Divider />
            
              <ul className= "mobile-navigation">
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            

    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor: "black" }}>
        <Toolbar>
          <IconButton 
          color="inherit" 
          aria-label="open drawer" 
          edge="start" 
          sx={{mr:2,
          display:{sm:"none"},
          }}
          onClick={handlerDrawerToggle}
          >
            <MenuIcon />

          </IconButton>
          <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component="div" 
          sx={{flexGrow:1}}>

            <FastfoodIcon />
            RFC Chines Restaurant
            </Typography>
            
            <Box sx={{ display:{ xs: 'none', sm:"block"} }}>
              <ul className= "navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink ctiveClassName="active" to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink ctiveClassName="active" to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink ctiveClassName="active" to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer 
        variant="temporary"
        open={mobileOpen}
        onClose={handlerDrawerToggle}
        sx={{display:{xs:'block',sm:'none'},
        "$ .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
        },
      }}
        >
          {drawer}
        </Drawer>

      </Box>
      <Box >
        <Toolbar />
      </Box>
    </Box>
      
    </>
  )
}

export default Header
