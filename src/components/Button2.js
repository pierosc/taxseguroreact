import React from 'react'
import { BsFillFunnelFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { BsPrinterFill } from "react-icons/bs";

function Button2(props) {
  return (
    <div class="card">
    <div class="card-body">
    <label class="form-label"></label>
    <div class="row">

      <div class="col-xxl-2 col-xl-4">
        <button class="btn btn-primary btn-lg" type="button"><BsFillFunnelFill /></button>
      </div>
      <div class="col-xxl-2 col-xl-4">
        <button class="btn btn-primary btn-lg" type="button"><BsArrowDownSquareFill /></button>
      </div>
      <div class="col-xxl-2 col-xl-12">
        <button class="btn btn-primary btn-lg" type="button"><BsPrinterFill /></button>
      </div>
      <div class="col-xxl-2 col-xl-4">
        <button class="btn btn-primary btn-lg" type="button"><BsFillFunnelFill /></button>
      </div>
      <div class="col-xxl-2 col-xl-4">
        <button class="btn btn-primary btn-lg" type="button"><BsArrowDownSquareFill /></button>
      </div>
      <div class="col-xxl-2 col-xl-12">
        <button class="btn btn-primary btn-lg" type="button"><BsPrinterFill /></button>
      </div>
    </div>
    </div>   
    </div>
  )

}

export default Button2;