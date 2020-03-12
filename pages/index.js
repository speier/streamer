// import fetch from 'node-fetch'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { videos } from './api/videos/_data'

function Home({ videos }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {videos.map((v, i) => (
          <Card key={i} {...v} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // const res = await fetch(`http://localhost:3000/api/videos`)
  // const videos = await res.json()

  return { props: { videos } }
}

export default Home
