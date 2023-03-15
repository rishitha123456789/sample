import React from "react";
const Users=(props)=>{
    let data=props.data;
    return(
        <div>
            <table border={"20px"}style={{textAlign:"center",fontWeight:"bolder"}}>
                <tr>
                    <th>img</th>
                    <th>Movie_name</th>
                    <th>director</th>
                    <th>hero</th>
                    <th>heroin</th>
                    <th>release</th>
                </tr>
                <tr>{data.map((x)=>{
                    return <tr>
                        <td><img src={x.img} alt="" /></td>
                        <td>{x.movie_name}</td>
                        <td>{x.hero_name}</td>
                        <td>{x.heroin}</td>
                        <td>{x.director}</td>
                        <td>{x.release }</td>
                    </tr>
                    
                })}</tr>
                

            </table>

        
        </div>
    )
}
export default Users