import { createBrowserRouter } from "react-router-dom";
import ConfirmPay from "../Components/Home/ConfirmPay";
import Home from "../Components/Home/Home/Home";
import HotelDetails from "../Components/Home/HotelDetails";
import Hotels from "../Components/Home/Hotels";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {path: "/", element: <Layout></Layout>, children: [
        {path: "/", element: <Home></Home>},
        // {path: "/:id", loader: ({params})=>fetch(`http://localhost:5000/hotels/${params.id}`), element: <Hotels></Hotels>},
        {path: "/hotel/:id", loader: ({params})=>fetch(`http://localhost:5000/hotel/${params.id}`), element: <HotelDetails></HotelDetails>},
        {path: "/hotel/confirmed", element: <ConfirmPay></ConfirmPay>}
        ]}
])