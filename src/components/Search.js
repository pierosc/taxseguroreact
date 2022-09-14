import React from 'react'

import { BsSearch } from "react-icons/bs";


function Search() {
    return (
        <div class="card">
        <div class="card-body">
        <label class="form-label"></label>
        <div class="row">
        

        <div class="col-xxl-11 col-xl-12">
            <input type="text" class="form-control" ></input>
        </div> 
        <div class="col-xxl-1 col-xl-12">
            <label class="form-label"><BsSearch /></label>
        </div> 
            
            
        </div>
        </div>
        </div>
      )
}

export default Search