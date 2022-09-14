import React from 'react'

function BasicInformation() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Basic Information</h5>    
                
        <form class="row g-3">
            
                <div class="col-xxl-6 col-xl-12">
                  <label class="form-label">Filling Status</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                <select class="form-select" aria-label="multiple select example">
                      <option selected>S</option>
                    </select>
                </div>

                <div class="col-xxl-6 col-xl-12">
                  <label class="form-label">First Name</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                  <input type="Text" class="form-control"></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Middle Name</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Last Name</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Date of Birth</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="date" class="form-control"></input>
                </div>

                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">ITIN/SSN</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Phone Number</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <label class="form-label">Email</label>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <input type="text" class="form-control" ></input>
                </div>


                </form>

              
                </div>
          </div>
  )
}

export default BasicInformation