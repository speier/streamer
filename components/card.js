import Link from 'next/link'
import playIcon from '../public/play.svg'

function Card({ id, title, description, thumbnail }) {
  return (
    <div className="transition duration-700 ease-in-out transform hover:scale-110 max-w-sm rounded overflow-hidden shadow-lg">
      <Link href="/watch/[id]" as={`/watch/${id}`}>
        <a>
          <div className="flex items-center justify-center">
            <img className="w-full" src={thumbnail} alt={title} />
            <div className="absolute">
              <img className="w-16 h-16" src={playIcon} alt="Play" />
            </div>
          </div>
        </a>
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
