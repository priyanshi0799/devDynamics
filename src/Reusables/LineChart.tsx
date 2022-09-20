import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export const LineChart = ({ data }: { data: any }) => {
    return <Line data={data}></Line>;
};
