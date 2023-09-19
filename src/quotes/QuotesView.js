import { useState, useEffect } from "react";
import { getQuotes } from "../managers/QuotesManager";

const QuotesView = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
    getQuotes().then(quoteData => setQuotes(quoteData))
}, [])


    return (
        <div>
            <h2>Quotes</h2>
            <ul>
                {quotes.map((quote) => (
                    <li key={quote.id}>
                        <p>{quote.text}</p>
                        <p>- {quote.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuotesView;