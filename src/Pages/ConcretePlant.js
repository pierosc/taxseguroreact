import React from 'react'
import Weighing from '../components/Weighing'
import Batchdata from '../components/Batchdata'
import Indicators from '../components/Indicators'
import Buttoncontrol from '../components/Button'
import Actuator from '../components/Actuator'

function ConcretePlant() {
  return (
    
        <div class="row">
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Cemento (Kg)" MedidaActual = "1324" MedidaFinal = "2843"/>
        </div>
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Arena (Kg)"/>
        </div>
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Piedra (Kg)"/>
        </div>
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Agua (Litros)"/>
        </div>
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Aditivo 1 (Litros)"/>
        </div>
        <div class="col-xxl-2 col-xl-12">
            <Weighing Material="Aditivo 2 (Litros)"/>
        </div>
        <div class="col-xxl-12 col-xl-12">
            <Batchdata/>
        </div>
        <div class="col-xxl-4 col-xl-10">
            <Actuator/>
        </div>
        <div class="col-xxl-4 col-xl-10">
            <Indicators/>
        </div>
        <div class="col-xxl-2 col-xl-10">
            <Buttoncontrol/>
        </div>
        </div>
    
  )
}

export default ConcretePlant