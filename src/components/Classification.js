import React from 'react'

function Classification() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Classification</h5>
      <form class="row g-3">
      <div class="col-xxl-6 col-xl-12">
                  <label class="form-label">ITIN Classific.</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                <select class="form-select" aria-label="multiple select example">
                      <option selected>Tax Payer</option>
                    </select>
                </div>
      </form>
    </div>
    </div>
  )
}

export default Classification