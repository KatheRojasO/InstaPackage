import { useEffect, useState } from "react";
import Router from "./components/Router";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "./style/style.sass";

export default function App() {
   const [status, setStatus] = useState(0);
   const [orders, setOrders] = useState([]);

   async function fetchData () {
    try {
      const response = await fetch("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840");
      const ordersData = await response.json();
      setStatus(1)
      setOrders(ordersData)
    }
    catch (error) {
      setStatus(2)
    }
   }

   useEffect(() => {
    fetchData();
   }, []);

  return (
    <div className="App">
      {status === 0 && <Loading/>}
      {status === 1 && <Router orders={orders}/>}
      {status === 2 && <Error/>}   
    </div>
  );
}

