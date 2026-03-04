import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from '../Redux/Features/searchSlice'
import { Search } from "lucide-react";

const SearchBar = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState("")

    function handleSubmitted(e) {
        e.preventDefault()
        dispatch(setQuery(text))
        setText("")
    }

    return (
        <div className="flex justify-center w-full">
            <form
                onSubmit={handleSubmitted}
                className="flex w-full max-w-xl gap-2"
            >
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                    <input
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Search media..."
                        className="w-full rounded-full bg-gray-800 border border-gray-700 
                        pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 
                        transition-all"
                    />
                </div>

                <button
                    className="rounded-full bg-[#7C3BED] font-serif px-8 py-3 text-sm 
                    font-bold text-white hover:brightness-110 
                    transition-all active:scale-95"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
