import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();
  const movieId = router.query;

  // const { data } = useMovie(movieId);

  // const currentobj = { if(data.id === movieId ){
  //   return data;
  // }}
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const url = `/api/movies/`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAllData(json);

        console.log({ json });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  let data;
  allData.forEach((item) => {
    console.log(item["id"]);
    if (item["id"] === movieId) {
      data = item;
      console.log(data);
    }
  });
  return console.log(data);

  // (
  //   <div className="h-screen w-screen bg-black">
  //     <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
  //       <ArrowLeftIcon
  //         onClick={() => router.push("/")}
  //         className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
  //       />
  //       <p className="text-white text-1xl md:text-3xl font-bold">
  //         <span className="font-light">Watching:</span> {data?.title}
  //       </p>
  //     </nav>
  //     <video
  //       className="h-full w-full"
  //       autoPlay
  //       controls
  //       src={data?.videoUrl}
  //     ></video>
  //   </div>
  // );
};

export default Watch;
