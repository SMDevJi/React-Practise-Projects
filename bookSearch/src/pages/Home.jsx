import React from 'react'
import { useSelector } from 'react-redux'
import { STATUSES } from '../redux/searchSlice'
import Loader from '../components/Loading'
import NoCover from '../assets/cover_not_found.jpg'
import { Link } from 'react-router-dom'

function Home() {
  const currentSearchState = useSelector((state) => state.search)

  if (currentSearchState.status === STATUSES.ERROR) {
    console.log(currentSearchState.error)
    return (
      <div className="flex justify-center p-6 text-red-600">
        Something went wrong
      </div>
    )
  }

  if (currentSearchState.status === STATUSES.LOADING) {
    return <Loader />
  }

  return (
    <>
      {currentSearchState.results?.docs && (
        <div className="px-6 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            YOUR SEARCH RESULT
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentSearchState.results.docs.map((item) => (
              <div
                key={item.key}
                className="bg-white shadow-lg overflow-hidden transition hover:shadow-xl"
              >
                {/* Reduced height here from h-64 to h-48 */}
                <div className="w-full h-48 bg-white flex items-center justify-center">
                  <img
                    src={
                      item.cover_i
                        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
                        : NoCover
                    }
                    alt="cover"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3 text-center">
                  <Link
                    to={`/book/${item.key.split('/').pop()}`}
                    className="block text-base font-semibold hover:underline mb-1"
                  >
                    {item.title || 'Unknown Title'}
                  </Link>
                  <p className="text-xs">
                    <span className="font-bold">Author:</span>{' '}
                    {item.author_name?.join(', ') || 'Unknown Author'}
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Total Editions:</span>{' '}
                    {item.edition_count || 'N/A'}
                  </p>
                  <p className="text-xs italic">
                    <span className="font-bold">First Publish Year:</span>{' '}
                    {item.first_publish_year || 'N/A'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
