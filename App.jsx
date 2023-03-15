import React,{Component} from "react";
// import NetflixNav from "./NetflixNav";
// import JSON from "./data.json"
import "./globel.css"
// import Navbar from "./ClassBased/Navbar";
// import Footer from "./ClassBased/Footer";
// import Carousel from "./ClassBased/Carousel";
// import Card from "./ClassBased/Card";
// import Card2 from "./ClassBased/Card2";
// import Nav from "./Nav";
// import List from './List';
// import Course from "./Course";
// import Users from "./Users.jsx"
import CounterApp from "./CounterApp"

class App extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         json:JSON
    //     }
    // }
    render(){
       
        
        return(
            <div>
                {/* <Navbar/>
                <br /><br /><br />
                <Carousel/>
                <br /><br /><br />
                <Card/>
                <br /><br />
                <Card2/>
                <Footer/> */}
               {/* <Nav/> */}
               {/* <NetflixNav/> */}
               {/* <List payload={JSON}/> */}
    
                {/* <Course courseDetails={
                    {
                    courseName:"jfs",
                    courseAvail:true,
                    courseDuration:"2months",
                } }/> */}
                
                
                {/* <Users data={this.state.json} /> */}
                <CounterApp/>
            </div>
        );

    }
    
}
export default App