import React, { Component } from 'react'
import AddRecette from './AddRecette'

export default class Admin extends Component {
    render() {
        return (
            <div className="cards">
                <AddRecette addRecette={this.props.addRecette} />
                <footer>
                    <button onClick={this.props.example}>Remplir</button>
                </footer>
            </div>
        )
    }
}
