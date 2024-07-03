import React from "react";

const Form = ({ handleChange, todo, addTask }) => {
  return (
    <form action="" onSubmit={addTask}>
      <input
        value={todo}
        type="text"
        name=""
        id="taskName"
        placeholder="Write a task ..."
        className="w-full p-3 mb-5 text-black border-2 border-black rounded-lg placeholder:text-gray-500"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-8 py-4 mb-5 text-white rounded-lg hover:bg-sky-800 bg-sky-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export { Form };
