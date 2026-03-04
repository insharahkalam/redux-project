import { useDispatch } from "react-redux";
import { addCollection, addTost } from "../Redux/Features/collectionSlice";


const ResultCard = ({ items }) => {

    const dispatch = useDispatch()

    const addToCollection = (items) => {
        console.log(items);
        dispatch(addCollection(items))
        dispatch(addTost())
    }


    return (
        <section className="relative rounded-xl overflow-hidden bg-gray-900 
        hover:shadow-sm shadow-[#7C3BED] hover:scale-103 transition-all duration-300">

            <a target="_blank" href={items.urls} className="block h-80">

                {items.type === 'Photos' && (
                    <img
                        className="h-full w-full object-cover"
                        src={items.src}
                        alt=""
                    />
                )}

                {items.type === 'Videos' && (
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        src={items.src}
                    />
                )}
            </a>
            <div id="bottom" className="absolute flex justify-between items-center bottom-0 w-full 
                 p-4">
                <h1 className="text-xs line-clamp-1 font-serif text-white font-semibold capitalize">
                    {items.title}
                </h1>
                <button
                    onClick={() => {
                        addToCollection(items)
                    }}
                    className="border rounded-lg px-4 cursor-pointer py-1">
                    Save
                </button>
            </div>


        </section>
    )
}

export default ResultCard
