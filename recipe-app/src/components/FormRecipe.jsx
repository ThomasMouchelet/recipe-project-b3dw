import { useState } from "react";
import RecipesService from "../services/recipes.service";
import { toast } from 'react-toastify';

const FormRecipe = ({fetchAllRecipes, recipe}) => {
    const [credentials, setCredentials] = useState(recipe)

    const handleChange = (e) => {
        const {value, name} = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(recipe) {
                await RecipesService.update(recipe._id, credentials)
                toast.success('Recette mise à jour')
            } else {
                await RecipesService.create(credentials)
                fetchAllRecipes()
                toast.success('Recette créée')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={credentials?.title} name="title" onChange={handleChange} />
            <input type="submit" value={recipe ? "Mettre à jour" : "Ajouter"} />
        </form>
     );
}
 
export default FormRecipe;