import React from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'
import { clearCollection } from '../Redux/Features/collectionSlice'
import { Link } from 'react-router-dom'
const CollectionPage = () => {
    const collection = useSelector((state) => state.collection.items)
    const dispatch = useDispatch()
    return (
        <div className="min-h-screen bg-black text-white">


            {collection.length > 0 ?
                <>
                    <Navbar name='Your Collection' />
                    <div className='flex justify-end'>
                        <button
                            onClick={() => dispatch(clearCollection())}
                            className='rounded-full px-4 py-3.5 my-8 mx-8 bg-red-700 cursor-pointer hover:bg-red-800 text-white  text-xs font-bold font-serif capitalize hover:scale-105 transition-all duration-200'>
                            Clear Collection
                        </button>
                    </div>
                </> :
                <div className='flex flex-col justify-center items-center h-screen'>
                    <h2 className='text-3xl sm:text-5xl text-center font-serif capitalize font-bold'>Collection is empty</h2>
                    <Link to={'/'}><button className='rounded-full px-6 py-3.5 my-8 mx-8 bg-[#7C3BED] cursor-pointer text-white  text-sm font-bold font-serif capitalize hover:scale-105 transition-all duration-200'>Back To Home</button></Link>
                </div>}


            <div className="mx-auto max-w-6xl pb-20 ">

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