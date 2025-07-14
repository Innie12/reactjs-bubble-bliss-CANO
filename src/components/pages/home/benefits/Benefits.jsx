import React from 'react'
import CardBenefits from '../../../partials/CardBenefits';

const Benefits = () => {
  return (
    <>
      <section
        id="benefits"
        className="w-full py-16
      xl:pt-[4.5rem] xl:pb-[3.6rem]"
      >
        <div className="max-w-[98.5rem] mx-auto px-4 ">
          <div
            className="justify-items-center text-center
            md:grid md:grid-cols-[2fr_1fr] md:justify-items-start"
          >
            <div className="wrapper ">
              <h2
                className="font-bold text-3xl mb-6
                md:text-left"
              >
                Why{" "}
                <span className="bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                  Milk Tea
                </span>{" "}
                is Good For You
              </h2>
              <CardBenefits
                bg={"bg-pink-100"}
                color={"text-pink-500"}
                title={"Antioxidant Rich"}
                description={
                  "Tea contains polyphenols that help fight free radicals."
                }
              />
              <CardBenefits
                bg={"bg-purple-100"}
                color={"text-purple-500"}
                title={"Energy Boost"}
                description={
                  "Natural caffeince provides a gentle lift without coffee jitters."
                }
              />
              <CardBenefits
                bg={"bg-yellow-100"}
                color={"text-yellow-500"}
                title={"Mood Enhancer"}
                description={
                  "The comforting warmth and sweetness can brighten your day."
                }
              />
            </div>
            <div
              className="group mt-10 px-10 py-16 bg-gradient-to-br from-pink-100 to-purple-100 shadow-md rounded-xl w-64 hover:from-purple-100 hover:to-pink-100 transition-all duration-300
              md:mt-0"
            >
              <p className="text-6xl mb-4">
                💖
              </p>
              <p>"A cup of milk tea a day keeps the stress away!"</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits
