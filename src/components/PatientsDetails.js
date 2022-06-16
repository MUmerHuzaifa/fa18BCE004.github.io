import React, { Component } from 'react'

export default class PatientsDetails extends Component {
    state=[{
        Arr_Doc_Deatils:[
            {img:require("./imgPatients/pat1.jpg"),id:1,name:"Ali Umer",father:"Umer Farooq",cnic:"35103-90822563-1",doa:"12-5-2022",diagnosis:"Cardic problem"},
            {img:require("./imgPatients/pat2.png"),id:2,name:"Umer khan",father:"khan baba",cnic:"35103-900022563-1",doa:"14-5-2022",diagnosis:"Eyes problem"},
            {img:require("./imgPatients/pat3.jpg"),id:3,name:"Saeed Umer",father:"baber Ali",cnic:"35103-90929863-1",doa:"17-5-2022",diagnosis:"Lungs problem"},

        ]
    }]
  render() {
    return (
      <div id='doctors_details'>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={this.state.Arr_Doc_Deatils.img} />
    <Card.Body>
      <Card.Title>{this.state.Arr_Doc_Deatils.name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  
</CardGroup>
      </div>
    )
  }
}
