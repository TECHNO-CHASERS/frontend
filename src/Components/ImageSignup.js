import React from "react";
import { Image } from "./Image";
export const ImageSignup = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onchange="loadFile(event)"
        style={{ display: "none" }}
      ></input>
      <p>
        <label for="file" style={{ cursor: "pointer" }}>
          Upload Image
        </label>
      </p>
      <p>
        <img id="output" width="200" />
      </p>
      <button onClick={loadFile}>SEE</button>
      <div className="ImageContainer">
        <Image />
      </div>
    </div>
  );
};
