import React, { Component } from 'react'
import axios from 'axios'

export class ListaEmpresa extends Component {    
    state = {
        empresas:[]
    };

    componentDidMount(){
        axios.get("https://localhost:44311/api/Empresa")
        .then((res) => {
            console.log(res);
            this.setState({ empresas: res.data }); 
        });
    }

    render() {
        return (
            <div>
              {this.state.empresas.map((emp) => <div><h1>{emp.id}-{emp.nome}</h1> </div>)}  
            </div>
        )
    }
}

export default ListaEmpresa
