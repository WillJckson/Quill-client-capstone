import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuote } from "../managers/QuotesManager";

const QuoteDetail = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState(null);
    const [userName, setUserName] = useState(""); // To store the user's name

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const quoteData = await getQuote(id);
                setQuote(quoteData);

                // Fetch the user's name
                setUserName(quoteData?.user?.username || "Unknown User");
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };

        fetchQuote();
    }, [id]);

    return (
        <div>
            <h2>Quote Details</h2>
            {quote ? (
                <>
                    <p>{quote.text}</p>
                    <p>- {quote.author}</p>
                    <p>Added by: {quote.quill_user.full_name}</p>
                    <p>Category: {quote.quote_category.category || 'No Category'}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default QuoteDetail;






// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getQuote } from "../managers/QuotesManager";

// const QuoteDetail = ({ user }) => {
//     const { id } = useParams();
//     const [quote, setQuote] = useState(null);

//     useEffect(() => {
//         getQuote(id).then((quoteData) => setQuote(quoteData));
//     }, [id]);

//     return (
//         <div>
//             <h2>Quote Details</h2>
//             {quote ? (
//                 <>
//                     <p>{quote.text}</p>
//                     <p>- {quote.author}</p>
//                     <p>Created by: {quote.user.username}</p>
//                     <p>Category: {quote.categories}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default QuoteDetail;
