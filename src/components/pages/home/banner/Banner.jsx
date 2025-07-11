import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="bg-pink-50 py-20">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-2">
            <div className=" mt-16">
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
            <div className="text-8xl">
              <p>🧋</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
