import React from 'react'
import { useState } from 'react'


const Aside = (props) => {
  // const [menu_select, setmenu_select] = useState("principal");

  return (
    <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i>
          <span>Start</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>

        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a onClick={() => props.changeSelect('ItinRecordsSearch')}><i class="bi bi-circle"></i><span>ITIN</span></a>
          </li>
          <li>
            <a onClick={() => props.changeSelect('RecordsSearch')}><i class="bi bi-circle"></i><span>Driver's License</span></a>
          </li>
          <li>
            <a onClick={() => props.changeSelect('SearchUser')}><i class="bi bi-circle"></i><span>Search</span></a>
          </li>
          <li>
            <a onClick={() => props.changeSelect('AddNewCostumer')}><i class="bi bi-circle"></i><span>New Costumer</span></a>
          </li>
          <li>
            <a onClick={() => props.changeSelect('PreparersList')}><i class="bi bi-circle"></i><span>Appointments</span></a>
          </li>
          <li>
            <a onClick={() => props.changeSelect('MailRecordsSearch')}><i class="bi bi-circle"></i><span>Mail</span></a>
          </li>
        </ul>

      </li>
      {/* <!-- End Planta Nav --> */}

      <li class="nav-item">
        <a onClick={() => props.changeSelect('PendingCases')} class="nav-link collapsed" data-bs-toggle="collapsed" >
          <i class="bi bi-grid"></i>
          <span>Pending Cases</span>
        </a>
        
      </li>
      {/* <!-- End Reportes Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i>
          <span>Management</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>

        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i class="bi bi-circle"></i><span>User Management</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i class="bi bi-circle"></i><span>Alerts Management</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i class="bi bi-circle"></i><span>Database Management</span>
            </a>
          </li>

        </ul>
      </li>
      {/* <!-- End Forms Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i>
          <span>Bussiness Management</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>

        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i class="bi bi-circle"></i><span>Create Company</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i class="bi bi-circle"></i><span>Manage Company</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i class="bi bi-circle"></i><span>Modules</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- End Tables Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables2-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-person"></i>
          <span>Marketing</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>

        <ul id="tables2-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i class="bi bi-circle"></i><span>Clients Management</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- End Profile Page Nav --> */}


    </ul>

  </aside>
  )
}

export default Aside