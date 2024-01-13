import React from "react"
import "./header.css"
// import { NavLink } from "react-router-dom";
import image from "../../assets/download (1).jpg"
// import DropdownBtn from "./dropdoown";
import { Button } from "antd";
import DropdownBtn from "./dropdownBtn";

const Header = () => {
    return (
        <div>
            <header className="header-container">
                <div className="header-logo">
                    <img src={image} className="logo-img" />
                    <h3 className="nav-link-wraper">Ngoding</h3>
                </div>
                <div className="nav-link-wraper mn-para">
                    <Button to={"/"}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Home
                    </Button>
                    <Button to={"/About"}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        About
                    </Button>
                    <Button to={"/Portofolios"}
                        className={({ isActive }) =>

                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Portfolio
                    </Button>
                    <Button to={"/Contact"}
                        className={({ isActive }) =>

                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Contact
                    </Button>
                </div>
                <div className="signin-btn">
                    <Button >
                        Sign in
                    </Button>
                    <Button
                        className=" hide-btn">
                        Register
                    </Button>

                </div>
                    <div className="dropdown-btn"><DropdownBtn />
                    </div>
            </header>
        </div>
    )
}
export default Header;