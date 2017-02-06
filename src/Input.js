import React, { Component } from 'react';
import './Input.css';
import Previewer from './Previewer.js';
import Header from './Header.js';



class Input extends Component {

  constructor(props){
    super(props);
    this.state = { 
      value: '**Preview** \r\n=======\r\n\r\n_markdown written in input area is shown here_  \r\n\r\n`console.log(\'made using reactJS\');`  \r\n\r\n![alt text](https:\/\/uploads.toptal.io\/blog\/category\/logo\/291\/react.png)\r\n\r\nText attributes *italic*, **bold**, \r\n`monospace`, ~~strikethrough~~ .\r\n\r\nrefer this **[cheatsheet]()** for more github markdown reference\r\n\r\nmade by [mahak](https:\/\/twitter.com\/makk_bit)'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  render() {

    return (
      <div className="container">

        <Header />

        <div className="row">

          <div className="col-md-6 col-xs-12">
            <textarea className="form-control"  
            value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div className="col-md-6 col-xs-12">
            <Previewer value={this.state.value} />
          </div>

        </div>

      </div>
    );
  }
}

export default Input;





