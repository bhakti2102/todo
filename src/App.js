import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';
import TodoList from './components/todo/TodoList';
import store from './components/store'
import { Provider } from 'react-redux';

function App() {
  return (
<Provider store={store}>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/todo' element={<TodoList/>} />
      </Routes>
  </BrowserRouter>
</Provider>
  );
}

export default App;
