import { useEffect, useState } from "react";
import FormRecipe from "./FormRecipe";
import RecipesService from "../services/recipes.service";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllRecipes()
    }, [])

    const fetchAllRecipes = async () => {
        setLoading(false)
        try {
            const data = await RecipesService.getAll()
            setRecipes(data)
            setLoading(true)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }
    }

    const handleDelete = async (id) => {
        try {
            await RecipesService.remove(id)
            fetchAllRecipes()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <FormRecipe fetchAllRecipes={fetchAllRecipes} />

            <h1>Recipes List</h1>

            {!loading && <p>Loading...</p>}
        
            {loading && (
                <ul>
                    {recipes.length <= 0 && <p>Aucune recette pour le moment</p>}
                    {recipes.map((recipe, index) => (
                        <li key={recipe._id}>
                            <FormRecipe recipe={recipe} index={index} />
                            <button onClick={() => handleDelete(recipe._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
     );
}
 
export default RecipesList;