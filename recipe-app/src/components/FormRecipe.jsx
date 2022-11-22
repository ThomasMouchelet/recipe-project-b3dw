import { useState } from "react";

const FormRecipe = ({fetchAllRecipes}) => {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        const {value, name} = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then((res) => res.json())
            .then((data) => fetchAllRecipes())

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="text" placeholder="time" name="time" onChange={handleChange} />
            <input type="submit" value="Ajouter" />
        </form>
     );
}
 
export default FormRecipe;