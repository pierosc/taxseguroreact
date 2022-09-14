import React from 'react'



function porcentaje(props) {


}


function Weighing(props) {
  return (

        <div class="card info-card">

            <div class="card-body">
            <h5 class="card-title">{ props.Material }</h5>

            <div class="d-flex align-items-center">
                <div class="ps-3">
                <h6>{ props.MedidaActual } / { props.MedidaFinal }</h6>
                <span class="text-danger medium pt-1 fw-bold">12%</span>
                </div>
            </div>

            </div>

        </div>

  )
}

export default Weighing