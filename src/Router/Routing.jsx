import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import CollectionPage from "../Pages/CollectionPage"

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<HomePage />} />
                    <Route path="collection" element={<CollectionPage />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing