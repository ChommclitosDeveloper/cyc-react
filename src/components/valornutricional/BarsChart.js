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

var beneficios = [280, 4, 45, 9, 2]
var valornutricional = ["Calorias", "Proteinas", "Carbohidratos", "Grasas", "Fibra"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += context.parsed.y + ' g';
                    return label;
                }
            }
        }
    },
    scales : {
        y : {
            max : 300,
            ticks: {
                callback: function(value) {
                    return value + ' g';
                }
            }
        },
        x: {
            ticks: { color: '#black'}
        }
    }
};

var midata = {
    labels: valornutricional,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: '#77DD77'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}