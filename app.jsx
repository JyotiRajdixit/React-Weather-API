import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      character: {},
      value:'Indore'
    }
  }
  componentDidMount() {
    const url ="http://api.openweathermap.org/data/2.5/forecast?q="+this.state.value+"&units=metric&APPID=c0996d55bf272a6558d347f6c69e60d1";
    /*const response = await fetch(url);
    const data = await response.json();
    this.setState({
      character: data.list[0],
      isLoading: false,
    })*/
    fetch(url).then(response => response.json()).then(data => {
      this.setState({
        isLoading: false,
        character: data.list[0]
      })
    })
  }
  render() {
    console.log(this.state.character)
    if (!this.state.isLoading)
    {
      var icon = "http://openweathermap.org/img/w/" + this.state.character.weather[0].icon + ".png";
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
    if (this.state.isLoading) { return <h1>Loading...!</h1> }
    return (
      <div>
       {!this.state.character ? <h1>No such city..!</h1> :
        <center>
         <div style={mystyle}>
          <h1>
           {this.state.value}
          </h1>
          <h2>
           {this.state.character.main.temp} °C
          </h2>
          <img src={icon} width="100px"/>
          <h3>
           {this.state.character.weather[0].description}
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
