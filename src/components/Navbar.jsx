import github from "../assets/github-icon.png"

const Navbar = () => {
    return ( 

        <nav>
            <a href="https://github.com/LeonardHolter" target="_blank">
                <img src={github} alt="github logo" width={40} />
            </a>
        </nav>

     );
}
 
export default Navbar;