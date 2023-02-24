import './Navbar';
import Navbar from './Navbar';
import Me from './Me';
import About from './About';
import Works from './Works';

function App() {
  return (
    <div className="page justify-content-center">
      <div className='lay1'>
        <Navbar />
      </div>
      <div className='page1 lay1'>
         <Me />
      </div>
      <div className='page2'>
        
        <div><About /></div>          
        <div><Works /></div>
      </div>
      
    </div>
  );
}

export default App;

