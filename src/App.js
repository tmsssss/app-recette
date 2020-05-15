import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// CSS
import './App.css'

import { Header } from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

const App = ({ handleExample, updateRecette, deleteRecette, addRecette, recettes, pseudo }) => {
  const cards = Object.keys(recettes).map(key => <Card key={key} details={recettes[key]}></Card>)
  return (
    <div className="box">
      <Header pseudo={ pseudo }/>
      <div className="cards">
        { cards }
      </div>
      <Admin 
      pseudo={ pseudo }
      deleteRecette={deleteRecette}
      recettes = {recettes}
      updateRecette={updateRecette}
      addRecette = {addRecette}
      example={handleExample} />
    </div> 
  )
}

const WrappedComponent = withFirebase(App)

export default withRouter(WrappedComponent)
