import { useState } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

type ResultsStateType={
  country:string;
  cityName:string;
  temprature:string;
  conditionText:string;
  icon:string;
}

function App() {
  const[city,setCity]=useState<string>("");
  const[results,setResults]=useState<ResultsStateType>({
    country:"",
    cityName:"",
    temprature:"",
    conditionText:"",
    icon:""
  });
  const getWeather = (e:React.FocusEvent<HTMLFormElement>) => {
      e.preventDefault();
          fetch(`https://api.weatherapi.com/v1/current.json?key=91647a3b6456462fbd172257222512 &q=${city}&aqi=no`)
          .then(res=>res.json())
          .then(data=>{
            setResults({
              country:data.location.country,
              cityName:data.location.name,
              temprature:data.current.temp_c,
              conditionText:data.current.condition.text,
              icon:data.current.condition.icon
            })
          })
  }
  return (
    <div className="wrapper">
      <div className='container'>

      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results} />
      </div>
    </div>
  );
}

export default App;
