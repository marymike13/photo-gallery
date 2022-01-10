import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
        &copy; {new Date().getFullYear()} {props.website}

        </div>);
}
export default Footer;