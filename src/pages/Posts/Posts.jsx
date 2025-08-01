import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { data, loading, error } = useFetch("posts");
  return (
    <>
      {loading && (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-white shadow rounded animate-pulse space-y-2"
            >
              <div className="h-4 bg-gray-200 w-3/4 rounded" />
              <div className="h-3 bg-gray-200 w-5/6 rounded" />
              <div className="h-3 bg-gray-200 w-2/3 rounded" />
              <div className="h-3 bg-gray-200 w-2/3 rounded" />
              <div className="h-3 bg-gray-200 w-2/3 rounded" />
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <p className="text-red-500 font-semibold text-lg">Error: {error}</p>
        </div>
      )}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((post) => (
          <div
            key={post?.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer"
          >
            <h2 className="font-bold text-lg mb-2">{post?.title}</h2>
            <p className="text-sm text-gray-600">{post?.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
