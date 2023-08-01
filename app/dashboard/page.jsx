'use client'
import React from "react";
import TopNav from "../components/TopNav";
import ChartExample from "../components/Chart";
import BarChart from "../components/BarChart";

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="top-cards flex">
                    <div className="card">
                        <div className="card-top flex">
                            <img src="images/Setting.png" alt="" />
                            <div className="week">
                                <p>This week</p>
                            </div>
                        </div>
                        <div className="card-bottom flex">
                            <div className="seg">
                                <p>sales</p>
                                <h3>#400,000,000</h3>
                            </div>
                            <div className="seg">
                                <p>volume</p>
                                <div className="dif-seg flex">
                                    <h3>450</h3>
                                    <p className="diff">+20.00%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-top flex">
                            <img src="images/Setting.png" alt="" />
                            <div className="week">
                                <p>This week</p>
                            </div>
                        </div>
                        <div className="card-bottom flex">
                            <div className="seg">
                                <p>sales</p>
                                <h3>#400,000,000</h3>
                            </div>
                            <div className="seg">
                                <p>volume</p>
                                <div className="dif-seg flex">
                                    <h3>450</h3>
                                    <p className="diff">+20.00%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card ext">
                        <div className="card-top flex">
                            <img src="images/Setting.png" alt="" />
                            <div className="week">
                                <p>This week</p>
                            </div>
                        </div>
                        <div className="card-bottom flex">
                            <div className="seg">
                                <p>sales</p>
                                <h3>#400,000,000</h3>
                            </div>
                            <div className="seg">
                                <p>pending</p>
                                <h3>5</h3>
                            </div>
                            <div className="seg">
                                <p>volume</p>
                                <div className="dif-seg flex">
                                    <h3>450</h3>
                                    <p className="diff">+20.00%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-cards flex">
                    <div className="left-cards">
                        <div className="bt-left-cards flex">
                            <div className="btt-left-cards">
                                <div className="card-top flex">
                                    <h4>Marketting</h4>
                                    <div className="week">
                                        <p>This week</p>
                                    </div>
                                </div>
                                <div className="marketting flex">
                                    <div>
                                        <div className="ball"></div>
                                        <p>Aquisition</p>
                                    </div>
                                    <div>
                                        <div className="ball"></div>
                                        <p>Purchase</p>
                                    </div>
                                    <div>
                                        <div className="ball"></div>
                                        <p>Retention</p>
                                    </div>
                                </div>
                                <div className="chart">
                                    <ChartExample />
                                </div>
                            </div>
                            <div className="btt-right-cards">
                                <div className="card left active" style={{ flex: 1 }}>
                                    <div className="card-top flex">
                                        <img src="images/Setting.png" alt="" />
                                        <div className="week">
                                            <p>This week</p>
                                        </div>
                                    </div>
                                    <div className="card-bottom flex">
                                        <div className="seg">
                                            <p>sales</p>
                                            <h3>#400,000,000</h3>
                                        </div>
                                        <div className="seg">
                                            <p>volume</p>
                                            <div className="dif-seg flex">
                                                <h3>450</h3>
                                                <p className="diff">+20.00%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card left" style={{ flex: 1 }}>
                                    <div className="card-top flex">
                                        <img src="images/Setting.png" alt="" />
                                        <div className="week">
                                            <p>This week</p>
                                        </div>
                                    </div>
                                    <div className="card-bottom flex">
                                        <div className="seg">
                                            <p>sales</p>
                                            <h3>#400,000,000</h3>
                                        </div>
                                        <div className="seg">
                                            <p>volume</p>
                                            <div className="dif-seg flex">
                                                <h3>450</h3>
                                                <p className="diff">+20.00%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bb-left-card">
                            <div className="card-top flex">
                                <div className="summary">
                                    <p>Summary</p>
                                    <p className="sales">Sales</p>
                                </div>
                                <div className="week">
                                    <p>Last 7 Days</p>
                                </div>
                            </div>
                            <BarChart />
                        </div>

                    </div>
                    <div className="right-cards">
                        <div className="recent">
                            <h3>Recent Orders</h3>
                            <div className="orders">
                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status pending">
                                            <p>pending</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status completed">
                                            <p>completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status pending">
                                            <p>pending</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status completed">
                                            <p>completed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status completed">
                                            <p>completed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status completed">
                                            <p>completed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="order flex">
                                    <div className="details-container flex">
                                        <div className="image">
                                            <img src="images/Setting.png" alt="" />
                                        </div>
                                        <div className="details">
                                            <p className="name">iPhone 13</p>
                                            <p className="price">#730,000.00 X 1</p>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <p className="date">12 Sept, 2022</p>
                                        <div className="status pending">
                                            <p>pending</p>
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

export default Dashboard