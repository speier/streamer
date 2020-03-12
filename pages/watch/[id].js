import fetch from 'node-fetch'
import Player from '../../components/Player'

function Watch({ video }) {
  return (
    <div className="w-screen h-screen bg-black">
      <Player sources={video.sources} title={video.title} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/videos`)
  const videos = await res.json()

  // get the paths we want to pre-render
  const paths = videos.map(v => `/watch/${v.id}`)

  // we'll pre-render only these paths at build time
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const host = process.env.NODE_ENV === 'production' ? `https://streamer.now.sh` : `http://localhost:${process.env.PORT || 3000}`
  const res = await fetch(`{host}/api/videos/${params.id}`)
  const video = await res.json()

  return { props: { video } }
}

export default Watch
