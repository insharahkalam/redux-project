import { Link, useLocation } from "react-router-dom"

const Navbar = ({ name }) => {

    const location = useLocation()

    return (
        <div className="flex justify-between items-center px-4 pt-4 sm:px-8 sm:pt-6">

            <h2 className='text-xl md:text-3xl font-bold font-serif'>{name}</h2>

            <div className="flex rounded-full bg-gray-800 p-1 gap-1">

                <Link
                    to="/"
                    className={`rounded-full px-6 py-3 text-sm font-bold font-serif capitalize transition-all duration-200
                    ${location.pathname === "/"
                            ? "bg-[#7C3BED] text-white shadow-md"
                            : "text-gray-400 hover:text-white"
                        }`}
                >
                    Search
                </Link>

                <Link
                    to="/collection"
                    className={`rounded-full px-6 py-3 text-sm font-bold font-serif capitalize transition-all duration-200
                    ${location.pathname === "/collection"
                            ? "bg-[#7C3BED] text-white shadow-md"
                            : "text-gray-400 hover:text-white"
                        }`}
                >
                    Collection
                </Link>

            </div>
        </div>
    )
}

export default Navbar
