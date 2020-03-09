import Layout from '../components/layout'
import Card from '../components/card'
import { videos } from '../assets/data'

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16">
        {videos.map((v, i) => (
          <Card key={i} {...v} />
        ))}
      </div>
    </Layout>
  )
}

export default Home
