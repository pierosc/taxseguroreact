import React from 'react'
import Table from '../components/Table'
import Search from '../components/Search'
import Button from '../components/Button'

import { BsFillFunnelFill } from "react-icons/bs";

function ItinRecordsSearch() {
    return (
    <div> 
    <div class="row">
    <div class="col-xxl-9 col-xl-12">
      <Search />
    </div>
    <div class="col-xxl-3 col-xl-12">
      <Button />
    </div> 

    </div>

    <Table />
    </div> 
    )
}

export default ItinRecordsSearch