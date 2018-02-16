import React, { Component } from 'react';
import '../style/content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content" id="content">
		<div className="buttons">
			<button id="getContent">Get content</button>
			<button id="filterBut">Filter videos</button>
			<button id="sortBut">Sort videos</button>
		</div>
		<div id="content" className="videoContainer">
			
		</div>
      </div>
    );
  }
}

export default Content;
