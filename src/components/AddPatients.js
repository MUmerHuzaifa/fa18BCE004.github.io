import React, { Component } from 'react';

 class AddPatients extends Component {
  state = {
      applicantList: [
        {id: 1,name: "Farhan",aggregate: 87},
        {id: 2,name: "Amin",aggregate: 77},
        {id: 3,name: "Shahzad",aggregate: 97},
      ],
      selectedCandidates : [

      ],
      waitingList: [

      ]
  }

  handleSelectedDelete = (s) => { 
    this.setState(
          {
              selectedCandidates: this.state.selectedCandidates.filter(st => st.id !== s.id),
              applicantList: [...this.state.applicantList,s]
          }
      )
  }

  handleWaitingDelete = (s) => { 
    this.setState(
          {
              waitingList: this.state.waitingList.filter(st => st.id !== s.id),
              applicantList: [...this.state.applicantList,s]
          }
      )
  }

  handleSelected = (s) => {
      this.setState({
          applicantList: this.state.applicantList.filter(st => st.id !== s.id),
          selectedCandidates: [...this.state.selectedCandidates,s]
      })
  }

  handleWaiting = (s) => {
      this.setState(
          {
              applicantList: this.state.applicantList.filter(st => st.id !== s.id),
              waitingList: [...this.state.waitingList,s]
          }
      )
  }


  render() {
    return (
      <div>
          
          <h1>CS Merit List 2021</h1>
          <table className="table table-hover text-center">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Aggregate</th>
                <th scope="col">Actions</th>
            </thead>
            <tbody>
                  {this.state.applicantList.map((s) => {
                      return(
                      <tr>
                          <th scope="row">{s.id}</th>
                          <td>{s.name}</td>
                          <td>{s.aggregate}</td>
                          <td>
                              <button className="btn btn-primary" onClick={this.handleSelected.bind(this,s)}>Selected</button>
                              <button className="btn btn-secondary mx-1" onClick={this.handleWaiting.bind(this,s)}>WaitingList</button>
                          </td>
                      </tr>
                      ); 
                })}     
            </tbody>
        </table>

        <h1 id="sc">Selected Candidates 2021</h1>
          <table className="table table-hover text-center">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Aggregate</th>
                <th scope="col">Actions</th>
                <th scope="col">Status</th>
            </thead>
            <tbody>
                  {this.state.selectedCandidates.map((s) => {
                      return(
                      <tr>
                          <th scope="row">{s.id}</th>
                          <td>{s.name}</td>
                          <td>{s.aggregate}</td>
                          <td><button className="btn btn-danger" onClick={this.handleSelectedDelete.bind(this,s)}>Delete</button></td>
                          <td>{s.status}</td>
                      </tr>
                      ); 
                })}     
            </tbody>
        </table>


        <h1 id="wc">Waiting Candidates 2021</h1>
          <table className="table table-hover text-center">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Aggregate</th>
                <th scope="col">Actions</th>
                <th scope="col">Status</th>
            </thead>
            <tbody>
                  {this.state.waitingList.map((s) => {
                      return(
                      <tr>
                          <th scope="row">{s.id}</th>
                          <td>{s.name}</td>
                          <td>{s.aggregate}</td>
                          <td><button className="btn btn-danger" onClick={this.handleWaitingDelete.bind(this,s)}>Delete</button></td>
                          <td>{s.status}</td>
                      </tr>
                      ); 
                })}     
            </tbody>
        </table>



      </div>
    )
  }
}

export default AddPatients;