import { videos } from './_data'

export default ({ query: { id } }, res) => {
  const video = videos.find(v => v.id === id)

  if (video) {
    res.status(200).json(video)
  } else {
    res.status(404).json({ message: `video with id: ${id} not found.` })
  }
}
