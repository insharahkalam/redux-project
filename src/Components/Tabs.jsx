import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Features/searchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    const tabs = ['Photos', "Videos", 'Gifs']
    return (
        <>
            {tabs.map((elem, index) => {
                return (
                    <button onClick={() => dispatch(setActiveTabs(elem))}
                        className={`${(activeTab === elem ? 'bg-red-500' : "bg-gray-500")} border rounded-lg py-2.5 px-6 text-lg font-serif font-bold ms-5 mt-5`}
                        key={index}>{elem}
                    </button>


                )
            })}


        </>
    )
}

export default Tabs