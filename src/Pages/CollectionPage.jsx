import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'
const CollectionPage = () => {
    const collection = useSelector((state) => state.collection.items)
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="mx-auto max-w-6xl pb-20 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {collection.map((items, index) => {
                        return <div key={index}>
                            <CollectionCard items={items} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CollectionPage