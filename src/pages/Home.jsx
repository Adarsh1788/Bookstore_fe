import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center flex justify-center p-3 w-full bg-gray-900 text-white">
        <ul className="text-xl">
          <a href="" className="mx-5 mt-4">
            Home
          </a>
          <a href="" className="mx-5 mt-4">
            Books
          </a>
          <a href="" className="mx-5 mt-4">
            Carrers
          </a>
          <a href="" className="mx-5 mt-4">
            Contact
          </a>

          <Link to={"/register"}>Login</Link>
        </ul>
      </div>
      <header className=" flex justify-center items-center">
        <div className="text-center">
          <div className="text-white align items-center">
            <h1 className="mt-5 text-5xl">WonderFul Gifts</h1>
            <h4 className=" text-xl">Give Your Family And Freinds</h4>
            <input
              placeholder="Search books"
              className="py-2 px-4 bg-white rounded-3xl placeholder-gray-400 w-sm mt-10"
              type="text"
            />
          </div>
        </div>
      </header>
      <div className="text-center">
        <h1 className="text-2xl">New Arrivals</h1>
        <h3 className="text-3xl">Explore Our Latest Collections</h3>
      </div>
      <div className="px-50 mt-20">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="/docs/images/products/apple-watch.png"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          type="button"
          class="text-white hover:text-blue-600 bg-blue-700 hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore Moree
        </button>
      </div>
      <section className=" mt-10">
        <div className="flex">
          <div className="text-center ms-30 me-20">
            <h1 className="">FEATURED AUTHORS</h1>
            <h3 className="text-2xl text-center">Captivates with every word</h3>
            <p className="text-justify mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laboriosam culpa ratione atque tenetur possimus rem id animi
              accusamus, aperiam, quod voluptatibus dolore reprehenderit dolorem
              nihil. Repellat provident suscipit animi?
            </p>
            <p className="text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ipsa necessitatibus commodi quisquam blanditiis
              voluptatem eveniet modi excepturi officiis exercitationem, magnam,
              consequatur nemo neque nesciunt expedita, iste porro odio placeat?
            </p>
          </div>
          <div className="me-40 mt-10">
            <img
              src=" https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h1 className="mt-10">TESTIMONIALS</h1>
          <h3 className="text-2xl mt-2">See What Others Are Saying</h3>
          <div className="text-center ms-135">
            <img
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="mt-5 circle-img"
            />
          </div>
          <h1 className="text-center mt-5">Tressa Joseph</h1>
          <p className="text-justify mx-40 mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eius,
            reiciendis nam, debitis amet iste error harum cum voluptas fugit
            voluptates veniam quos aliquid! Eaque quam itaque quidem perferendis
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus placeat facere suscipit dolore, expedita numquam commodi
            aliquid sed, accusantium neque eaque beatae maxime quis in! Nesciunt
            impedit cumque dolorem optio?
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
