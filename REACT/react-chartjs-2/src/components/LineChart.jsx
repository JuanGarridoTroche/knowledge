import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  // Eje X
  const labels = [100, 200, 300, 400, 500, 600, 700]; // El eje de las x se tiene que llamar labels siempre

  //Eje Y
  const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
  const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];

  const options = {
    fill: true, // Esta propiedad se hace con el componente Filler
    responsive: true,
    scales: { 
      y: { 
        min: .5, 
        max: 7,
      } 
    },
    plugins: { 
      legend: { 
        display: true 
    } },
  };

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "F. Alonso",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)", 
          pointRadius: 15,
          // pointBackgroundColor: "red",
          backgroundColor: "rgba(195, 222, 222,.3)",   //Es el color del área por debajo de la línea 
        },
        {
          label: "L. Stroll",
          data: scores2,
          tension: 0.3,
          borderColor: "rgb(225, 102, 102)", 
          pointRadius: 15,
          // pointBackgroundColor: "red",
          backgroundColor: "rgba(0, 255, 222,.3)",   //Es el color del área por debajo de la línea 
        },
      ],
      labels,
    };
  }, []);

  // console.log(data, options);

  return <Line data={data} options={options} />;
};
