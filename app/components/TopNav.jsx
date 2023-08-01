'use client'
const TopNav = ({updateMenu, menuAction, page, nav}) => {
    const handleMenuClick = () => {
        if(menuAction == 'false') {
            updateMenu('true');
        }
        else {
            updateMenu('false');
        }

    }
    
    return (
        <div className="topnav">
            <div className="topnav-content">
                <h2>Dashboard</h2>
                <div className="topnav-utils desktop">
                    <select name="" id="">
                        <option value="">Nanny's Shop</option>
                        <option value="">Second Option</option>
                        <option value="">Third Option</option>
                    </select>
                    <img src="images/Setting.png" alt="" />
                    <img src="images/Setting.png" alt="" className="profile" />
                </div>
                
                <div className="mobile">
                    <i className="bx bx-menu" onClick={handleMenuClick}></i>
                </div>
                        
            </div>
            <div className="navigation flex">
                <div className="navs">
                    <img src="images/Setting.png" alt="" />
                    <p>{nav}</p>
                </div>
                <div className="topnav-utils mobile">
                    <select name="" id="">
                        <option value="">Nanny's Shop</option>
                        <option value="">Second Option</option>
                        <option value="">Third Option</option>
                    </select>
                    <img src="images/Setting.png" alt="" />
                    <img src="images/Setting.png" alt="" className="profile" />
                </div>
            </div>
        </div>
    )
}

export default TopNav