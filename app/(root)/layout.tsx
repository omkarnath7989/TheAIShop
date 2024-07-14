import MobileNav from "@/components/shared/MobileNav"
import Sidebar from "@/components/shared/Sidebar"
import TransformationForm from "@/components/shared/TransformationForm"


const Layout = ( {children} : { children : React.ReactNode}) => {
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row">
        <Sidebar/>
        <MobileNav/>

        <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
        
    </main>
  )
}

export default Layout