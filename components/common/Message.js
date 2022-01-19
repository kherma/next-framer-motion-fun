import React from "react";

const Message = ({ message }) => (
  <p className="text-xl font-normal text-center text-slate-600 md:w-4/5 lg:text-2xl xl:w-full xl:text-base 2xl:w-4/5 2xl:text-2xl">
    {message}
  </p>
);

export default Message;
