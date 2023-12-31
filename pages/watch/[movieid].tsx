import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();
  const movieId = router.query["movieid"] as string;

  const { data } = useMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="absolute w-full p-2 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="w-3 md:w-8 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-2xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
