import React from 'react'
import axios from 'axios'




export default class ListaPaises extends React.Component {
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
			<div className="container">
						
		{this.state.listaPaises.map((city, i) => {
			return (
				



				<div className="row">
				<div className="col s12">
				  <div className="card">
					<div className="card-image">
					  <img className='responsive-image' src={city.image} />
					  <span className="card-title">{city.city}</span>
					</div>
					<div className="card-content">
					  <p>{city.country}</p>
					</div>
					<div className="card-action">
					  <a href="#">More information</a>
					</div>
				  </div>
				</div>
			  </div>)			
		})}
		</div>
			)
		}
		}