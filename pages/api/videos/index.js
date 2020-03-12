import { videos } from '../data'

export default (req, res) => {
  res.status(200).json(videos)
}
