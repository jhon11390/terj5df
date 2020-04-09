import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      persons: [],
      nameinput: '',
      lastnameinput: '',
      number: 1
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addPerson.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.nameinput} onChange={this.updatePersonname.bind(this)}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastnameinput} onChange={this.updatePersonlastname.bind(this)}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.persons.map((person) => <tr key={person.id}><td>{person.name}</td><td>{person.lastname}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  updatePersonname(event) {
    this.setState({
      nameinput: event.target.value,
    })
  }

  updatePersonlastname(event) {
    this.setState({
      lastnameinput: event.target.value
    })
  }

  addPerson(event) {
    event.preventDefault();
    if(this.state.nameinput.length > 0 && this.state.lastnameinput.length > 0){
      this.setState({
        persons: this.state.persons.concat({id: this.state.number, name: this.state.nameinput, lastname:this.state.lastnameinput}),
        nameinput: '',
        lastnameinput: '',
        number: this.state.number + 1
      })
    }
  }
}

export default App


