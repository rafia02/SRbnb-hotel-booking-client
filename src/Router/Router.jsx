import { createBrowserRouter } from "react-router-dom";
import AllHotelPage from "../Components/AllHotelPage";
import ExplorePage from "../Components/ExplorePage";
import Analysis from "../Components/Home/Analysis";
import ConfirmPay from "../Components/Home/ConfirmPay";
import Home from "../Components/Home/Home/Home";
import HotelDetails from "../Components/Home/HotelDetails";
import Hotels from "../Components/Home/Hotels";
import SearchPage from "../Components/Home/SearchPage";

import Login from "../Components/Shared/Login";
import SignUp from "../Components/Shared/SignUp";
import Layout from "../Layout/Layout";


export const router = createBrowserRouter([
    {
        path: "/", element: <Layout></Layout>, children: [
            { path: "/", element: <Home></Home> },
            // {path: "/:id", loader: ({params})=>fetch(`https://room-booking-server.vercel.app/hotels/${params.id}`), element: <Hotels></Hotels>},
            { path: "/hotel/:id", loader: ({ params }) => fetch(`https://room-booking-server.vercel.app/hotel/${params.id}`), element: <HotelDetails></HotelDetails> },
            { path: "/confirmed", element: <ConfirmPay></ConfirmPay> },
            { path: "/login", element: <Login></Login> },
            { path: "/signup", element: <SignUp></SignUp> },
            { path: "/hotels", element: <AllHotelPage></AllHotelPage> },
            { path: "/search/hotel", element: <SearchPage></SearchPage> },
            {path: "/analysis", element: <Analysis></Analysis>},
            {path: "/explore", element: <ExplorePage></ExplorePage>}


        ]
    }
])