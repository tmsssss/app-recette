import React, { Component } from 'react'
import AddRecette from './AddRecette'
import AdminForm from './AdminForm'


export default class Admin extends Component {
    render() {
    const { addRecette, example, updateRecette, recettes } = this.props
        return (
            <div className="cards">
                <AddRecette addRecette={ addRecette } />
                {
                    Object.keys(recettes)
                    .map(key =>  <AdminForm 
                        key={key}
                        id={key}
                        updateRecette={updateRecette}
                        recettes={recettes}
                    />)
                }
                <footer>
                    <button onClick={ example }>Remplir</button>
                </footer>
            </div>
        )
    }
}