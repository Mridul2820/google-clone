import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'

const SearchPage = () => {
    const[{ term }, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    console.log(data);

    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchpage__results">

            </div>
        </div>
    )
}

export default SearchPage
