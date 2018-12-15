import React, { Component } from 'react';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
 state = {
   anchorEl: null
 };

 handleClick = (event) => {
   this.setState({ anchorEl: event.currentTarget });
 };

 handleClose = () => {
   this.setState({ anchorEl: null });
 };

 render() {
   const { anchorEl } = this.state;
   return (
     <div>
       <AppBar position="static">
         <Toolbar>
           <IconButton aria-label="Menu" className='icon'>
             <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
             >
               <MenuItem onClick={this.handleClose}>
                 <Link to={'/'}>Home</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                 <Link to={'/Animals'}>Animal Facts</Link>
               </MenuItem>

               <MenuItem onClick={this.handleClose}>
                  <Link to={'/Cams'}>Live Cams</Link>
                </MenuItem>

               <MenuItem onClick={this.handleClose}>
                <Link to={'/Memory'}>Memory Game</Link>
                </MenuItem>

                 <MenuItem onClick={this.handleClose}>
                <Link to={'/Playfish'}>Fish Game</Link>
                </MenuItem>

            </Menu>
            
           </IconButton>


             <Button className="col-md-3 myspace"  aria-owns={anchorEl ? 'myspace' : undefined}
             aria-haspopup="true"
             onClick={this.handleClick}
           ></    Button>
           
         </Toolbar>
       </AppBar>
     </div>
   );
 }
}