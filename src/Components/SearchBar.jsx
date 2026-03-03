import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from '../Redux/Features/searchSlice'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState("")

    function handleSubmitted(e) {
        e.preventDefault()
        dispatch(setQuery(text))
        console.log(text);

        setText("")
    }
    return (

        <div>
            <form onSubmit={(e) => handleSubmitted(e)}>
                <input required className='border w-1/2 rounded-full outline-none px-5 py-3' value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Search anything...' />
                <button className="border rounded-xl w-1/5 py-3 cursor-pointer">Search</button>
            </form>

        </div>

    )
}

export default SearchBar