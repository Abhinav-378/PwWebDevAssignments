import React from "react";

function Card({user}) {
  return (
    <div key={user.id} className="relative h-72 w-72">
      <img
        src={user.profile}
        alt={`${user.user}'s avatar`}
        className="h-72 w-72 rounded-xl"
      />
      <p className="bg-white text-black absolute bottom-2 left-2 p-1 rounded-lg">
        {user.user}
      </p>
    </div>
  );
}

export default Card;
