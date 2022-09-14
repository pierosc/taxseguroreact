import React from 'react'

function Comments() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <form class="row g-3">
      <div class="col-xxl-2 col-xl-12">
                  <label class="form-label">Comments</label>
                </div>
                <div class="col-xxl-10 col-xl-12">
                  <input type="Text" class="form-control"></input>
                </div>
      </form>
    </div>
    </div>
  )
}

export default Comments