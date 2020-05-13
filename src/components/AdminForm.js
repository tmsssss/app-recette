import React from 'react'

const AdminForm = ({ recettes, id: key, updateRecette }) => {
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

            <input  name='image' value={recette.image} type="text" placeholder="Nom de l'image" />

            <textarea  name="ingredients" value={recette.ingredients} rows="3" placeholder="Ingredients" required></textarea>

            <textarea name="instructions" value={recette.instructions} rows="15" placeholder='Instructions'required ></textarea>


            </form>
            <button >Supprimer</button>

        </div>
    )
}


export default AdminForm