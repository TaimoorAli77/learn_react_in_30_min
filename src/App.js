import React , {useState , useRef , useEffect} from 'react'
import './App.css';
// import Todo from './components/todo';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoapp-todo'
const App = () => {
  const [todos, setTodos] = useState([])
 
  useEffect(() => {
      const stroedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (stroedTodos)   setTodos(stroedTodos)
   
  }, []);

  useEffect(
     () => {
      localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(todos))
  
  }, [todos]);


 function toggleTodos(id) {
  const newTodo = [...todos]
  const todo = newTodo.find(todo=>todo.id===id)
  todo.complete= !todo.complete
  setTodos(newTodo)
 }

  const todoNameRef = useRef();
  const handleAddTodo = (e)=>{
    const name = todoNameRef.current.value
    if(name=== '') return
    setTodos(prevtodos=>{
      return [...prevtodos , { id: uuidv4() , name:name , complete:false}]
    })
    todoNameRef.current.value= null
  }

  function handleClearTodos(){
    const newtodos = todos.filter(todo=> !todo.complete)
    setTodos(newtodos)
  }
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodos={toggleTodos} />

      <input ref={todoNameRef} type='text' />
      <button  onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo=> !todo.complete).length} left todos</div>

    </React.Fragment>
  );
};

export default App



//Notes  npm i uuid         for ids generate