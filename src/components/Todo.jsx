import React from 'react'

const Todo = ({canti, index, deleteTodo,produ}) => {
    return (
        <>
            <div className="list">                
               <h3>{canti}</h3>-
               <h3>{produ}</h3><button className="btn-delete" onClick={()=>deleteTodo(index)}>x</button>                
            </div>
        </>
    )
}
export default Todo