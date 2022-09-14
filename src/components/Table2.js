import React from 'react'

function Table2(props) {

  return (
    
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">ITIN Records Search</h5>
              
              {/* <!-- Table with stripped rows --> */}
              <table class="table datatable">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">ITIN/SSN</th>
                    <th scope="col">Initialization Date</th>
                    <th scope="col">Preparer</th>
                    <th scope="col">Location</th>
                    <th scope="col">Cert. Date</th>
                    <th scope="col">Updated Appt.</th>
                    <th scope="col">Appt. Type</th>
                    <th scope="col">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Bridie Kessler</td>
                    <td>2020-07-02</td>
                    <td>Archive</td>
                    <td>Jose Calderon</td>
                    <td>2016-05-25</td>
                    <td>951951951</td>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bridie Kessler</td>
                    <td>2020-07-02</td>
                    <td>Archive</td>
                    <td>Jose Calderon</td>
                    <td>2016-05-25</td>
                    <td>951951951</td>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashleigh Langosh</td>
                    <td>2020-07-02</td>
                    <td>Archive</td>
                    <td>Jose Calderon</td>
                    <td>2016-05-25</td>
                    <td>951951951</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Angus Grady</td>
                    <td>2020-07-02</td>
                    <td>Archive</td>
                    <td>Jose Calderon</td>
                    <td>2016-05-25</td>
                    <td>951951951</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Raheem Lehner</td>
                    <td>2020-07-02</td>
                    <td>Archive</td>
                    <td>Jose Calderon</td>
                    <td>2016-05-25</td>
                    <td>951951951</td>
                    <td>2018</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
  )
}

export default Table2