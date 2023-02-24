import Mypic from './image/man5_big.jpg';
// import './main';

const Me = () => {
    return ( 
        <div id='Resume' className='me'>
            <div>
                <img className='mypic' src={Mypic} alt="My pics" />
            </div>            
            <p>
                <h1 id='name'>Adesoba Joshua</h1>
            </p>    
            <div className="site text-center">
                <ul className="d-flex">
                    
                    <li>
                        <a href="http://">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/joshuatimi54">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/joshua-adesoba-9144bb232">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/message/TBTYBWC3YLNUK1">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="d-flex">
                <div className="text-center p-3 equal-flex">DOWNLOAD CV</div>
                <div className="text-center p-3 equal-flex"><a href="mailto:joshuatimi54@gmail.com">CONTACT ME</a></div>
            </div>
        </div>
    
     );
}
 
export default Me;