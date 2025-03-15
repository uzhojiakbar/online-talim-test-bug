import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js uchun kerakli plaginlarni ro'yxatdan o'tkazamiz
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyUserStatsChart = ({ monthlyStats }) => {
  // Oylik foydalanuvchilar soni va oylar
  const labels = monthlyStats?.map((stat) => stat.month);
  const data = monthlyStats?.map((stat) => stat.userCount);

  // Diagramma uchun chart.js ma'lumotlari
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Foydalanuvchilar soni",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Barning rangi
        borderColor: "rgba(75, 192, 192, 1)", // Barning chegarasi
        borderWidth: 1, // Bar chegarasining qalinligi
      },
    ],
  };

  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">
        Har oy uchun foydalanuvchilar soni
      </h3>
      <Bar width={400} height={200} data={chartData} />
    </div>
  );
};

export default MonthlyUserStatsChart;
