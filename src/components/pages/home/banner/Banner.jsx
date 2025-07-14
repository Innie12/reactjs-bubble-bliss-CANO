import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="bg-pink-50 py-14">
        <div className="container mx-auto flex justify-between px-16">
          <div className="grid md:grid-cols-2 justify-items-center gap-10">
            <div className="text-center md:text-start mt-16">
              <h1 className="text-[2.5rem] font-bold">
                Discover the{" "}
                <span className="bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                  Joy
                </span>{" "}
                of Milk Tea
              </h1>
              <div>
                <p className="mt-3 mb-5">
                  Creamy, sweet, and refreshing our milk tea will transport you
                  to flavor paradise with every sip.
                </p>
              </div>
              <a
                href="#"
                className="btn bg-pink-500 rounded-full py-2 px-4 text-white inline-block font-bold"
              >
                Explore Flavors
              </a>
            </div>
            <div>
              <div className="relative">
                  <p className="bg-pink-200 rounded-full h-72 p-40 blur-xl"></p>
                  <p className="text-9xl absolute top-0 left-16">🧋</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Banner
