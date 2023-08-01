'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const ChartExample = () => {
    const pieChartData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
            },
        ],
    };

    return (
        <div>
            <Doughnut data={pieChartData}></Doughnut>
        </div>
    )
    
}

export default ChartExample
