import Karosel from "./Karosel";
import Navbar1 from "./Navbar";
import Lower_footer from "./Lower_footer";
import {Link} from 'react-router-dom';
import "./practice_menu.css";



function Parent(){
    return (
        <div>
        <div className='row-md-12'>
            <div id='button_fix' style={{backgroundColor:"blue"}}>
            <button  >
                <Link to="/homee"> go back</Link> 
                </button>
            </div>
            
                <Navbar1/>
                </div>
                <div className='row-md-12'>
                <Karosel/>
                </div>
                
                <div className='row-md-12' style={{backgroundcolor:"blue"}}>
                <Lower_footer/>
                </div>
     {/* <Slider1/> */}
    
    </div>
    )
};
export default Parent;