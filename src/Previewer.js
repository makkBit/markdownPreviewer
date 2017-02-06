import React, { Component } from 'react';
import marked from 'marked';

class Previewer extends Component {

	createMarkup(){
	  return {
	    __html: marked(this.props.value)
	  }
	}

	render() {
		return (
			<div 
			    dangerouslySetInnerHTML={this.createMarkup()}
			    className="text-center"
            />
		);
	}
}


				


export default Previewer;