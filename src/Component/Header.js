import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Badge, Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext,useState } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';


const pages = [{name:'Products',url:'/'},
                {name:'Cart Items',url:'/cart'},
                {name:'Add New Product',url:'/new_products'},
                {name:'Sign Up',url:'/sign_up'},
                {name:'Log In',url:'/log_in'},
               ];

const LinkStyle ={
  color:"white" ,
  textDecoration:"none",
  cursor:'pointer',
  "&:hover":{
   color:'#fff', 
  }
}

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);


const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};
  
const{notification}=useContext(AppContext);
  console.log(notification);
    return (
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
          Shope Buy
            </Typography>
  
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: 'white', display: 'block' }}
                >
                  <Link to={page.url} style={LinkStyle}>{page.name} </Link> 
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            
                <Badge badgeContent={notification} color="error">
               <Link style={LinkStyle} to={'/cartdata'}>
               <ShoppingCartIcon />
               </Link> 
              </Badge>
            </IconButton>
            </Box>
          </Toolbar>
        </Container>
        
      </AppBar>
    );
  }
export default Header
