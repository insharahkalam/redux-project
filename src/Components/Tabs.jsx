import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Features/searchSlice'

const Tabs = () => {

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    const tabs = ['Photos', 'Videos']

    return (
        <div className="flex justify-center mt-8">
            <div className="flex rounded-full bg-gray-800 p-1 gap-1">
                {tabs.map((elem, index) => (
                    <button
                        key={index}
                        onClick={() => dispatch(setActiveTabs(elem))}
                        className={`rounded-full px-8 py-3 font-serif text-sm font-bold transition-all duration-200 capitalize
                        ${activeTab === elem
                                ? "bg-[#7C3BED] text-white shadow-md"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {elem}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
