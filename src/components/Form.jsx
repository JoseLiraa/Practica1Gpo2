import React, {useState} from 'react';
import Todo from '../components/Todo';



const Form = () => {

    const [canti, setCanti] = useState(0)
    const [produ, setProdu] = useState('')
    const [todos, setTodos] = useState([])
    
    const productoAgregar = (e) => {
        e.preventDefault();
        if(produ.trim() ==='' || canti < 1){
            alert('Los campos no pueden estar vacio. Agregue una cantidad y producto')
            return;
        }        
    

    const todoLista = {canti,produ}
    let totalLista = [...todos];
    totalLista.push(todoLista);
    setTodos(totalLista);
    };
           
 
    const deleteTodo = indice => {
        const newTodos = [...todos] 
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
return (
    <>
        <form onSubmit= {productoAgregar}>
            <h3>Compras del supermercado</h3><br />             
            <label>Cantidad:</label> 
            <input type="number" placeholder="ej:8" name="canti" value={canti} onChange={(e) => setCanti(parseInt(e.target.value,10))}/>               
            <label>Producto:</label>        
            <input type="text" placeholder="ej:Manzana" name="produ" value={produ} onChange={(e) => setProdu(e.target.value)}/>
            <br />
            <input className="boton" type="submit" value="Agregar a la lista" />                        
        </form>
        {
            todos.map((value,index)=> (<Todo canti={value.canti} produ={value.produ} key={index} index={index} deleteTodo={deleteTodo}/>))
        }

    </>
)
}
export default Form 