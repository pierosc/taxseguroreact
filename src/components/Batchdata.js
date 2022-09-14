import React from 'react'


function Batchdata() {
  return (
    <div class="card">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <div class="row">

                <label class="col-sm-1 col-form-label">Obra</label>

                <div class="col-sm-2">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccionar Obra</option>
                    <option value="1">Obra 1</option>
                    <option value="2">Obra 2</option>
                    <option value="3">Obra 3</option>
                </select>
                </div>

                <label class="col-sm-1 col-form-label">Dirección</label>

                <div class="col-sm-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccionar Dirección</option>
                    <option value="1">Bellamar 2da Etapa mz o5 lt 10</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>

                <label class="col-sm-1 col-form-label">Cubos m3</label>

                <div class="col-sm-1">
                <input type="number" class="form-control"></input>
                </div>

                <label class="col-sm-1 col-form-label">Resistencia</label>

                <div class="col-sm-2">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Resistencia</option>
                    <option value="1">175 kg/cm2</option>
                    <option value="2">250 kg/cm2</option>
                    <option value="3">Manual</option>
                </select>
                </div>

                
                
            </div>
            
        </div>
    </div>

  )
}

export default Batchdata