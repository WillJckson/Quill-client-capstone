import React, { useState, useEffect } from "react";
import { getQuotesByCurrentUser, deleteQuote } from "../managers/QuotesManager";
import { Link } from "react-router-dom";

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
        <div>
            <h1>My Quotes</h1>
            <Link to={`/quotes/create`}>Add Quote</Link>
            <ul>
                {profileQuotes.map((quote) => (
                    <li key={quote.id}>
                        {quote.text} - {quote.author}
                        {quote.quote_category && (
                            <span>Category: {quote.quote_category.category}</span>
                        )}
                        <Link to={`/quotes/update/${quote.id.toString()}`}>Edit</Link>
                        <button onClick={() => handleDelete(quote.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
