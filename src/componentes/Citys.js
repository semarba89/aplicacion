import React from 'react'
import axios from 'axios'

export default class ListaPaises extends React.Component {
	state = {
		listaPaises: []
	}

	async componentDidMount() {
		const respuesta = await axios.get('http://localhost:6000/api/paises')
		this.setState({listaPaises: respuesta.data})
	}
	

	render() {
		return (
			<div className="contenedor">
		{this.state.listaPaises.map(articulo => {
			return (
				<div className="articulo">
					<h3>{articulo.contenido}</h3>
				</div>)			
		})}
		</div>
			)
		}
		}
		
	
