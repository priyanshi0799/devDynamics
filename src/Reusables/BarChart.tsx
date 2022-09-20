import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export const BarChart = ({ data }: { data: any }) => {
    return <Bar data={data}></Bar>;
};
