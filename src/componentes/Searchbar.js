import React from 'react'
import axios from 'axios'




export default class Buscar extends React.Component {
	constructor(props) { 
		super(props); 
		 this.state = { listaPaises: [] }
		}

	async componentDidMount() {
		const respuesta = await axios.get('http://localhost:1000/api/paises')
		this.setState({listaPaises: respuesta.data.data})
		
	}
	

	render() {
		return (
			<div>
				
		{this.state.listaPaises((city, i) => {
			return (
				

				<div className="row">
				<div className="col s12">
									
                
  <nav>
    <div class="nav-wrapper">
      <form src={listaPaises}>
        <div class="input-field">
          <input id="search" type="search" required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>


				  </div>
			
			  </div>)			
		})}
		</div>
			)
		}
		}