const About = () => {
    return ( 
        <div className="About p-3 mt-3 rounded-3 lay1 row ">
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

            <div className="mt-5"><h2><span className="ct">My </span> <b>Services</b></h2></div>
            <div className="mt-3 text-left">
                <div className="mt-2">
                    <div><i className="fa fa-code"></i></div>
                    <p><b>Web Development</b></p>
                    <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                </div>
                <div className="mt-2">
                    <div><i className="fa fa-money"></i></div>
                    <p><b>Business Mentor</b></p>
                    <p>Music copying, writing, creating, transcription, arranging and composition services.</p>
                </div>
                <div className="mt-2">
                    <div><i className="fa fa-buysellads"></i></div>
                    <p><b>Advertising</b></p>
                    <p>Advertising services include television, radio, print, mail, and web apps</p>
                </div>
                <div className="mt-2">
                    <div><i className="fa fa-gamepad"></i></div>
                    <p><b>Game Development</b></p>
                    <p>Developing memorable and unique mobile android, ios and video games.</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;