import ResultGrid from './Components/ResultGrid'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'

const App = () => {

  return (


    <div className='bg-gray-950 h-screen w-full text-white'>
      <SearchBar />

      <Tabs />

      <ResultGrid />


    </div>

  )
}

export default App