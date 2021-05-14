import { useEffect, useState } from 'react'
import axios from 'axios'

const CONTEXT_KEY = "12ea33bd4e093765e"

const useGoogleSearch = (term) => {
    const [data, setData] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            const searchData = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )

            setData(searchData)
        }

        fetchData()
    }, [term])

    return { data }
}

export default useGoogleSearch
