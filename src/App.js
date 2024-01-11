import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FriendsPage from './Pages/FriendsPage';
import HabitsPage from './Pages/HabitsPage';
import TaskPage from './Pages/TaskPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Friends' element={<FriendsPage/>} />
        <Route path='/Habits' element={<HabitsPage/>} />
        <Route path='/Tasks' element={<TaskPage/>} />
      </Routes>
    </div>
  );
}

export default App;
