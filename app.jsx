import React from 'react';
import ReactDOM from 'react-dom';
import Conditional from './Conditional.jsx'
class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading : true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }
  render() {
    return  (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
      </div>
    )
  }
}


ReactDOM.render(<Main />,
  document.getElementById('react-app')
);
