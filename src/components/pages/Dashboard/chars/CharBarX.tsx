import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { FC, memo } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import colors from '@atoms/colors';

ChartJS.register(
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    BarElement,
);

export const options = {
    responsive: true,
    scales: {  // This code is used to disable background lines
        x: {
            grid: {
                display: false
            },
            ticks: {
                color: colors.dark_80,
                font: {
                    size: 12,
                },
                stepSize: 1,
                beginAtZero: true
            }
        },
        y: {
            display: false
        }
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

const labels = ['Eng', 'QA', 'PM/PMA', 'Designer', 'R&D'];

const data = {
    labels,
    datasets: [{
        data: [54, 5, 4, 2, 2],
        barThickness: 54,
        borderRadius: 2,
        backgroundColor: colors.primary_main,
        hoverBackgroundColor: colors.primary_dark,
    }
    ],
};

const CharBarX: FC = () => {
    return (
        <div className='charX-wrapper'>
            <Bar options={options} data={data} />
        </div>
    );
};

export default memo(CharBarX);