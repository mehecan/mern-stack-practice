import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md bg-white">ID</th>
          <th className="border border-slate-600 rounded-md bg-white">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden bg-white">
            Author
          </th>
          <th className="border border-slate-600 rounded-md bg-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center bg-white">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center bg-white">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden bg-white" >
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center bg-white">
              <div className="flex justify-center gap-x-4">

                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
