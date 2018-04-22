import React, { Component } from "react";

// We don't need parenthesis for one argument function
const Form = props => (
    
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
);

export default Form;
