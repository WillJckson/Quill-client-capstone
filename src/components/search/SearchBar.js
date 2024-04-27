import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ placeholder, data, onFilter }) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value.toLowerCase();
        const newFilter = data.filter((value) =>
            value.text.toLowerCase().includes(searchWord) ||
            value.author.toLowerCase().includes(searchWord)
        );

        setFilteredData(newFilter);
        onFilter(newFilter); // Call the callback function to pass filtered data to parent component

        // Check if search input is empty, and if so, clear the filter
        if (searchWord.trim() === '') {
            clearFilter();
        }
    };

    const clearFilter = () => {
        setFilteredData([]);
        onFilter(data); // Reset filtered data to original list when search field is cleared
    };

    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon"></div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => (
                        <div key={key}>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
