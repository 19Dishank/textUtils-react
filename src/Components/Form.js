import React, { useState } from 'react';

export default function Form(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
      props.showAlert("Converted to uppercase","success")

    };

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
      props.showAlert("Converted to lowercase","success")

    };
    const handleClear = () => {
        setText('');
        props.showAlert("text cleared","success")


    }
    const handleCamelCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, '') // remove special characters
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
                if (+match === 0 || match === ' ') return '';
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        setText(newText);
      props.showAlert("Converted to camelcase","success")

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    
    const [text, setText] = useState('');
    

    

    return (
        <>
            {/* <button className="btn btn-dark" onClick={chamgeTheme}>{btntxt}</button> */}

            <div >
                <div className=" my-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h1>{props.heading}</h1>
                    </label>
                    <textarea
                         className={`form-control ${props.mode === 'dark' ? 'dark-mode-textarea' : 'light-mode-textarea'}`}
                        value={text}
                        id="exampleFormControlTextarea1"
                        rows="10"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#1e1e1e' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        placeholder='Enter your text'
                        onChange={handleOnChange}
                    ></textarea>
                </div>

                <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>
                    UPPERCASE
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handleLowercase}>
                    lowercase
                </button>
                <button className="btn btn-success mx-2 my-2" onClick={handleCamelCase}>
                    CamelCase
                </button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>
                    Clear
                </button>

                <div className="container my-3">
                    <h3>
                        Your text summary
                    </h3>
                    <span><b>{text.trim().split(" ").filter(Boolean).length}</b> Words and <b>{text.length}</b> Characters</span>
                </div>
            </div>
        </>
    );
}
