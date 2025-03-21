import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const Dashboard = () => {
  const products = useLoaderData();

  return (
    <div className="py-10">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={products}>
          <XAxis dataKey="name" /> {/* Assuming products have a "name" key */}
          <YAxis />
          <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <button className="block mx-auto btn btn-primary " >Price Comparison</button>
    </div>
  );
};

export default Dashboard;
