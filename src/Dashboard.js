import React from 'react'
import Card from './Card'
import { Doughnut, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title);

function Dashboard() {
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div class="row">
                <Card title="EARNINGS (MONTHLY)" value="$40,000" color="primary" />
                <Card title="EARNINGS (ANNUAL)" value="$215,000" color="success" />
                <Card title="TASKS" value="50%" color="info" />
                <Card title="PENDING REQUESTS" value="18" color="warning" />
            </div>

            {/* Doughnut chart */}

            <div class="row">
                <div class="col-lg-4">
                    <Doughnut data={{

                        labels: [
                            'Red',
                            'Blue',
                            'Yellow'
                        ],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [300, 50, 100],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                        }]

                    }} />
                </div>

                {/* line chart */}

                <div class="col-lg-8">
                    <Line options={
                        {
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Chart.js Line Chart',
                                },
                            },
                        }
                    } data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    }} />;
                </div>
            </div>
        </>
    )
}

export default Dashboard