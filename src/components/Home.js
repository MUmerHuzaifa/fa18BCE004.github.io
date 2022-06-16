import "./H_style.css";
import Navbar1 from "./Navbar1";
import MembersInfo from './MembersInfo';
import AchieveChild from './AchieveChild';
import Carousell from "./Carousell";
import Login_Form from "./Login_Form";
import PlaceOrder from "./PlaceOrder";
import Lower_footer from './Lower_footer';
import Blocks from './Blocks';
function Home(){


    

    return (
    <div className="outer_id">
     <div className="row-md-12" id="home">

        <div className="" id="carousal">
         
            <Carousell/>
        </div>
        <div className="row-md-12" id="div_blocks" style={{height:"100vh"}}> 
            {/* <Blocks/> */}
            <div className="info">
            <div className="img">
                <img src="https://xp.io/storage/1pm4zaKt.jpg" alt="" />
            </div>
            <div className="content">
            <h1 ><span>Welcome</span> To Our Health Monitorng System</h1>
            <h4 style= {{color:"rgb(68, 90, 114)",marginTop:"30px"}}> You may Facilitate by</h4>
            <p style= {{}}>See Our expert Doctors and consult for free</p>
            <p style= {{}}>After consultataion Buy our Wrist band to monitor your health with  help of Doctor</p>
            <p style= {{}}>You May download our Android App to enjoy more</p>
            </div>
        </div>
        </div>

        

        <div className="row-md-12" id="Members" >
            <MembersInfo/>
        </div>

        <div className="row-md-12" id="pub_imag" >
           {/* <img src="pic1.png" alt="not found"/> */}
           <div className="overlay">
           <div className="content">
            <h2 style={{color:"white"}}>Welcome</h2>
            <p>After consultataion Buy our Wrist band to monitor your health with  help of Doctor</p>
           </div>
           </div>
           
        </div>
        
        <div className="row-md-12" id="fotter" >
            <Lower_footer/>
        </div>
        

    </div>
    </div>
    )
};

export default Home;

