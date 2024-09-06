import { AppBar,Card, IconButton, Toolbar,Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

// MenuI
const Navbar=()=>{
    return(
    <>

<Card variant="outlined">test</Card>
        <AppBar position="static" sx={{backgroundColor:"red"}}>
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
    </>)
}

export default Navbar;

