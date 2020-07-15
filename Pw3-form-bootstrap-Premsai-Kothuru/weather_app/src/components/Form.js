import React from "react";

class Form extends React.Component {
    render(){
        return (
            <div>
            <form onSubmit={this.props.handleWeather}>
            <h3>Country:
                <select  name="country">
                        <option value=""></option>
                        <option value="CANADA">Canada</option>
                        <option value="USA">USA</option>
                        <option value="INDIA">India</option>
                        <option value="UAE">Uae</option>   
                </select>
                </h3>

            <h3>City:
                <select name="city">
                        <option value=""></option>
                        <option value="Montreal">Montreal</option>
                        <option value="Vancovur">Vancouver</option>
                        <option value="Boston">Boston</option>
                        <option value="Michigan">Michigan</option> 
                        <option value="Hyderabad">Hyderabad</option> 
                        <option value="Warangal">Warangal</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Dubai">Dubai</option> 
                </select>
                </h3>
                <br></br>
                <button className="btn btn-primary btn-sm m-2">Get Weather</button>
            </form>
            </div>
      
 
        );
    }
};

export default Form;