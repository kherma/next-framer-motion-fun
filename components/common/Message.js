import React from "react";

const Message = ({ message }) => (
  <p className="text-xl font-normal text-center text-slate-600 md:w-4/5 lg:text-2xl">
    {message}
  </p>
);

export default Message;
