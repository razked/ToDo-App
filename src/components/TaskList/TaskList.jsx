import React from 'react';
import './taskList.scss';
import TrashBtn from './../../UI/TrashBtn/TrashBtn';

const TaskList = (props) => {

    // pass item deleted ID to parent
    const handleRemove = idx => {
        props.removeItem(idx)
    }

    // render the list
    let list = null;
    if (props.tasks.length > 0) {
        list = props.tasks.map((task, idx) => {
            return (
                <div className="single" key={idx}>
                    <TrashBtn onClickBtn={() => handleRemove(idx)} />
                    <span>{task}</span>
                </div>
            )
        })
    }


    return (
        <div className="tasks">
            {list}
        </div>
    )
}

export default TaskList;