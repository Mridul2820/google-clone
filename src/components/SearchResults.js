import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SearchResults = ({ data }) => {
    return (
        <div className="searchResult">
            <p className="searchResult__count">
                About {data.data.searchInformation.formattedTotalResults} results ({data.data.searchInformation.formattedSearchTime} seconds) 
            </p>
            {data.data.items.map(item => (
                <div key={item.cacheId} className="searchResult__item">
                    <a className="searchResult__link" href={item.link}>
                        {item.displayLink} <ArrowDropDownIcon />
                    </a>
                    <a className="searchResult__title" href={item.link}>
                        <h3>{item.title}</h3>
                    </a>
                    <p  className="searchResult__snippet">{item.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
