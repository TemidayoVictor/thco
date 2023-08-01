import React from "react";
import TopNav from "../components/TopNav";
const Conversations = () => {
    return (
        <div>
            <div className="container">
                <div className="heading flex">
                    <h3>Conversations with customers</h3>
                    <a href="#" className="btn">New Message</a>
                </div>

                <div className="conversations-container flex">
                    <div className="contacts">
                        <div className="contacts-heading flex">
                            <h3>Contacts</h3>
                            <p>34</p>
                        </div>
                        <div className="search">
                            <img src="images/setting.png" alt="" />
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div className="conversation-list">
                            <div className="con-box active flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat">
                                    <div className="new">
                                        <p>New</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat">
                                    <div className="new">
                                        <p>New</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat">
                                    <div className="new">
                                        <p>New</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat flex">
                                    <div className="value-2">
                                        <p>2</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex ">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat flex">
                                    <div className="hidden">
                                        <p>2</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat flex">
                                    <div className="hidden">
                                        <p>2</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat flex">
                                    <div className="hidden">
                                        <p>2</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            <div className="con-box flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="con-detail">
                                    <h4>Jane Doe</h4>
                                    <p>Hi, I want to make enquiries about yo...</p>
                                </div>
                                <div className="con-stat flex">
                                    <div className="hidden">
                                        <p>2</p>
                                    </div>
                                    <p>12:55am</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="conversations-body">
                        <div className="con-user flex">
                            <div className="con-user-details flex">
                                <div className="image">
                                    <img src="images/Setting.png" alt="" />
                                </div>
                                <div className="user-info">
                                    <h4>Jane Doe</h4>
                                    <div className="user-stat flex">
                                        <div className="ball"></div>
                                        <p className="blue">Online</p>
                                        <p className="time">12:55am</p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-details flex">
                                <div className="customer">
                                    <p>New Customer</p>
                                </div>
                                <div className="profile-body">
                                    <p>View Profile</p>
                                     <div className="image flex">
                                        <img src="images/Setting.png" alt="" />
                                        <p>0 Orders</p>
                                     </div>
                                </div>
                            </div>
                        </div>

                        <div className="chat">
                            <div className="date">
                                <p>12 August, 2022</p>
                            </div>
                            <div className="chat-body">
                                
                                <div className="left-chat">
                                    <div className="lct flex">
                                        <div className="lct-left flex">
                                            <div className="image">
                                                <img src="images/Setting.png" alt="" />
                                            </div>
                                            <div className="lct-middle">
                                                <p>iPhone 13</p>
                                                <p><strong>#730,000.00</strong></p>
                                            </div>
                                        </div>
                                        <div className="stock">
                                            <p><span>12</span> in stock</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="message client">Hello, I want to inquire about your product</p>
                                        <p>12:55 am</p>
                                    </div>
                                </div>

                                <div className="right-chat flex">
                                    
                                    <div className="right-message">
                                        <p className="message owner">Hello Janet, thank you for reaching out</p>
                                        <div className="current flex">
                                            <p>12:55 am</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="right-chat flex">
                                    <div className="right-message">
                                        <p className="message owner">What do you need to know?</p>
                                        <div className="current flex">
                                            <p>12:55 am</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="date">
                                    <p>Today</p>
                                </div>

                                <div className="left-chat">
                                    <div>
                                        <p className="message client">I want to know if the price is negotiable. I need about 2 units</p>
                                        <p>12:55 am</p>
                                    </div>
                                </div>
                                <div className="send-message flex">
                                    <div className="add-message flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <input type="text" placeholder="Your message"/>
                                    </div>
                                    <div className="deliver-message flex">
                                        <div className="smiley">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="send">
                                            <p>Send</p>
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Conversations