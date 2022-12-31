import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FC, memo } from 'react';
import { Bar } from 'react-chartjs-2';

import colors from '@atoms/colors';

ChartJS.register(
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    BarElement,
);

export const options = {
    responsive: true,
    indexAxis: 'y' as const,
    scales: { // This code is used to disable background lines
        x: {
            display: false
        },
        y: {
            grid: {
                display: false
            },
            ticks: { // This code is used to configure background lines
                color: colors.dark_80,
                font: {
                    size: 12,
                },
                crossAlign: 'far' as const,
                stepSize: 1,
                beginAtZero: true
            }
        },
    },
    plugins: {
        tooltip: { // This code is used to disable tooltip
            enabled: false
        },
        datalabels: { // This code is used to display data values
            anchor: 'end' as const,
            align: 'end' as const,
            formatter: Math.round,
            font: {
                weight: 510,
                size: 12,
            },
            color: colors.dark_100,
        }
    },
};

const labels = ['Full Stack', 'Front End', 'Back JS', 'Back PHP', 'React Native', 'IOS Native'];

export const data = {
    labels,
    datasets: [{
        data: [10, 11, 15, 9, 8, 1],
        barThickness: 22,
        borderRadius: 2,
        backgroundColor: colors.secondary_main,
        hoverBackgroundColor: colors.secondary_dark,
    }
    ],
};

const CharBarY: FC = () => {
    return (
        <div className='charY-wrapper'>
            <Bar options={options} data={data} />
        </div>
    );
};

export default memo(CharBarY);