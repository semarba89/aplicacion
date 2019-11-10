import React from 'react'
import axios from 'axios'

export default class ListaPaises extends React.Component {
	state = {
		listaPaises: []
	}

	async componentDidMount() {
		const respuesta = await axios.get('http://localhost:1000/api/paises')
		this.setState({listaPaises: respuesta.data})
	}
	

	render() {
		return (
			<div class="responsive-table">
				
		{this.state.listaPaises.map(articulo => {
			return (
				<div className="responsive-table">
					<h3>{articulo.contenido}</h3>
				</div>)			
		})}
		</div>
	
	
			)
		}
		}
		
	
