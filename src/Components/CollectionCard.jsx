import React from 'react'
import { removeCollection, removeTost } from '../Redux/Features/collectionSlice'
import { useDispatch } from 'react-redux'

const CollectionCard = ({ items }) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeTost())
    }

    return (
        <section className="relative rounded-xl overflow-hidden bg-gray-900 
        shadow-lg hover:scale-105 transition-all duration-300">

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
                        removeFromCollection(items)
                    }}
                    className="border rounded-lg px-4 cursor-pointer py-1">
                    Remove
                </button>
            </div>


        </section>
    )
}

export default CollectionCard