import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const UserDetail = () => {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch(`users/${id}`);

  return (
    <>
      {error && (
        <div className="flex justify-center items-center h-[82.959vh]">
          <div className="text-red-500 text-lg font-medium">Error: {error}</div>
        </div>
      )}
      {loading && (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4 animate-pulse h-[82.959vh]">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/5"></div>
          <div className="h-4 bg-gray-200 rounded w-2/6"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2 mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          <div className="h-4 bg-gray-200 rounded w-3/5"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2 mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
        </div>
      )}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow h-[82.959vh]">
        <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
        <p className="text-gray-600 mb-1">@{user?.username}</p>
        <p className="text-gray-600 mb-1">Email: {user?.email}</p>
        <p className="text-gray-600 mb-1">Phone: {user?.phone}</p>
        <p className="text-gray-600 mb-1">Website: {user?.website}</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Address</h2>
          <p className="text-gray-600">
            {user?.address.suite}, {user?.address.street}, {user?.address.city},{" "}
            {user?.address.zipcode}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Company</h2>
          <p className="text-gray-600">{user?.company.name}</p>
          <p className="text-sm text-gray-500 italic">
            "{user?.company.catchPhrase}"
          </p>
          <p className="text-sm text-gray-500">{user?.company.bs}</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <h2 className="text-lg font-semibold">Location Coordinates</h2>
          <p>Latitude: {user?.address.geo.lat}</p>
          <p>Longitude: {user?.address.geo.lng}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
