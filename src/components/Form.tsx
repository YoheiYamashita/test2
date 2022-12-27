// import { useState } from 'react';

type FormPropsType={
    setCity:React.Dispatch<React.SetStateAction<string>>;

    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = (props:FormPropsType)=>{
    // const[city,setCity]=useState<string>();
    // const getWeather = (e:any) => {
    //     e.preventDefault();
    //         fetch("https://api.weatherapi.com/v1/current.json?key=91647a3b6456462fbd172257222512 &q=London&aqi=no")
    //         .then(res=>res.json())
    //         .then(data=>console.log(data))
    // }
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市名" 
            onChange={e=>props.setCity(e.target.value)}/>
            <button type="submit">
            Get Weather</button>

        </form>
    );
};


export default Form;