import React from 'react'
import Table2 from '../components/Table2'
import Search from '../components/Search'
import Button2 from '../components/Button2'

function RecordsSearch() {
    return (
        <div> 
        <div class="row">
        <div class="col-xxl-7 col-xl-12">
          <Search />
        </div>
        <div class="col-xxl-5 col-xl-12">
          <Button2 />
        </div> 
    
        </div>
    
        <Table2 />
        </div> 
        )
}

export default RecordsSearch