import React from 'react'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'
// import {searchData} from "../response"

import SearchResults from '../components/SearchResults'
import SearchOptions from '../components/SearchOptions'

const SearchPage = () => {
    // eslint-disable-next-line
    const[{ term }, dispatch] = useStateValue()

    const {data} = useGoogleSearch(term)

    // const data = searchData

    console.log(data);

    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <Link to="/">
                    <img 
                        className="searchpage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="google logo" 
                    />
                </Link>

                <div className="searchpage__headerBody">
                    <Search hideButtons />
                    <SearchOptions />
                </div>
            </div>
            
            {term && (
                <SearchResults 
                    data={data}
                />
            )}
        </div>
    )
}

export default SearchPage
