import Home from "../Components/Home/Home";
import Weather from "../Components/Weather/Weather";

export default function Routes(){
    const routes = [
        {
            Path : "/",
            element : <Home />,
            children : [
                {index : true , element : <Weather />},
            ]
        },
    ]
    return routes;
}