// General Pop Up Window Component For Posting Website
import React from 'react'
import './PopUpWindow.css';

const PopUpWindow = ({className, popUpTitle, toggleAction, popUpBody, popUpFooter}) => (
    <div className={`popup ${className}`}>
        <div className='popup-main'>
            <div className='popup-header'>
                <div className='popup-title'>{popUpTitle}</div>
                <div className='popup-spacer'/>
                <button className='close-popup' onClick={toggleAction}>X</button>
            </div>
            <div className='popup-body'>
                {popUpBody}
            </div>
            <div className='popup-footer'>
                <div className='popup-spacer'/>
                {popUpFooter}
            </div>
        </div>
    </div>
)

export default PopUpWindow
