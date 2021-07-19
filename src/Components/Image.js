import React from "react";
import './Component_CSS/Image.css'
export default class Image extends React.Component {
  render() {
    return (
      <div className = "ImageContainer">
        <img src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"></img>
      </div>
    );
  }
}
