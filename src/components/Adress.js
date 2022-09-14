import React from 'react'

function Adress() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Adress</h5>    
                
        <form class="row g-3">

                <div class="col-xxl-6 col-xl-12">
                  <label class="form-label">Street Adress</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                  <input type="Text" class="form-control"></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Apt/Ste/Bldng</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Country</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">State</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">ZIP</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">City</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>


                </form>

              
                </div>
          </div>
  )
}

export default Adress