import React from 'react';
import { connect } from 'react-redux';
import { updatePage } from '../../actions';

import './Header.css';


class Header extends React.Component {
	render() {
        const pageTitle = this.props.isHome ? 'Posting Website 2.0' : 'About';
		return (
            <header className='header'>
                <nav className='header-navigation'>
                    <div></div>
                    <div className='header-page-title'>{pageTitle}</div>
                    <div className='header-spacer'/>
                    <div className='header-navigation-items'>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
	}
}

const mapStateToProps = (state) => {
    return { isHome: state.isHome };
}    

export default connect(mapStateToProps, { updatePage })(Header);