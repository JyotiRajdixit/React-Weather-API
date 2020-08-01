import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      details: null,
    }
  }
  componentDidMount() {
    /*const url ="http://api.openweathermap.org/data/2.5/forecast?q=Indore&units=metric&APPID=c0996d55bf272a6558d347f6c69e60d1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      details: data.list[0],
      isLoading: false,
    })*/
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Indore&units=metric&APPID=c0996d55bf272a6558d347f6c69e60d1").then(response => response.json()).then(data => {
        this.setState({
         isLoading: false,
         details: data.list[0]
        })
      })
  }
  render() {
    console.log(this.state.details)
    if(!this.state.isLoading)
     {
      var icon = "http://openweathermap.org/img/w/" + this.state.details.weather[0].icon + ".png";
     }
    const mystyle = {
      textAlign: "center",
      marginTop: "50%",
      width: "70%",
      borderRadius: '35px',
     // boxShadow: "1px 2px 5px 1px grey",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      padding: "5px",
    }
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...!</h1> :
        <center>
         <div style={mystyle}>
          <h1>
           Indore
          </h1>
          <h2>
           {this.state.details.main.temp} °C
          </h2>
          <img src={icon} width="100px"/>
          <h3>
           {this.state.details.weather[0].description}
          </h3>
         </div>
        </center>}
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
