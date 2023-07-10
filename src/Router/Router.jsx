import { createBrowserRouter } from "react-router-dom";
import ConfirmPay from "../Components/Home/ConfirmPay";
import Home from "../Components/Home/Home/Home";
import HotelDetails from "../Components/Home/HotelDetails";
import Hotels from "../Components/Home/Hotels";
import PaymentForm from "../Components/PaymentForm";
import Login from "../Components/Shared/Login";
import SignUp from "../Components/Shared/SignUp";
import Layout from "../Layout/Layout";


export const router = createBrowserRouter([
    {path: "/", element: <Layout></Layout>, children: [
        {path: "/", element: <Home></Home>},
        // {path: "/:id", loader: ({params})=>fetch(`http://localhost:5000/hotels/${params.id}`), element: <Hotels></Hotels>},
        {path: "/hotel/:id", loader: ({params})=>fetch(`http://localhost:5000/hotel/${params.id}`), element: <HotelDetails></HotelDetails>},
        {path: "/confirmed", element: <ConfirmPay></ConfirmPay>},
        {path: "/login", element: <Login></Login>},
        {path: "/signup", element: <SignUp></SignUp>},
        {path: "/payment/:id", loader: ({params})=>fetch(`http://localhost:5000/payment-product/${params.id}`), element: <PaymentForm></PaymentForm>},
 
        ]}
])