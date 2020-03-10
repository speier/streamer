import Layout from '../components/Layout'

function Latest() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
        Latest
      </h2>
      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
          Latest shows coming soon..
        </div>
      </div>
    </Layout>
  )
}

export default Latest
