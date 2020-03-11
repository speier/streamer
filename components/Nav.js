import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '../public/movie-camera.svg'

function HeaderLink({ href, title }) {
  const router = useRouter()

  let className = (router.pathname == href)
    ? 'ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
    : 'ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'

  return (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  )
}

function Nav() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img className="h-8 w-8" src={logo} alt="Logo" />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <HeaderLink href="/" title="Home" />
                  <HeaderLink href="/shows" title="Shows" />
                  <HeaderLink href="/latest" title="Latest" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
