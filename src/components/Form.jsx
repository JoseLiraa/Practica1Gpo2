import React, {useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [toda, setToda] = useState(0)
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    
    const handleChangee = e => setToda({[e.target.name]:e.target.value})
    const handleChange = e => setTodo({[e.target.name]:e.target.value})
     const handleClick = e => {
        if(Object.keys(todo).length ===0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }
        setTodos([...todos,todo])
    }
     
     const handleClickk = e => {
        if(Object.keys(toda).length ===0 || toda.toda.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }
       
        setTodos([...todos,toda,todo])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos] 
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
return (
    <>
        <form onSubmit= {e=> e.preventDefault()}>
            <label>Agregar tarea</label><br />
            
            <input type="text" name="toda" onChange={handleChangee}/>
            <input type="text" name="todo" onChange={handleChange}/>
            <button onClick={handleClick && handleClickk}>agregar</button>            
        </form>
        {
            todos.map((value,index)=> (<Todo todo={value.todo} toda={value.toda} key={index} index={index} deleteTodo={deleteTodo}/>))
        }

    </>
)
}
export default Form 