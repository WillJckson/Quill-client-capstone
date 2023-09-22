import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getQuotes } from "../managers/QuotesManager";
import "./quotes.css"
const QuotesList = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getQuotes().then((quoteData) => setQuotes(quoteData));
    }, []);

    return (
        <div>
            <h2>Explore Quotes</h2>
            <ul className="quote-list">
                {quotes.map((quote) => (
                    <li className="quote" key={quote.id}>
                        <p>{quote.text}</p>
                        <p>- {quote.author}</p>
                        <Link to={`/quotes/${quote.id}`} className="view-quote-link">View</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuotesList;
