import { useEffect } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleted from './components/TotalCompleted';
import { useDispatch } from 'react-redux';
import { todosDoldur } from './redux/todoSlice';

function App() {

  const vekilFonksiyon = useDispatch()

  useEffect(()=>{

    async function veriCek() {
      const istek = await fetch("https://jsonplaceholder.typicode.com/todos")
      const veri = await istek.json()
      vekilFonksiyon( todosDoldur( {veri: veri.slice(0, 20)  } ) )
    }

    veriCek()

  }, [])

  return (
    <>
      <section className='container'>
        <h1>ToDo Uygulaması</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleted />
      </section>
    </>
  );
}

export default App;
