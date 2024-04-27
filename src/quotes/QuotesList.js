import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getQuotes } from "../managers/QuotesManager";
import SearchBar from "../components/search/SearchBar";
import "./quotes.css";

const QuotesList = () => {
    const [quotes, setQuotes] = useState([]);
    const [filteredQuotes, setFilteredQuotes] = useState([]);

    useEffect(() => {
        getQuotes().then((quoteData) => {
            setQuotes(quoteData);
            setFilteredQuotes(quoteData); // Initialize filteredQuotes with all quotes
        });
    }, []);

    const handleFilterQuotes = (filteredData) => {
        setFilteredQuotes(filteredData);
    };

    return (
        <div>
            <SearchBar placeholder="Search Quotes..." data={quotes} onFilter={handleFilterQuotes} />
            <h2>Explore Quotes</h2>
            <ul className="quote-list">
                {filteredQuotes.map((quote) => (
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
