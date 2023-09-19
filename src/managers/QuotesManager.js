export const getQuotes= () => {
    return fetch("http://localhost:8000/quotes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ql_token")}`
        }
    })
        .then(response => response.json())
}