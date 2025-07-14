import React from 'react'

const CardToppings = ({emojiBg, emoji, topping}) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-lg w-[7rem] ">
        <div className="justify-items-center mt-3 mb-4">
          <div className={`${emojiBg} rounded-full p-4`}>
            <p className="text-2xl">{emoji}</p>
          </div>
          <h5 className="mt-3 font-bold text-md">{topping}</h5>
        </div>
      </div>
    </>
  );
}

export default CardToppings
