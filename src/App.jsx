import { useEffect, useState } from "react";
import Router from "./components/Router";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./style/style.sass";

export default function App() {
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);

  const endpoint = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Great!
   * You see no need for Axios.
   * I'm still waiting for some student to give me a specific scenario were Axios is better than the native fetch()
   * Also, go to package.json and remove line 13, so you don't install Axios every time you clone the repository.
   * It makes your project lighter and more professional looking as you take care not only of the imports but the downlaods as well.
   */
  async function fetchData() {
    const request = await fetch(endpoint);

    if (request.ok) {
      const data = await request.json();

      onSuccess(data);
    } else {
      onFailure();
    }
  }

  function onSuccess(data) {
    setOrders(data);
    setStatus(1);
    localStorage.setItem("userData", JSON.stringify(data));
  }

  function onFailure() {
    console.log("entered failure");
    let cachedData = localStorage.getItem("userData");

    if (cachedData != null) {
      setOrders(JSON.parse(cachedData));
      setStatus(1);
    } else {
      setStatus(2);
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
