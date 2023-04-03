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

export const SegmentChart = () => {
  // Eje X
  const labels = [100, 200, 300, 400, 500, 600, 700]; // El eje de las x se tiene que llamar labels siempre

  //Eje Y
  const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];

  const options = {
    fill: true, // Esta propiedad se hace con el componente Filler
    responsive: true,
    scales: {
      y: {
        min: 0.5,
        max: 7,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
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
          backgroundColor: "rgba(195, 222, 222,.3)", //Es el color del área por debajo de la línea
          segment: {
            borderColor: (context) => {
              if(context.type === "segment") {
                // Conseguimos que nuestro gráfico vaya alternando el color de la línea de negro a rojo entre punto y punto
                return context.p1DataIndex % 2 === 0 ? "black" : "red";
              }
              console.log(context);
              // return "rgb(255, 192, 192)";
            },
            backgroundColor: (context) => {
              if(context.type === "segment") {
                // Conseguimos que nuestro gráfico vaya alternando el fondo por debajo de la línea de rojo a azul entre punto y punto
                return context.p1DataIndex % 2 === 0 ? "red" : "blue";
              }
              console.log(context);
              // return "rgb(255, 192, 192)";
            },
          },
        },
      ],
      labels,
    };
  }, []);

  // console.log(data, options);

  return <Line data={data} options={options} />;
};
