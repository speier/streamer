import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Player from '../../components/Player'
import { videos } from '../../assets/data'

function Watch() {
  const router = useRouter()
  const { id } = router.query

  const video = videos.find(v => v.id === id)

  useEffect(() => {
    if (video) return
    Router.push('/')
  })

  if (!video) {
    return null
  }

  return (
    <div className="w-screen h-screen bg-black">
      <Player sources={video.sources} title={video.title} />
    </div>
  )
}

export async function getStaticPaths() {
  // get the paths we want to pre-render
  const paths = videos.map(v => `/watch/${v.id}`)

  // we'll pre-render only these paths at build time
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps() {
  return { props: { videos } }
}

export default Watch
