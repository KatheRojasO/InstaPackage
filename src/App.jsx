import { useEffect, useState } from "react";
import axios from "axios";
import Router from "./components/Router";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./style/style.sass";

export default function App() {
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);

  async function fetchData() {
    return axios
      .get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setStatus(1);
        setOrders(response.data);
      })
      .catch(() => {
        let cachedData = localStorage.getItem("userData");
        setOrders(JSON.parse(cachedData));
        if (cachedData != null) {
          setStatus(1);
          setOrders(JSON.parse(cachedData));
        } else {
          setStatus(2);
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {status === 0 && <Loading />}
      {status === 1 && <Router orders={orders} />}
      {status === 2 && <Error />}
    </div>
  );
}
