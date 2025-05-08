import React from "react";
import './Preloader.css';

function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;
