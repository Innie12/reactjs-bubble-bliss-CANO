import React from 'react'
import CardToppings from '../../../partials/CardToppings';

const Toppings = () => {
  return (
    <>
      <section id="topppings"
      className="bg-pink-50 py-14 ">
        <div className="max-w-[98.5rem] mx-auto px-4 justify-items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold ">
              Delicious{" "}
              <span className="bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                Toppings
              </span>
            </h2>
            <p className="mt-3 mb-5 ">
              Customize your milk tea with these tasty additions that add
              texture and flavor.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 ">
            <CardToppings
              emojiBg={"bg-pink-100"}
              emoji={"🟤"}
              topping={"Boba Pearl"}
            />
            <CardToppings
              emojiBg={"bg-yellow-100"}
              emoji={"🍮"}
              topping={"Pudding"}
            />
            <CardToppings
              emojiBg={"bg-pink-200"}
              emoji={"🧊"}
              topping={"Jelly"}
            />
            <CardToppings
              emojiBg={"bg-green-100"}
              emoji={"🥥"}
              topping={"Coconut"}
            />
            <CardToppings
              emojiBg={"bg-blue-100"}
              emoji={"🧈"}
              topping={"Cheese Foam"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Toppings
