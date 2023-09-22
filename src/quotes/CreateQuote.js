import React, { useEffect, useState } from 'react';
import { createQuote, getCategories, getQuote, getQuotes } from '../managers/QuotesManager';
import { useParams, useNavigate } from 'react-router-dom';

function CreateQuoteForm() {
    const { id } = useParams();
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [quoteCategory, setQuoteCategory] = useState('');
    const [quote, setQuote] = useState({ text: "", author: "", category: "" });
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getQuotes()
            .then((data) => {
                setQuote(data);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
            });

        getCategories()
            .then((data) => {
                console.log('Categories:', data); // Log the fetched categories
                setCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, [id]);

    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const quoteData = {
            text: quoteText,
            author: quoteAuthor,
            category: quoteCategory
        };
    
        createQuote(quoteData)
            .then(response => response.json())
            .then(data => {
                console.log('Quote created:', data);
                // Handle success, e.g., display a success message or redirect to another page

                // Navigate back to the profile page after creating the quote
                navigate('/profile'); 
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Input changed:', name, value); // Log the changed input
    
        if (name === "category") {
            // Convert the selected value to an integer and set it as the category ID
            setQuoteCategory(parseInt(value));
        } else {
            // For other input fields, update them as usual
            setQuote((prevQuote) => {
                const updatedQuote = { ...prevQuote, [name]: value };
                return updatedQuote;
            });
        }
    };

    return (
        <div className="container create-quote">
        <h2>New Quote</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="quote-text">Quote Text:</label>
            <input
                type="text"
                id="quote-text"
                name="quote-text"
                value={quoteText}
                onChange={event => setQuoteText(event.target.value)}
                required
            />

            <label htmlFor="quote-author">Author:</label>
            <input
                type="text"
                id="quote-author"
                name="quote-author"
                value={quoteAuthor}
                onChange={event => setQuoteAuthor(event.target.value)}
                required
            />

            <label htmlFor="quote-category">Category:</label>
            <select
                name="category"
                value={quoteCategory} // Use quoteCategory here, not quote.category
                onChange={handleInputChange}
            >
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.category}
                    </option>
                ))}
            </select>
            <br/>
            <button type="submit" className="button create">Create Quote</button>
        </form>
        </div>
    );
}

export default CreateQuoteForm;




