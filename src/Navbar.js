// import './main';

const Navbar = () => {
    return (
        <header className="bs mb-3">
            <div className="lay1 top-border-radius p-3 d-flex justify-content-between">
                <div id="name">Adesoba</div>
                <div className="">
                    <a href="https://wa.me/message/TBTYBWC3YLNUK1"><button>Hire</button></a>
                </div>
            </div>
            <nav className="navbar bottom-border-radius lay1">
            <ul className="d-flex ">
                <li className="lay2">
                   <a href="#About">
                    <span className="icons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                    <span>ABOUT</span>
                   </a>
                </li>
                <li className="lay2">
                   <a href="#Resume">
                    <span className="icons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg></span>
                    <span>RESUME</span>
                   </a>
                </li>
                <li className="lay2">
                    <a href="#Work">
                        <span className="icons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                        <span>WORK</span>
                    </a>
                </li>
                <li className="lay2">
                    <a href="#BLog">
                        <span className="icons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></span>
                        <span>BLOG</span>
                    </a>
                </li>
                <li className="lay2">
                    <a href="#Contact">
                        <span className="icons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                        <span>CONTACT</span>
                    </a>
                </li>
            </ul>
        </nav>
        </header> 
     );
}
 
export default Navbar;