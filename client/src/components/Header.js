import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {

    return (

        <div className="ui secondary pointing menu">
            <Link to='/' className='item'>
                Video Streamer
                </Link>
            <div className="right menu">
                <Link to='/' className='item'>
                    All Streams
                    </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;



//460071429019 - bp17r52pn68kigotv97ad2o3tr1a0oqb.apps.googleusercontent.com
