import React from "react";

const SideNav = ({menuAction}) => {
    // console.log(sharedState);
    return (
        <div className={(menuAction == 'true') ? 'sidenav-active' : 'sidenav' }>
            
            <div className="logo_content">
                <div className="logo">
                    <img src="images/Iconly/Bulk/Graph.png" alt="" />
                    <h3 className="logo_name">Metrix</h3>
                </div>
            </div>

            <div className="sidenav_body">

                <ul className="nav_list">
                    <li className="active">
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Orders</span>
                            <span className="value">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Inventory</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Conversations</span>
                            <span className="value">16</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Settings</span>
                        </a>
                    </li>
                </ul>

                <div className="bottom-nav">
                    <div className="utilities">
                        <a href="#" className="bottom_link grey">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Contact Support</span>
                        </a>

                        <div className="box pink">
                            <a href="#" className="bottom_link">
                                <img src="images/Setting.png" alt="" />
                                <span className="links_name">Free gift awaits you</span>
                            </a>
                            <div className="upgrade">
                                <small>upgrade your account</small>
                            </div>
                        </div>
                    </div>
                    <div className="logout">
                        <a href="#">
                            <img src="images/Setting.png" alt="" />
                            <span className="links_name">Logout</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideNav

