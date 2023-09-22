import React, { useState, useEffect } from "react";
import { getQuotesByCurrentUser, deleteQuote } from "../managers/QuotesManager";
import { Link } from "react-router-dom";
import './Profile.css'
const Profile = () => {
    const [profileQuotes, setProfileQuotes] = useState([]);

    useEffect(() => {
        getQuotesByCurrentUser().then((data) => {
            setProfileQuotes(data);
        });
    }, []);

    const handleDelete = (quoteId) => {
        deleteQuote(quoteId)
            .then(() => {
                setProfileQuotes((prevQuotes) =>
                    prevQuotes.filter((quote) => quote.id !== quoteId)
                );
            })
            .catch((error) => {
                console.error("Error deleting quote:", error);
            });
    };

    return (
        <div className="container">
            <h1>My Quotes</h1>
            <Link to={`/quotes/create`} className="button">Add Quote</Link>
            <ul>
                {profileQuotes.map((quote) => (
                    <li key={quote.id}>
                        <p>{quote.text} - {quote.author}</p>
                        {quote.quote_category && (
                            <p>Category: {quote.quote_category.category}</p>
                        )}
                        <Link to={`/quotes/update/${quote.id.toString()}`} className="button">Edit</Link>
                        <button onClick={() => handleDelete(quote.id)} className="button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
