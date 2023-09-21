// Function to fetch all quotes
export const getQuotes = () => {
    return fetch("http://localhost:8000/quotes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    })
    .then(response => response.json());
}

// Function to fetch a specific quote by its ID
export const getQuote = (id) => {
    return fetch(`http://localhost:8000/quotes/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    })
    .then(response => response.json());
}

// Function to create a new quote
export const createQuote = (quoteData) => {
    return fetch("http://localhost:8000/quotes", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        },
        body: JSON.stringify(quoteData)
    });
}

// Function to update an existing quote by its ID
export const updateQuote = (id, quoteData) => {
    return fetch(`http://localhost:8000/quotes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        },
        body: JSON.stringify(quoteData)
    });
}

// Function to delete a quote by its ID
export const deleteQuote = (id) => {
    return fetch(`http://localhost:8000/quotes/${id}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    });
}

// Function to fetch quotes by the current user
export const getQuotesByCurrentUser = () => {
    return fetch(`http://localhost:8000/quotes?type=current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    })
    .then(response => response.json());
}

// Function to fetch categories
export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    })
    .then(response => response.json());
}
// export const getSingleUser = (id) =>{
//     return fetch(`http://localhost:8000/quill_user/${id}`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("ql_token")}`
//         }
//     })
//     .then(response => response.json());
// }
