import React from "react";
import { useFetch } from "../../hooks/useFetch";

const Todos = () => {
  const { data: todos, loading, error } = useFetch("todos");

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Todos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 text-left text-green-800">ID</th>
              <th className="py-2 px-4 text-left text-green-800">Title</th>
              <th className="py-2 px-4 text-left text-green-800">Status</th>
              <th className="py-2 px-4 text-left text-green-800">User ID</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo.id} className="border-t hover:bg-green-50">
                <td className="py-2 px-4">{todo.id}</td>
                <td className="py-2 px-4">{todo.title}</td>
                <td className="py-2 px-4">
                  {todo.completed ? (
                    <span className="text-green-600 font-medium">
                      Completed
                    </span>
                  ) : (
                    <span className="text-gray-500 italic">Pending</span>
                  )}
                </td>
                <td className="py-2 px-4">{todo.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
