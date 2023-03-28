import { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination() {
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    const getPages = async () => {
      const result = await axios.get("http://localhost:2323/products");
      setPages(result.data);
    };
    getPages();
  }, []);

  return (
    <div>
      <button>prev</button>
      <button>current</button>
      <button>next</button>
    </div>
  );
}
