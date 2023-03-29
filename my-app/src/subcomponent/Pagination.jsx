import { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination() {
  const [page, setPage] = useState(1);

  const [pageCount, setPageCount] = useState();

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  }
  useEffect(() => {
    const getPage = async () => {
      const result = await axios.get(
        `http://localhost:2323/products?page=${page}`
      );
      // setPage(result.data);
    };
    getPage();
  }, [page]);

  return (
    <div>
      <button disabled={page === 1} onClick={handlePrevious}>
        prev
      </button>
      <button>{page}</button>
      <button disabled={page === pageCount} onClick={handleNext}>
        next
      </button>
    </div>
  );
}
