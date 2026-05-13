import NavigationBar from "./components/navigation-bar"
import { Homepage } from "./components/home"
import Footer from "./components/footer"
function App() {

  return (
    <>
      <NavigationBar />
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white transition duration-300 
      min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
          <Homepage />
        </div>
        <div className="max-w-8xl mx-auto px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
          <Footer />  
        </div>
      </div>
    </>
  )
}

export default App
