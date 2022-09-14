import React from 'react'


function Actuator() {
  return (
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Actuadores</h5>
            <div class="row">
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Compresora</label>
                    <span class="badge rounded-pill bg-dark">OFF</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Bomba de planta</label>
                    <span class="badge rounded-pill bg-success">ON</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Faja</label>
                    <span class="badge rounded-pill bg-danger">PELIGRO</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Campana</label>
                    <span class="badge rounded-pill bg-dark">OFF</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Compuerta</label>
                    <span class="badge rounded-pill bg-dark">OFF</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Campana</label>
                    <span class="badge rounded-pill bg-dark">OFF</span>
                </div>
                <div class="col-xxl-6 col-xl-10">
                    <label class="col-sm-8 col-form-label">Campana</label>
                    <span class="badge rounded-pill bg-dark">OFF</span>
                </div>
            </div>
            
        </div>
    </div>

  
  )
}

export default Actuator