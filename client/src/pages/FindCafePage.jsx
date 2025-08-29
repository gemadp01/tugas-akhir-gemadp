import { SearchIcon } from "lucide-react";
import CafeCard from "../components/CafeCard";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";

function FindCafePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cafe, setCafe] = useState([]);

  const searchInput = (e) => {
    e.preventDefault();
    searchParams.set("search", e.target.search.value);
    setSearchParams(searchParams);
  };

  async function getDataCafeByQueryParam() {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users?search=${searchParams.get("search")}`
      );
      const data = await response.json();
      setCafe(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataCafeByQueryParam();
  }, [searchParams]);
  return (
    <Layout>
      <section
        id="find-cafe"
        className="min-h-screen flex flex-col justify-center items-center w-auto"
      >
        <div className="flex flex-col gap-10 justify-center items-center p-4 my-6 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Cari Cafe Sesukamu!
          </h1>
          <div className="relative p-3 border border-bgColor-2 rounded-lg w-full max-w-lg">
            <form onSubmit={searchInput}>
              <input
                type="text"
                className="rounded-md p-3 w-full"
                placeholder="Cari berdasarkan nama cafe atau lokasi!"
                id="search"
                autoFocus
                autoComplete="off"
              />
              <button type="submit" className="absolute right-6 top-6">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mt-10">
          {cafe.length > 0
            ? cafe.map((cafe) => (
                <CafeCard
                  key={cafe._id}
                  id={cafe._id}
                  namaCafe={cafe.namaCafe}
                  lokasiCafe={cafe.lokasiCafe}
                  noTelp={cafe.noTelp}
                />
              ))
            : searchParams.get("search") && (
                <h2 className="text-2xl font-semibold">Cafe Tidak Ditemukan</h2>
              )}
        </div>
        <div>{cafe.length > 0 && <Pagination />}</div>
      </section>
    </Layout>
  );
}

export default FindCafePage;
