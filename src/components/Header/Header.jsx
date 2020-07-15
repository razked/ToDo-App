import React, { useState } from 'react';
import './header.scss';

const Header = (props) => {

    const [input, setInput] = useState({
        placeholder: 'Add New Todo',
        value: '',
        type: 'text'
    })

    // update state with input value
    const handleUpdateVal = (event) => {
        const newInput = { ...input };
        newInput.value = event.target.value;
        setInput(newInput);
    }

    // pass new task to parent and clear input
    const handleAddNew = () => {
        let val = input.value;
        if (val.length > 1) {
            props.addTasks(val);

            let newInput = { ...input }
            newInput.value = '';
            setInput(newInput)
        } else {
            return
        }
    }

    // enable enter key to add new items
    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            handleAddNew();
        }
    };

    return (
        <div className="header">
            <div className="title">
                <span>TO-DO LIST</span>
                <button
                    onClick={handleAddNew}
                >
                    +
                </button>
            </div>

            <input
                {...input}
                onChange={handleUpdateVal}
                onKeyDown={onKeyDownHandler}
            />
        </div>
    )
}

export default Header;