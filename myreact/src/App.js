
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar  title="TextForm"/>
  <div className="container">
  {/* <Textform  heading="Text Analysis React App" /> */}
  <About/>
  </div>
  </>
  );
}

export default App;
