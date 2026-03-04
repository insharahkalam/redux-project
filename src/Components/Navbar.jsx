import { Link, useLocation } from "react-router-dom"

const Navbar = ({ name, name2 }) => {

    const location = useLocation()

    return (
        <div className="flex justify-between items-center px-4 pt-4 sm:px-8 sm:pt-6">

            <h1 className="text-xl sm:text-3xl tracking-wide font-serif font-bold mb-3">
                {name}<span className="text-[#7C3BED]"> {name2}</span>
            </h1>

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
