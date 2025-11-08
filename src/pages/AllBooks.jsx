import React from 'react'

const AllBook = () => {
  return (
    <div><div className="flex justify-center items-center flex-col">
        <h1 className=" mt-5 text-3xl font-medium">Collections</h1>
        <div className="flex w-full my-8 justify-center items-center">
          <input
            placeholder="Search By Title"
            className="border border-gray-200 placeholder-gray-200 p-2 md:w-1/4 w-1/2"
            type="text"
          />
          <button className="bg-blue-900 text-white py-2 px-3 shadow hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white">
            Search
          </button>
        </div>
      </div>

      <div className="md:grid grid-cols-[1fr_4fr] md:py-10 md:px-20 p-5">
        <div>
          <div className="flex my-3 justify between">
            <h1 className="text-2xl font-medium">Filters</h1>
          </div>
          <div className="md:block justify-center hidden">
            <div className="mt-3">
              <input id="literary" type="radio" name="filter" />
              <label htmlFor="literary" className="ms-3">
                Literary Fiction
              </label>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-4 w-full ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Book
              </a>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default AllBook