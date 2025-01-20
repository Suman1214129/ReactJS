import React from 'react';
import { Link} from 'react-router-dom';

function Header() {

    return (
        <div className="text-white mx-32">
            <div className="flex items-center p-5 mx-11">
                <Link to="/" className="font-bold hover:text-[#8763ff] text-xl font-serif">CESIUM</Link>
                <nav className="flex items-center justify-around ml-auto space-x-5 text-[#a8a8a8] font-medium">
                    <Link to="/download" className="hover:text-[#8763ff]">Download</Link>
                    <Link to="/pricing" className="hover:text-[#8763ff]">Pricing</Link>
                    <Link to="/about" className="hover:text-[#8763ff]">About</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;