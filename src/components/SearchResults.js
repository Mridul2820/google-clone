import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SearchResults = ({ data }) => {
    return (
        <div className="searchResult">
            <p className="searchResult__count">
                About {data.data.searchInformation.formattedTotalResults} results ({data.data.searchInformation.formattedSearchTime} seconds) 
            </p>
            {data.data.items.map(item => (
                <div className="searchResult__items">
                    <a href={item.link}>
                        {item.displayLink} <ArrowDropDownIcon />
                    </a>
                    <a  className="searchResult__title" href={item.link}>
                        <h2>{item.title}</h2>
                    </a>
                    <p  className="searchResult__snippet">{item.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
