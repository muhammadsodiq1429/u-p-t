import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data: users, loading, error } = useFetch("users");
  const navigate = useNavigate();

  return (
    <>
      {error && (
        <div className="flex justify-center items-center h-screen">
          <div className="text-red-500 text-lg">Error: {error}</div>
        </div>
      )}
      {loading && (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-white shadow animate-pulse space-y-3"
            >
              <div className="h-5 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
              <div className="h-3 bg-gray-200 rounded w-4/6" />
              <div className="h-3 bg-gray-200 rounded w-3/6" />
              <div className="h-3 bg-gray-200 rounded w-2/6" />
            </div>
          ))}
        </div>
      )}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users?.map((user) => (
          <div
            key={user?.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer bg-white"
            onClick={() => navigate(`/user/${user?.id}`)}
          >
            <h2 className="text-lg font-bold">{user?.name}</h2>
            <p className="text-sm text-gray-600">@{user?.username}</p>
            <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
            <p className="text-sm text-gray-500">{user?.phone}</p>
            <p className="text-sm text-gray-500">{user?.website}</p>
            <p className="text-sm text-gray-500">{user?.address.city}</p>
            <p className="text-sm text-gray-500">{user?.company.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
