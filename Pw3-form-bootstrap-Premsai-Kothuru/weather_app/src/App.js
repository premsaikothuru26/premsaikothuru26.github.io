import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "25a6bb0371d24d3819a0a03b08ae5430";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    handleWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        //convert response to json
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity:undefined,
                description:undefined,
                error:"Please select proper Country and City."
            });
        }
    }

    render(){
        const {temperature,city,country,humidity,error,description}=this.state;
        return(
            <div>
                <Titles />
                <Form handleWeather={this.handleWeather}/>
                <Weather
                temperature={temperature}
                city={city}
                country={country}
                humidity={humidity}
                description={description}
                error={error}
                />
            </div>
        );
    }
};

export default App;