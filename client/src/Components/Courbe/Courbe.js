import React, { useEffect } from "react";
import "./Courbe.css";
import { useDispatch, useSelector } from "react-redux";
import { getDate, getPrice } from "../../Redux/actions/Courbe";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Courbe = () => {
  const prix = useSelector((state) => state.CourbeReducer.prix);
  const date = useSelector((state) => state.CourbeReducer.date);
  const isLoad = useSelector((state) => state.CourbeReducer.isLoad);
  const isError = useSelector((state) => state.CourbeReducer.isError);
  const load = useSelector((state) => state.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrice());
    dispatch(getDate());
  }, []);

  let dates = [];
  for (let ele of date) {
    dates.push(ele.date);
  }

  let prices = [];
  for (let ele of prix) {
    prices.push(ele.prix);
  }
  let data = [];
  for (let ele in prices) {
    data.push({ date: dates[ele], prix: prices[ele] });
  }
  let data2 = [data[0]];
  let j = 0;
  for (let i = 1; i <= data.length - 1; i++) {
    if (data2[j].date == data[i].date) {
      data2[j].prix = data2[j].prix + data[i].prix;
    } else {
      j++;
      data2[j] = data[i];
    }
  }
  console.log("newdata", data2);

  // console.log("dates", data);

  return (
    <div className="CourbeContainer">
      <div></div>
      <h1 className="text-heading">tableaux de bord des ventes</h1>
      <div></div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data2} margin={{ right: 100 }}>
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="prix" stroke="black" activeDot={{ r: 2 }} />
          {/* <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Courbe;
/* App.js */
