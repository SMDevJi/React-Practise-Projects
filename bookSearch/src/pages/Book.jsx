import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loading";

function Book() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [bookDetail, setBookDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await response.json();
        setBookDetail(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const { title, description, covers, subject_places, subject_times, subjects } = bookDetail;
  const coverId = covers?.[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16">
      {/* Back Button */}
      <button
        type="button"
        onClick={handleGoBack}
        className="cursor-pointer flex items-center gap-2 text-black mb-6"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
        </svg>
        <span className="text-lg font-semibold">Go Back</span>
      </button>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          {coverId ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
              alt="Book cover"
              className="w-[250px] rounded shadow-md"
            />
          ) : (
            <div className="w-[250px] h-[350px] bg-gray-200 flex items-center justify-center rounded shadow-md">
              <span className="text-gray-500">No Cover Available</span>
            </div>
          )}
        </div>

        {/* Book Info */}
        <div className="flex-1 max-h-[80vh] overflow-y-auto pr-2 space-y-4">
          <h2 className="text-2xl font-semibold">{title || "Unknown Title"}</h2>

          <div>
            <p className="text-justify leading-relaxed">
              {typeof description === "string"
                ? description
                : description?.value || "No description available."}
            </p>
          </div>

          {subject_places && (
            <div>
              <span className="font-semibold">Subject Places: </span>
              <span className="italic">{subject_places.join(", ")}</span>
            </div>
          )}

          {subject_times && (
            <div>
              <span className="font-semibold">Subject Times: </span>
              <span className="italic">{subject_times.join(", ")}</span>
            </div>
          )}

          {subjects && (
            <div>
              <span className="font-semibold">Subjects: </span>
              <span>{subjects.join(", ")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book;
