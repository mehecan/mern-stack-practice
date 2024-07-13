import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center my-8">
        <div className="flex-grow text-center">
          <h1 className="text-3xl text-white text-center">Books</h1>
        </div>
        <Link to="/books/create">
          <button className="border border-slate-700 rounded-md text-black text-lg p-2 bg-white mr-2">
            Create Book
          </button>
        </Link>
      </div>
      {loading ? (
        <div className="text-white text-center">Loading...</div>
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
