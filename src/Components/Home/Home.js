import "./Home.css"
import { Input, Space } from 'antd';
import { useState } from "react";
import Weather from "../Weather/Weather";
const { Search } = Input;


export default function Home() {
    const [state, setState] = useState();
    const [searchValue, setSearchValue] = useState('');
    const onSearch = async (value, _e, info) => {
        try {
            const weather_Res = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f3390b247284d059cb82749232209&q=${value}&aqi=yes`)
            const weather_Data = await weather_Res.json();
            setState(weather_Data);
            setSearchValue('');
        } catch (err) {
            console.log("not found")
        }
    };
    return (
        <>
            <div className="container">
                <div className="flex">
                    <div className="flex-child">
                        <h2>Weather App</h2>
                        <img src="./weather1.png" alt="weather" id="image" />
                    </div>
                    <div>
                        <Space direction="vertical">
                            <Search
                                src="./weather1.png"
                                placeholder="input search text"
                                onSearch={onSearch}
                                onChange={(e) => setSearchValue(e.target.value)}
                                enterButton
                                value={searchValue}
                                className="search-bar"
                            />
                        </Space>
                    </div>
                </div>

                <Weather data={state} />

            </div>
        </>
    )
}