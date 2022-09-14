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
  
          <li class="nav-item dropdown">
  
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">4</span>
            </a>
            {/* <!-- End Notification Icon --> */}
  
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li class="dropdown-header">
                You have 4 new notifications
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
  
              <li class="notification-item">
                <i class="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>
  
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
  
              <li class="notification-item">
                <i class="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>
  
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
  
              <li class="notification-item">
                <i class="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>
  
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
  
              <li class="notification-item">
                <i class="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>
  
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li class="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
  
            </ul>
            {/* <!-- End Notification Dropdown Items --> */}
  
          </li>
          {/* <!-- End Notification Nav --> */}
  
          <li class="nav-item dropdown pe-3">
  
            <a class="nav-link nav-profile d-flex align-items-center pe-0" >
              <span class="d-none d-md-block  ps-2">Piero Saldaña</span>
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

