import React from "react";
import logo from './Logo.svg'
function footer () {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <p>Address:523 Little Lemon Street, Zallaq, Bahrain</p>
                <p>Phone number: 1234 54785 54</p>
                <p>Email: info@littlelemon.com</p>
            </div>
            <div>
                <h4>Social media links</h4>
                <ul>
                    <li><a href="https://www.facebook.com/littlelemon">facebook</a></li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}
export default footer;