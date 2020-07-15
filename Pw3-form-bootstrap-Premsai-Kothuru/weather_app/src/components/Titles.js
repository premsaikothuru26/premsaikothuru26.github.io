import React from "react";

class Titles extends React.Component{
    
    render(){
       const mystyle={
           color:"white",
           backgroundColor:"DodgerBlue",
           padding:"5px",
           fontfamily:"Arial"

       };
        return(
            <div>
                <h1 style={mystyle}>Weather Web Application Created Using React</h1>
                <p>Displays the current weather conditions like temperature,humidity,location
                    and condition </p>
            </div>
        );
    }
};

export default Titles;