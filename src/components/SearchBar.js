import { useState } from 'react'

function SearchBar(props) {
    let [serchTerm, setSearchTerm] = useState('')

    return ( 
        <form>
            <input type='text' placeholder='Enter a search term here' />
            <input type='submit' />
        </form>
    )
}

export default SearchBar