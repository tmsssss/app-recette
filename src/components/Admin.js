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

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.handleAuth({user})
            }
        })
    }
    

    handleAuth = async (authData) => {
        const box = await base.fetch(this.props.pseudo , { context: this })

       if (!box.chef) {
           await base.post(`${this.props.pseudo}/chef`, {
               data: authData.user.uid
           })
       }

       this.setState({
           uid: authData.user.uid,
           chef: box.chef || authData.user.uid
       })
    }

    authenticate = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().languageCode = 'fr_FR'
        provider.setCustomParameters({
            'display': 'popup'
          })
        firebase.auth().signInWithPopup(provider).then(this.handleAuth)

    }

    logout = async () => {
        await firebase.auth().signOut()
        this.setState({uid: null})

    }
    
    render() {
    const { addRecette, example, updateRecette, recettes, deleteRecette } = this.props
    const logout = <button onClick={this.logout}>Deconnexion</button>


    // Si utilisateur connecté 
    if (!this.state.uid) {
        return <Login authenticate={this.authenticate} handleAuth={this.handleAuth}></Login>
    }

    if (this.state.uid !== this.state.chef) {
        return(
            <div>
                <p>Tu n'es pas le chef</p>
                {logout}
            </div>
        )
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
                    {logout}
                    <button onClick={ example }>Remplir</button>
                </footer>
            </div>
        )
    }
}
