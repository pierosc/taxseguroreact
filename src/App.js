import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

import Navbar from './components/navbar';
import Graphic from './components/Graphic';
import Aside from './components/aside';
import ConcretePlant from './Pages/ConcretePlant';
import ConcreteConfiguration from './Pages/ConcreteConfiguration';
import Report from './Pages/Report';
import './assets/css/style.css';
import Recentact from './components/Recentact';
import ItinRecordsSearch from './Pages/ItinRecordsSearch';
import RecordsSearch from './Pages/RecordsSearch';

function App() {
  const [selection, setselection] = useState('')
  

  return (
    <>

      <Navbar />

      <Aside changeSelect={selection => setselection(selection)} />

  <main id="main" class="main">
    <section class="section dashboard">

    <div class="row">

      <div class="col-xxl-9 col-xl-12">
      { selection == "ItinRecordsSearch" ? <ItinRecordsSearch /> : 
      selection == "RecordsSearch" ? <RecordsSearch /> :
      selection == "SearchUser" ? <Report /> :
      selection == "AddNewCostumer" ? <Report /> :
      selection == "PreparersList" ? <Report /> :
      selection == "MailRecordsSearch" ? <Report /> :
      selection == "PendingCases" ? <Report /> :
      <Report />}
      </div>

      <div class="col-xxl-3 col-xl-12">
        <Recentact />
      </div>
        
    </div>

    </section>
  </main>




</>
  )}

export default App;
