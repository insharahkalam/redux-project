import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../Api/MediaApi'
import { setQuery, setLoading, setResult, setError } from '../Redux/Features/searchSlice'
import { useEffect } from 'react'
const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, loading, result, error } = useSelector((store) => store.search)


    useEffect(() => {
        const getData = async () => {
            let data
            if (activeTab == 'Photos') {
                data = await fetchPhotos(query)
                console.log(data);

                if (activeTab == 'Videos') {
                    data = await fetchVideos(query)
                    console.log(data);

                }
            }

        }

        getData()
    }, [query, activeTab])

    return (
        <>
           
        </>
    )

}

export default ResultGrid