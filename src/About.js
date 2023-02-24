import Client from './client';
import Service from './Service';

const About = () => {
    return ( 
        <div id='About' className="container About p-3 mt-3 rounded-3 lay1">
            <div><h2><span className="ct">About</span> Me</h2></div>
            <div className="mb-2">
                <div className="pt-4"><b>Hello! I’m Donald Wellborn.</b> Web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique.</div>
                <div>
                    <div className="pt-3 d-flex justify-content-between">
                        <div className="lay3">Age......</div>
                        <div>21</div>
                    </div>
                    <div className="pt-3 d-flex justify-content-between">
                        <div className="lay3">Residence....</div>
                        <div>NIGERIA</div>
                    </div>
                    <div className="pt-3 d-flex justify-content-between">
                        <div className="lay3">Freelance....</div>
                        <div>Available</div>
                    </div>
                    <div className="pt-3 d-flex justify-content-between">
                        <div className="lay3">Address.....</div>
                        <div>Akure, Ondo State</div>
                    </div>
                </div>
            </div>

            <div><Service /></div>

            <div><Client /></div>
        </div>
     );
}
 
export default About;