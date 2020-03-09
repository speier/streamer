import Nav from './nav'
import Footer from './footer'

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 w-full p-4 mx-auto md:px-16 md:py-12">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
