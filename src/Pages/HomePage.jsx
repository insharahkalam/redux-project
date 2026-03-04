import ResultGrid from '../Components/ResultGrid'
import SearchBar from '../Components/SearchBar'
import Tabs from '../Components/Tabs'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />
            <div className="flex flex-col items-center pt-15 px-4">

                <h1 className="text-6xl tracking-wide font-serif font-bold mb-3">
                    Media<span className="text-[#7C3BED]">Flow</span>
                </h1>

                <p className="text-gray-400 font-serif text-lg mb-10">
                    Discover stunning photos & videos
                </p>
                <SearchBar />

                {query != '' ? <div>
                    <Tabs />
                    <ResultGrid />

                </div> : ''}
            </div>


        </div>

    )
}

export default HomePage