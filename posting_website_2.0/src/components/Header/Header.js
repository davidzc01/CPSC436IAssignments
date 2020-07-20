import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Hidden, Menu, MenuItem, Tooltip, Divider, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'
import { updatePage, toggleMobileMenu } from '../../actions';

import './Header.css';


class Header extends React.Component {
	render() {
        const pageTitle = this.props.isHome ? 'Posting Website 2.0' : 'About';
        const mobileMenu = (
            <Menu
                anchorEl={this.props.mobileMenuAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                className='mobile-navigation-menu'
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(this.props.mobileMenuAnchorEl)}
                onClose={() => this.props.toggleMobileMenu(null)}
            >
                <MenuItem onClick={() => this.props.toggleMobileMenu(null)}>
                    <Link to="/" className="navbar-brand">
                        <HomeIcon className="menu-icon" />
                        Home
                    </Link>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={() => this.props.toggleMobileMenu(null)}>
                    <Link to="/about" className="navbar-brand">
                        <InfoIcon className="menu-icon" />
                        About
                    </Link>
                </MenuItem>
            </Menu>
        );
		return (
            <div className='header'>
                <AppBar className='header-navigation'>
                    <Toolbar>
                        <Typography className='header-page-title' variant="h6">{pageTitle}</Typography>
                        <Hidden smDown>
                            <Tooltip title="Home">
                                <Link to="/" className="navbar-brand">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className='header-navigation'
                                        aria-label="home"
                                        startIcon={<HomeIcon />}
                                        disableElevation
                                    >
                                        Home
                                    </Button>
                                </Link>
                            </Tooltip>
                            <Tooltip title="About">
                                <Link to="/about" className="navbar-brand">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className='header-navigation'
                                        aria-label="home"
                                        startIcon={<InfoIcon />}
                                        disableElevation
                                    >
                                        About
                                    </Button>
                                </Link>
                            </Tooltip>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                edge="start"
                                className='header-navigation-mobile'
                                color="inherit"
                                aria-label="menu"
                                onClick = {(e) => this.props.toggleMobileMenu(e)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        {mobileMenu}
                    </Toolbar>
                </AppBar>
            </div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        isHome: state.isHome,
        mobileMenuAnchorEl: state.mobileMenuAnchorEl,
    };
}    

export default connect(mapStateToProps, { updatePage, toggleMobileMenu })(Header);