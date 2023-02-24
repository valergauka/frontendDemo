import React, { useState } from "react";

import './Input.css'

const Input = (props) => {

    const [suggestions, setSuggestions] = useState([])
    const [text, setText] = useState('');

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = props.arrayData.filter(elem => {
                const regex = new RegExp(`${text}`, 'gi')
                return (elem.name.match(regex))
            })
        }

        setSuggestions(matches)
        setText(text)
    }
    return (
        <div>
            <input className='inputText'
                type="text"
                name={props.nameInput}
                placeholder={props.placeholderInput}
                onChange={e => onChangeHandler(e.target.value)}
                value={text} 
                onInput={props.onInput}/>
            <div className="cart">
                {suggestions && suggestions.map((suggestions) =>
                    <div key={suggestions.id}
                        className='suggestion'
                        onClick={() => onSuggestHandler(suggestions.name)}
                    >
                        {suggestions.name}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Input;