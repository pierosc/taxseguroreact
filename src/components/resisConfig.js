import React from 'react'

function ResisConfig() {
  return (
    <div><div class="card">
    <div class="card-body">
      <h5 class="card-title">Configuración de Resistencia</h5>
    <form class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Resistencia</label>
                  <input type="Text" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Piedra</label>
                  <input type="number" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Arena</label>
                  <input type="number" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Cemento</label>
                  <input type="number" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Agua</label>
                  <input type="number" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Aditivo 1</label>
                  <input type="number" class="form-control"></input>
                </div>
                <div class="col-md-2">
                  <label class="form-label">Aditivo 2</label>
                  <input type="number" class="form-control"></input>
                </div>
      
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Descripción</label>
                  <input type="text" class="form-control" placeholder="Ingresar pruebas laboratorio, recomendaciones, etc"></input>
                </div>


                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Agregar</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </form>
                </div>
          </div></div>
  )
}

export default ResisConfig