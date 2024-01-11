import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { DataProvider } from './DataContext'
import HomePage from './Pages/HomePage';
import FriendsPage from './Pages/FriendsPage';
import HabitsPage from './Pages/HabitsPage';
import TaskPage from './Pages/TaskPage';

function App() {

  return (
    <DataProvider>
      <div className="App">
        <div className='Nav'>
          <Link to="/" >Home</Link>
          <Link to="/Friends" >Friends</Link>
          <Link to="/Habits" >Habits</Link>
          <Link to="/Tasks" >Tasks</Link>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Friends' element={<FriendsPage />} />
          <Route path='/Habits' element={<HabitsPage />} />
          <Route path='/Tasks' element={<TaskPage />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
