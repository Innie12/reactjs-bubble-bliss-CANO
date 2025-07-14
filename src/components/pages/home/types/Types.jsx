import React from "react";
import CardTypes from "../../../partials/CardTypes";

const Types = () => {
  return (
    <>
      <section id="types"
       className="bg-white py-14">
        <div className="container mx-auto px-16">
          <h2 className="text-2xl font-bold text-center">
            Popular{" "}
            <span className="bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
              Milk Tea
            </span>{" "}
            Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-5">
            {/* cards */}
            <CardTypes
              emojiBg={"bg-pink-400/30"}
              emoji={"🥛"}
              flavor={"Classic Milk Tea"}
              description={
                "The original blend of black tea, milk, and sweetness that started it all."
              }
            />
            <CardTypes
              emojiBg={"bg-purple-200"}
              emoji={"🍯"}
              flavor={"Honeydew Milk Tea"}
              description={
                "Refreshing melon flavor combined with creamy milk for a summer favorite."
              }
            />
            <CardTypes
              emojiBg={"bg-yellow-100"}
              emoji={"🍵"}
              flavor={"Matcha Milk Tea"}
              description={
                "Earthy green tea powder blended with milk for an antioxidant boost."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Types;
