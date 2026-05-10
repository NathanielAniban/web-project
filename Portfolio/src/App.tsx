import NavigationBar from "./components/navigation-bar"
import { Homepage } from "./components/home"
function App() {

  return (
    <>
      <NavigationBar />

      <div className="dark:bg-gray-900 dark:text-white transition duration-300 
      min-h-screen">
        <div className="container mx-auto px-4 py-8 sm:flex sm:flex-col sm:items-center sm:gap-12">
          <Homepage />
        </div>
      </div>
    </>
  )
}

export default App
