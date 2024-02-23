import React, { Component } from 'react';
import './Main2.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faPhoneVolume, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faFacebook, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
const phone = <FontAwesomeIcon icon={faPhone} size='2x' />;
const email = <FontAwesomeIcon icon={faTelegram} size='2x' />;
const web = <FontAwesomeIcon icon={faGlobe} size='2x' />;
const facebook = <FontAwesomeIcon icon={faFacebook} size='3x' />;
const twitter = <FontAwesomeIcon icon={faSquareTwitter} size='3x' />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size='3x' />;

class Main2 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='left'>
                    <h className='contact'>Contact Information</h>
                    <p id='text' className='text instruction'>Fill up the form and our team will get back to you within 24 hours</p>
                    <div className='static'>
                        <div className='box'>
                            <div className='det'>
                                <p className='symbol'> {phone} </p>
                                <p className='text'>Phone: +{this.props.phone}</p>
                            </div>
                            <div className='det'>
                                <p className='symbol'> {email} </p>
                                <p className='text'>Email: {this.props.email}</p>
                            </div>
                            <div className='det'>
                                <p className='symbol'> {web} </p>
                                <p className='text'>Website: <a href='#'>{this.props.website}</a></p>
                            </div>
                        </div>
                    </div>


                    <div className='dynamic'>
                            <a href='Facebook.com'>{facebook}</a>
                            <a href='twitter.com'>{twitter}</a>
                            <a href='linkedin.com'>{linkedin}</a>
                    </div>

                </div>
                <div className='right'>
                    <h className='msg'>Send us a message</h>
                    <form className='form'>
                        <div className='top'>
                            <input className='firstname' type='text' placeholder='  First Name'></input>
                            <input className='lastname' type='text' placeholder='   Last Name'></input>
                        </div>
                        <div className='middle'>
                            <input className='mail' type='text' placeholder='   Mail'></input>
                            <input className='phone' type='text' placeholder='   Phone'></input>
                        </div>
                        <div className='bottom'>
                            <input className='message' placeholder='Write your message'></input>
                            <button className='submit' placeholder='Send Message'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main2;