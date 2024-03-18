import { Link } from "react-router-dom";
// import Add from "./pages/Add";

function Header(){
    function add(){

    }
    return(<>
    <header>
        <h1> Keep-Lite</h1> <button className="plus"> <Link to="/add">  Add   </Link> </button>
    </header>
    
    </>)
}
export default Header;