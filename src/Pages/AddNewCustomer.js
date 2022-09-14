import React from 'react'
import BasicInformation from '../components/BasicInformation'
import HeadOfFamily from '../components/HeadOfFamily'
import Classification from '../components/Classification'
import ProcessingOptions from '../components/ProcessingOptions'
import Adress from '../components/Adress'
import Comments from '../components/Comments'

function AddNewCustomer() {
  return (
    <div class="card"><div class="card-body">
<h5 class="card-title"></h5>
    <div class="row">
        <div class="col-xxl-5 col-xl-12">
        <BasicInformation />
        <Classification />
        </div>
    
    <div class="col-xxl-7 col-xl-12">
    <HeadOfFamily />
    <ProcessingOptions />
    </div>
    <div class="col-xxl-6 col-xl-12">
    <Adress />
    </div>
    <div class="col-xxl-6 col-xl-12">
    <Adress />
    </div>
    <div class="col-xxl-12 col-xl-12"><Comments /></div>
    <div class="col-xxl-12 col-xl-12">
        <button class="btn btn-primary btn-lg" type="button">SAVE</button>
      </div>
    </div>
    </div></div>
  )
}

export default AddNewCustomer