import React from "react";

const Card = () => {
  return (
    <div>
      <section class="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 py-10">
        <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
              <div
                class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
                  width="540"
                  height="303"
                  alt="Blog post"
                />
              </figure>
            </a>
            <div>
              <header>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        NFT
                      </a>
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Token
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Fugiat nulla pariatur. Excepteur sint occaecat.
                  </a>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="https://www.circle.com/hubfs/spot-icon-usdc.png"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
                <div>
                  <a
                    class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    TokenName
                  </a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 19, 2020</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Card;
