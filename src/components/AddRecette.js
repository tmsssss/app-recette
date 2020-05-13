import React, { Component } from 'react'

export default class AddRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(e.target.name)
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const recette = {... this.state}
        this.props.addRecette(recette)

        // Reset
        Object.keys(recette).forEach(item => {
            recette[item] = ''
        })

        this.setState({ ... recette })
    }

    render() {
        return (
            <div className="card">
                <form action="" className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleChange} type="text" name='nom' placeholder='Nom de la recette' required/>

                    <input value={this.state.image} onChange={this.handleChange} name='image' type="text" placeholder="Nom de l'image" />

                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder="Ingredients" required></textarea>
                    
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder='Instructions'required ></textarea>
                    <button type='submit'>+</button>
                </form>
            </div>
        )
    }
}
