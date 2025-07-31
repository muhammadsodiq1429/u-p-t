import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { FaChevronLeft } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-20 gap-10 h-screen w-full">
      <h1 className="text-9xl">Page not found</h1>
      <h2 className="text-8xl">404</h2>
      <div className="flex gap-6">
        <Button onClick={() => navigate(-1)}>
          {" "}
          <FaChevronLeft /> Go Back
        </Button>
        <Button onClick={() => navigate("/")}>
          <GoHomeFill /> Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
