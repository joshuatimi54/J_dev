import Mypic from './image/man5_big.jpg';
// import './main';

const Me = () => {
    return ( 
        <div id='Resume' className='me'>
            <div>
                <img className='mypic' src={Mypic} alt="My pics" />
            </div>
            {/* this block design the image */}
            <div className='d-flex'>
                <div className='left-rotate'></div>
                <div className='right-rotate'></div>
            </div>
            <p>
                <h1 id='name'>Adesoba Joshua</h1>
            </p>
        </div>
     );
}
 
export default Me;