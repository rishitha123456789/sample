import React,{Component} from "react";
import STYLE  from "./nav.module.css"
class Nav extends Component{
    render(){
        return(
            <div>
<div className="nav1">
    <header>
        <img className="logo" height={50} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAxBo3kJgfBiAx5t52ZWAMoCV0BoOqydVnQ&usqp=CAU" alt="" />
        <nav className="nav_links">
            <ul >
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">about</a>
                </li>
                <li>
                    <a href="">projects</a>
                </li>

            </ul>
        </nav>
        <a href="" className="cta"><button className="btn">contact</button></a>
    </header>
   
</div>

<div className="nav2">
    <header>
        <img className="logo1" height={50} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAxBo3kJgfBiAx5t52ZWAMoCV0BoOqydVnQ&usqp=CAU" alt="" />
        <nav>
            <ul  className="nav_links">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">about</a>
                </li>
                <li>
                    <a href="">projects</a>
                </li>

            </ul>
        </nav>
        <a href="" className="cta"><button className="btn">contact</button></a>
    </header>
   
</div>
</div>
        )
    }

}

export default Nav