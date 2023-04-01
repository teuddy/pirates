import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import './index.css'
const HomePage = ()=>{

    //are yoru llogeed if so go to dashboard
    //if not go to login
    if(localStorage.getItem('token')){
        window.location.href = '/dashboard'
    }
    

    return(
        <div className="register-container">
            <div className="uno">
                <Register/>
            </div>
            <div className="dos">
                <Login/>
            </div>
   
        </div>
    )
}

export default HomePage;