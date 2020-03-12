import { videos } from './_data'

export default (req, res) => {
  res.status(200).json(videos)
}
