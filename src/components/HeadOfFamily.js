import React from 'react'

function HeadOfFamily() {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Head Of Family Lookup</h5>
      <form class="row g-3">
                <div class="col-xxl-5 col-xl-12">
                  <label class="form-label">Name/ITIN/SSN</label>
                </div>
                <div class="col-xxl-7 col-xl-12">
                  <input type="Text" class="form-control"></input>
                </div>
                <table class="table datatable">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">SSN/ITIN</th>
                    <th scope="col">Adress</th>
                  </tr>
                </thead>
                
                <tbody>
                <tr>
                    <td>Jose Calderon</td>
                    <td>1744278282</td>
                    <td>Av. Quia quae rerum </td>
                  </tr>
                </tbody>
              </table>

      </form>
    </div>
    </div>
  )
}

export default HeadOfFamily