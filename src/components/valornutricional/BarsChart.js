import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [500, 25, 50, 100]
var valornutricional = ["Calorias", "Proteinas", "Carbohidratos", "Grasas"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            max : 600
        },
        x: {
            ticks: { color: 'rgba(34, 74, 197, 0.973)'}
        }
    }
};

var midata = {
    labels: valornutricional,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: 'rgba(34, 74, 197, 0.973)'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}