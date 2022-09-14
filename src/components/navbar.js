import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar(){
    return(
      <header id="header" class="header fixed-top d-flex align-items-center">

      <div class="d-flex align-items-center justify-content-between">
        <a class="logo d-flex align-items-center">
          <span class="d-none d-lg-block">TAXSEGURO</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>
      {/* <!-- End Logo --> */}
  
      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
  
          <li class="nav-item dropdown pe-3">
  
            <a class="nav-link nav-profile d-flex align-items-center pe-0" >
              <span class="d-none d-md-block  ps-2">Jose Calderón</span>
            </a>
  
          </li>
          {/* <!-- End Profile Nav --> */}
  
        </ul>
      </nav>
      {/* <!-- End Icons Navigation --> */}
  
    </header>

    );
}

export default Navbar;

