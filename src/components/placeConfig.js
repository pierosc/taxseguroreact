import React from 'react'

function PlaceConfig() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Configuración de Obra</h5>
      
      <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Agregar</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Modificar</button>
                </li>
              </ul>

              <div class="tab-content pt-2" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                
                <form class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Nombre de la Obra</label>
                  <input type="Text" class="form-control"></input>
                </div>
      
                <div class="col-6">
                  <label for="inputAddress5" class="form-label">Dirección</label>
                  <input type="text" class="form-control" ></input>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </form>
              </div>

              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <form class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Nomre de la Obra</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
      
                <div class="col-6">
                  <label for="inputAddress5" class="form-label">Dirección</label>
                  <input type="text" class="form-control" ></input>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </form>
                
              </div>

              </div>

    


                </div>
          </div>
  )
}

export default PlaceConfig