import React, { StrictMode, Suspense } from "react";
import Navbar from "./ClassBased/Navbar";
import Footer from "./ClassBased/Footer";
import Carousel from "./ClassBased/Carousel";
import Card from "./ClassBased/Card";
import Card2 from "./ClassBased/Card2";

const App=()=>{
    return(
        <div>
            <Navbar/>
            <br /><br /><br />
            <Carousel/>
            <br /><br /><br />
            <Card/>
            <br /><br />
            <Card2/>
            <Footer/>
           
        </div>
    );
}
export default App