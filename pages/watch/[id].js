import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Player from '../../components/player'
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

  const videoOptions = {
    autoplay: true,
    controls: true,
    preload: 'auto',
    fill: true,
    userActions: {
      hotkeys: true
    },
    sources: video.sources
  }

  return (
    <div className="w-screen h-screen bg-black">
      <Player videoOptions={videoOptions} title={video.title} />
    </div>
  )
}

Watch.getInitialProps = async ctx => {
  return videos
}

export default Watch
