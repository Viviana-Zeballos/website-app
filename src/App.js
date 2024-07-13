import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeSection from './components/Welcome';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomeSection/>
      <LoginForm/>
    </div>
  );
}

export default App;
