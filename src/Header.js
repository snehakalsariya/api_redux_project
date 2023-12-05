import { Link } from "react-router-dom";

const Header = ()=>{




    return(<>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">


      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link to="/viewproduct" className="nav-link active" >View Product</Link>
        </li>

        <li class="nav-item">
          <Link to="/viewemployee" className="nav-link active" >View Employee</Link>
        </li>

        <li class="nav-item">
          <Link to="/addproduct" className="nav-link active" >Add Product</Link>
        </li>

        <li class="nav-item">
          <Link to="/addemployee" className="nav-link active" >Add Employee</Link>
        </li>

        <li class="nav-item">
          <Link to="/login" className="nav-link active" >Login</Link>
        </li>

    </ul> 
    </div>
  </div>
</nav>
    </>)
}
export default Header;