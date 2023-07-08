
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaENwixcgJcItwX-JgGerKNRP0DzsuaKE",
  authDomain: "srbnb-hotel-booking.firebaseapp.com" ,
  projectId: "srbnb-hotel-booking" ,
  storageBucket: "srbnb-hotel-booking.appspot.com" ,
  messagingSenderId: "527530646792" ,
  appId: "1:527530646792:web:1e9ae7e85e3085af2ce0bd" ,
};


const app = initializeApp(firebaseConfig);
export default app