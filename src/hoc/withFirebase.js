import React, { Component } from 'react'

import base from '../base'
import recettes from '../recettes'



const withFirebase = (WrappedComponent) => (
    class HOC extends Component {
        state = {
            pseudo: this.props.match.params.pseudo,
            recettes: {}
        }

        componentDidMount() {
            this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
              context: this,
              state: 'recettes'
            } )
          }
        
          componentWillUnmount() {
            base.removeBinding(this.ref)
          }
        
          addRecette = (recette) => {
            const recettes = {...this.state.recettes}
            recettes[`recette-${Date.now()}`] = recette
            this.setState({ recettes })
          }
        
          updateRecette = (key, newRecette) => {
            const recettes = {...this.state.recettes}
            recettes[key] = newRecette
            this.setState({ recettes })
          }
        
          deleteRecette = (key) => {
            const recettes = {...this.state.recettes}
            recettes[key] = null
            this.setState({ recettes })
          }
          
          handleExample = () => { this.setState({ recettes })  }
        
        render() {
            return (
                <WrappedComponent
                pseudo={this.state.pseudo}
                recettes = {this.state.recettes}
                deleteRecette = {this.deleteRecette}
                updateRecette = {this.updateRecette}
                addRecette = {this.addRecette}
                handleExample = {this.handleExample}
                
                />
            );
        }
    }
)




export default withFirebase
