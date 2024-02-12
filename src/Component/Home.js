import React from "react";
import LoginSingnup from "./Loginpage/Login";
import { Link } from "react-router-dom";


function Home(){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      
                    </div>
                </div>
                <LoginSingnup/>
            </div>
        </React.Fragment>
    )
}
export default Home;