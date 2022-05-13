import './App.css';
import HomeView from './views/home';
import Layout from './layout/layout';

import DetailView from './views/detail';
// import BikeView from './views/bike';
// import HeaderComponent from './components/header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<HomeView/>} />
          <Route path="/detail">
            <Route path=':id' element={<DetailView/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



