import React from 'react'
import ResisConfig from '../components/resisConfig'
import PlaceConfig from '../components/placeConfig'

function ConcreteConfiguration() {
  return (
    
    <div class="row">
        {/* <div class="col-lg-6"> */}
        <ResisConfig  />
        <PlaceConfig />
        {/* </div>
        <div class="col-lg-6">
        <ResisConfig /> 
        </div> */}
    </div>
    
  )
}

export default ConcreteConfiguration