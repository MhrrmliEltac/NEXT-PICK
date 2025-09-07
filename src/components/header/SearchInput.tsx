import { ProductDataType } from "@/types/types";
import { path } from "@/utils/paths";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { type Location, useLocation } from "react-router-dom";

const SearchInput = () => {
  const location: Location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ProductDataType[]>([]);

  const searchQueryByData = async (query: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${path.endpoints.search.searchProducts(
          query
        )}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      if (response.status === 200) {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") return;

    const delayDebounceFn = setTimeout(() => {
      searchQueryByData(searchQuery);
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const searchQuery = value.trim();
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname, location.search]);

  return (
    <div className="w-[40%] relative bg-[#F3F3F3] rounded-[8px]">
      <input
        id="search-input"
        type="text"
        name="search"
        value={searchQuery}
        placeholder="I'm searching for..."
        className="flex px-[16px] py-[6px] w-full outline-none"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
      />

      {searchResults.length > 0 && searchQuery && (
        <ul className="absolute top-[100%] left-0 w-full bg-white shadow-lg rounded mt-2 p-4 transition-all duration-200">
          {searchResults.map((result: ProductDataType, index: number) => (
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              key={result._id}
              className="flex items-center gap-2"
            >
              <FaRegClock />
              <span>{result.productName}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
