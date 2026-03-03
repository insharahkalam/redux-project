import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../Api/MediaApi'
import { setLoading, setResult, setError } from '../Redux/Features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, loading, result, error } = useSelector((store) => store.search)

    useEffect(() => {

        const getData = async () => {
            try {
                if (!query) return

                dispatch(setLoading())
                let data = []

                if (activeTab === 'Photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((items) => ({
                        id: items.id,
                        type: 'Photos',
                        title: items.alt_description,
                        thumbnail: items.urls.small,
                        src: items.urls.full,
                        urls: items.links.html
                    }))
                }

                if (activeTab === 'Videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((items) => ({
                        id: items.id,
                        type: 'Videos',
                        title: items.user.name || 'video',
                        thumbnail: items.image,
                        src: items.video_files[0].link,
                        urls: items.url
                    }))
                }

                dispatch(setResult(data))

            } catch (error) {
                dispatch(setError(error.message))
            }
        }

        getData()

    }, [query, activeTab])

    if (error) return <h1 className="text-center text-red-500">Error</h1>
    if (loading) return <h1 className="text-center mx-auto my-10 loader text-white"></h1>

    return (
        <div className="mx-auto max-w-6xl px-4 pb-20 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {result.map((items, indx) => (
                    <ResultCard key={indx} items={items} />
                ))}
            </div>
        </div>
    )
}

export default ResultGrid
