import React, { Component } from 'react'
import AddRecette from './AddRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp }  from '../base'


export default class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    handleAuth = (authData) => {
       console.log(authData)
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.handleAuth)
    }

    render() {
    const { addRecette, example, updateRecette, recettes, deleteRecette } = this.props

    // Si utilisateur connecté 
    if (!this.state.uid) {
        return <Login authenticate={this.authenticate}></Login>
    }
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
                        deleteRecette={deleteRecette}
                    />)
                }
                <footer>
                    <button onClick={ example }>Remplir</button>
                </footer>
            </div>
        )
    }
}
