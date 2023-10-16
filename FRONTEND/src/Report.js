import React from "react";
// import "./piechart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "EXCELLENT", users: 200 },
    { name: "GOOD", users: 150},
    { name: "AVERAGE", users: 100 },
    { name: "LOWEST", users: 50 },
  ];
  const data1 = [
    { name: "EXCELLENT", users: 100 },
    { name: "GOOD", users: 200},
    { name: "AVERAGE", users: 150 },
    { name: "LOWEST", users: 50 },
  ];
  const data2 = [
    { name: "EXCELLENT", users: 200 },
    { name: "GOOD", users: 90 },
    { name: "AVERAGE", users: 50  },
    { name: "LOWEST", users: 100 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Reports</h1>
      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data1}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#d88884"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#d88884" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data2}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#84d888"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#84d888" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;