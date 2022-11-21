import { useEffect, useState } from "react";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [])

    const handleDelete = (id) => {
        console.log("delete", id);
        // fetch delete request
    }

    return ( 
        <div>
            <h1>Recipes List</h1>

            <ul>
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