import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuote, updateQuote, getCategories } from "../managers/QuotesManager";

const EditQuote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quote, setQuote] = useState({ text: "", author: "", category: "" });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getQuote(id)
            .then((data) => {
                setQuote({category: data.quote_category.id, ...data});
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
            });

        getCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, [id]);

    const handleUpdateQuote = () => {
        updateQuote(id, quote)
            .then(() => {
                navigate("/profile");
            })
            .catch((error) => {
                console.error("Error updating quote:", error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuote((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };


console.log(quote)
    return (
        <div className="container edit-quote">
            <h2>Edit Quote</h2>
            <input
                type="text"
                name="text"
                value={quote.text}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="author"
                value={quote.author}
                onChange={handleInputChange}
            />
            <select name="category" value={quote?.category} onChange={handleInputChange}>
                {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.category}
                </option>
                ))}
            </select>
            <br/>
            <button onClick={handleUpdateQuote} className="button update">Update Quote</button>
        </div>
    );
};

export default EditQuote;