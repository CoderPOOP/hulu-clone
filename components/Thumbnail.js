import Image from "next/image"
import { ThumbUpIcon } from "@heroicons/react/outline"
import { forwardRef } from "react"

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"
  return (
    <>
      <div ref={ref} className="group p-2 cursor-pointer">
        <Image alt={result.title || result.original_name} className="rounded-lg transition duration-500 ease-in transform sm:hover:scale-125 hover:z-50" layout="responsive" src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} height={1080} width={1920} />

        <div className="p-2">
          <p className="truncate max-w-md text-sm">{result.overview}</p>
          <h2 className="text-2xl mt-1 text-white transition-all duration-200 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
          <p className="text-xl flex items-center opacity-0 transition group-hover:opacity-100 duration-200">
            {result.media_type && `${result.media_type} ~ `}{" "}
            {result.release_date || result.first_air_date} ~ {" "}
            <ThumbUpIcon className="h-10 mx-2" /> {result.vote_count}
          </p>
        </div>
      </div>
    </>
  )
})

export default Thumbnail