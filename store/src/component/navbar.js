import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Product">Product</Link></li>
                <li><Link to="/about">About US</Link></li>
            </ul>

        </div>
    )
}
export default Navbar; //to use it in any file