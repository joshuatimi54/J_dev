import Client1 from './image/client_2.png';
import Client2 from './image/client_3.png';
import Client3 from './image/client_4.png';
// import Client1 from './image/client_2.png';

const Clients = () => {
    return ( 
        <div className="client">
            <div className="mt-5"><h2><span className="ct">C</span>lients</h2></div>
            <div className="clients d-flex row">
                <div className='d-flex'>
                    <div className='text-center equal-flex'>
                    <img className="client" src={Client1} alt="Clients" />
                    <p>Adsace</p>
                </div>
                <div className='text-center equal-flex'>
                    <img className="client" src={Client2} alt="Clients" />
                    <p>Kalos</p>
                </div>
                </div>
                 <div className='d-flex'>
                    <div className='text-center equal-flex'>
                    <img className="client" src={Client3} alt="Clients" />
                    <p>Adsace</p>
                </div>
                <div className='text-center equal-flex'>
                    <img className="client" src={Client1} alt="Clients" />
                    <p>Kalos</p>
                </div>
                </div>
            </div>

            <div className="mt-5"><h2><span className="ct">Q</span>uotes</h2></div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img src="" alt="" />
                <p><b>Ryan Adlard</b></p>
                <caption>Web Designer</caption>
            </div>
        </div>
     );
}
 
export default Clients;