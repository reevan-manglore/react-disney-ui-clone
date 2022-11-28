import { useNavigate,useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg"

export default function NavBar() {
    const navigate= useNavigate();
    const location =useLocation();
    return (
        <header className=" px-7 py-4  bg-background-dark-2 text-white">
            <nav className="flex justify-between">
                <img src={logo} alt="" height={70} width = {70} />
                <button className="px-5 py-0.5 border-2 border-white rounded-md"
                 onClick={() =>{ 
                    if(location.pathname == "/"){
                        navigate("/home");
                    }
                    else{
                        navigate(-1);
                    }
                }}
                >
                    {location.pathname == "/"?"Login":"Logout"}
                </button>
            </nav>
        </header>
    );
}