import { useEffect, useState } from "react";
import FormRecipe from "./FormRecipe";
import RecipesService from "../services/recipes.service";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchAllRecipes()
    }, [])

    const fetchAllRecipes = async () => {
        try {
            const data = await RecipesService.getAll()
            setRecipes(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
        console.log("delete", id);
        // fetch delete request
        fetch(`http://localhost:8000/recipes/${id}`, {
            method: "DELETE"
        }).then((res) => res.json())
            .then(() => fetchAllRecipes())
    }

    return ( 
        <div>
            <FormRecipe fetchAllRecipes={fetchAllRecipes} />

            <h1>Recipes List</h1>
        
            <ul>
                {recipes.length <= 0 && <p>Aucune recette pour le moment</p>}
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        {recipe.title}
                        <button onClick={() => handleDelete(recipe._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default RecipesList;