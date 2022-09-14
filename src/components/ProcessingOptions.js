import React from 'react'

function ProcessingOptions() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Processing Options</h5>
      <form class="row g-3">
      <div class="col-xxl-8 col-xl-12">
                  <label class="form-label">Process Driver's License</label>
                </div>
                <div class="col-xxl-4 col-xl-12">
                <select class="form-select" aria-label="multiple select example">
                      <option selected>No</option>
                    </select>
                </div>
                <div class="col-xxl-8 col-xl-12">
                  <label class="form-label">Process ITIN/RENEW</label>
                </div>
                <div class="col-xxl-4 col-xl-12">
                <select class="form-select" aria-label="multiple select example">
                      <option selected>No</option>
                    </select>
                </div>
      </form>
    </div>
    </div>
  )
}

export default ProcessingOptions