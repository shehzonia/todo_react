import React from "react";
export const Tasks = (props) => {
return (
    <>
    <p>{props.taskName}</p>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
   </>
);
};