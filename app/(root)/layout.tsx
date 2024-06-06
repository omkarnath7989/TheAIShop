import MobileNav from "@/components/shared/MobileNav"
import Sidebar from "@/components/shared/Sidebar"


const Layout = ( {children} : { children : React.ReactNode}) => {
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row">
        <Sidebar/>
        <MobileNav/>

        
    </main>
  )
}

export default Layout