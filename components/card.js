import Link from 'next/link'
import playIcon from '../assets/play.svg'

function Card({ id, title, description, thumbnail }) {
  return (
    <div className="transition duration-700 ease-in-out transform hover:scale-125 max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="flex justify-center">
        <Link href="/watch/[id]" as={`/watch/${id}`}>
          <a>
            <img className="h-16 w-16 -mt-32 md:-mt-20 lg:-mt-20" src={playIcon} alt="Play" />
          </a>
        </Link>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
