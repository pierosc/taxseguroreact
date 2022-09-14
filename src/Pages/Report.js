import React from 'react'
import Graphic from '../components/Graphic'
import Recentact from '../components/Recentact'
import ReportTable from '../components/ReportTable'

import PlaceConfig from '../components/placeConfig'
import ResisConfig from '../components/resisConfig'
import Table from '../components/Table'

function Report() {
  return (
    <div class="row">

      <PlaceConfig />
      <Table />
      <ResisConfig  />
        
    </div>
  )
}

export default Report