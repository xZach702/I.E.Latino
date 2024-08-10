
import logo from '../../images/logo.svg'

const Navbar = ()=> {
      return(
            <div className="navBar">
                  <div>
                        <img src={logo} alt="Logo de la institución" width={50}/>
                        <div >I.E.P Latino</div>
                        <div>
                              menu
                        </div>
                  </div>
            </div>
      )
}

export default Navbar;