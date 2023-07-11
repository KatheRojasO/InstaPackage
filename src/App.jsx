import { useEffect, useState } from "react";
import axios from "axios";
import Router from "./components/Router";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./style/style.sass";

export default function App() {
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    return axios
      .get("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840")
      .then((response) => onSucessresponse(response))
      .catch((error) => onFailure(error));
  }

  function onSucessresponse(response) {
    localStorage.setItem("userData", JSON.stringify(response.data));
    setStatus(1);
    setOrders(response.data);
  }

  function onFailure(error) {
    const cachedData = localStorage.getItem("userData");

    console.error(error);
    setOrders(JSON.parse(cachedData));
    setStatus(2);

    if (cachedData != null) {
      setStatus(1);
      setOrders(JSON.parse(cachedData));
    }
  }

  return (
    <div className="App">
      {status === 0 && <Loading />}
      {status === 1 && <Router orders={orders} />}
      {status === 2 && <Error />}
    </div>
  );
}
