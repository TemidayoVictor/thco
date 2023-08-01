'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart, ArcElement, BarElement} from 'chart.js'
import {CategoryScale} from 'chart.js';
import {LinearScale} from 'chart.js'; 
Chart.register(ArcElement);
Chart.register(BarElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
const BarChart = () => {
    
    const barChart = {
        labels: ['Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15'],
        datasets: [
            {
                label: "set 1",
                data: [300, 50, 100, 150, 240],
                backgroundColor: ['#5570f1'],
                borderColor: ['#5570f1'],
                borderWidth: .5,
                hoverBackgroundColor: ['#ff6384'],
            },
        ],
    };

    return (
        <div>
            <Bar data={barChart}></Bar>
        </div>
    )
    
}

export default BarChart
