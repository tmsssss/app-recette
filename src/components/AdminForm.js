import React from 'react'

const AdminForm = ({ recettes, id: key, updateRecette, deleteRecette }) => {
    const recette = recettes[key]

    const handleChange = (e) => {
        const { name, value} = e.target
        const recette = recettes[key]
        recette[name] = value
        updateRecette(key, recette)
    }

    return (
        <div className="card">

            <form action="" className="admin-form">

            <input type="text" value={recette.nom} onChange={(e) => handleChange(e, key)} name='nom' placeholder='Nom de la recette' required/>

            <input  name='image' value={recette.image} onChange={(e) => handleChange(e, key)} type="text" placeholder="Nom de l'image" />

            <textarea  name="ingredients" value={recette.ingredients} onChange={(e) => handleChange(e, key)} rows="3" placeholder="Ingredients" required></textarea>

            <textarea name="instructions" value={recette.instructions} onChange={(e) => handleChange(e, key)} rows="15" placeholder='Instructions'required ></textarea>

            </form>
            <button onClick={() => deleteRecette(key)}>Supprimer</button>

        </div>
    )
}


export default AdminForm