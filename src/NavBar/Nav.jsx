import {    Link} from "react-router-dom";
const Nav=()=>{
    return (
      <>
        <nav className="bg-black">
          <ul className="flex justify-center gap-20 text-3xl text-white py-4 px-2">
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/Contactme"> Contact Me</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}
export default Nav;