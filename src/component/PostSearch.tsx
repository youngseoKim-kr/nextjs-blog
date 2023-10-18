"use client";
import { FaSearch } from "react-icons/fa";

export default function PostSearch(filterPost: (title: string) => void) {
  return (
    <section className="flex justify-end my-6 mr-16">
      <input
        className="border-b-2 border-solid border-black outline-none hover:border-blue-900 focus:border-blue-900"
        onChange={filterPost}
      />
      <FaSearch
        className="ml-2 mt-1 hover:text-lg cursor-pointer"
        onClick={filterPost}
      />
    </section>
  );
}
