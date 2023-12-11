import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log('Upper case clicked....' + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText(text.toUpperCase());
    props.showAlert("Converted into upper case!..", "success");
  };

  const handleLowClick = () => {
    // console.log('Upper case clicked....' + text);
    let newText = text.toLowerCase();
    setText(newText);
    // setText(text.toLowerCase());
    props.showAlert("Converted into lower case!..", "success");
  };

  const handleClear = () => {
    // console.log("clear");
    let newText = "";
    setText(newText);
    props.showAlert("Data has been cleared", "success");
  };

  // const handlePreview=()=>{
  //   document.querySelectorAll(".preview").style.display="block";
  //   setText(text);
  //   console.log("preview");
  // }
  const handleOnChange = (event) => {
    console.log("clicked on onChange");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="You can share the feedback here..."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "#282c34" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="clear btn btn-primary mx-5" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="container my-0">
        <h1>Enter text summary</h1>
        <p>
          {text.split(" ").length} Words & {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h3 color="#fff">Preview :</h3>
        <span>
          <h5>{text}</h5>
        </span>
        {/* <button className="btn btn-primary"  onClick={handlePre   view}>Preview</button> */}
        {/* <h5 className="preview" >{text}</h5> */}
      </div>
    </>
  );
}
