import React from "react";

class Weather extends React.Component{
    render(){
        const {city,temperature,humidity,description,error,country} =this.props;
       
        
        return(
            
            <div style={{backgroundColor:"lightblue",fontFamily:"arial",display:"inline"}}>
                {city && country && <p>Location:  {city }, { country }</p>}
                {temperature && <p>Temperature: { temperature }</p>}
                {humidity && <p>Humidity: { humidity }</p>}
                {description && <p>Conditions: { description }</p>}
                {error && <p>{error}</p>}
            </div>
            
        );
    }
};

export default Weather;