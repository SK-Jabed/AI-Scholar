import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"


const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {/* Main Content */}
        {children}
        <Footer />
    </div>
  )
}

export default layout