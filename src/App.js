import './Navbar';
import Navbar from './Navbar';
import Me from './Me';
import Media from './media';
import About from './About';
import Client from './client';

function App() {
  return (
    <div className="page row justify-content-center">
      <div className='no-padding'>
        <Navbar />
      </div>
      <div className='page1 no-padding bg-white rounded-3 lay1'>
          <div><Me /></div>     
          <div><Media /></div>     
        </div>
      <div>
        <div>
          <div><About /></div>
          <div><Client /></div>
        </div>
      </div>
    </div>
  );
}

export default App;

