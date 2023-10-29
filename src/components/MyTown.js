import { useEffect, useState } from "react";
import React from 'react';
import logo from '../Hong_Kong_Harbour_Night_2019-06-11.jpg';
import Weather from "./Weather";

const MyTown = () => {
    const fetchData = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=HongKong&units=Metric&APPID=b767b492a05d944591065dddf5c046f0");
        const weather = await response.json();
        console.log(weather);
        SetData(weather);
    }

    const [data, SetData] = useState([]);

    console.log('data', data)
    console.log('data', data.length)
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='App'>
            <br /><img src={logo} alt='Hong Kong' width="800" />
            <h1>I'm from Hong Kong</h1>
            Hong Kong is at the south-eastern tip of China, Hong Kong covers Hong Kong Island, Lantau Island, the Kowloon Peninsula and the New Territories, including 261 outlying islands. Between Hong Kong Island and the Kowloon Peninsula lies Victoria Harbour, one of the world's most renowned deep-water harbours.
            <br /><br />
            {(data.cod === 200) ?
                <Weather
                    temp={data.main.temp}
                /> : ""}
        </div>
    )
}

export default MyTown;