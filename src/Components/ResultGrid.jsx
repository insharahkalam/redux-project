import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../Api/MediaApi'
import { setQuery, setLoading, setResult, setError } from '../Redux/Features/searchSlice'
import { useEffect } from 'react'
const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, loading, result, error } = useSelector((store) => store.search)


    useEffect(() => {
        const getData = async () => {
            let data;

            if (activeTab == 'Photos') {
                let response = await fetchPhotos(query)
                data = response.results.map((items) => ({
                    id: items.id,
                    type: 'Photos',
                    title: items.alt_description,
                    thumbnail: items.urls.small,
                    src: items.urls.full

                }))
                console.log(data);
            }
            if (activeTab == 'Videos') {
                let response = await fetchVideos(query)
                data = response.videos.map((items) => ({
                    id: items.id,
                    type: 'videos',
                    title: items.user.name || 'video',
                    thumbnail: items.image,
                    src: items.video_files[0].link

                }))
                console.log(data);
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