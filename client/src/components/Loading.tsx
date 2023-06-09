import { TwoSeventyRing } from "react-svg-spinners"

/**
* React component that displays a loading animation with a text message.
* @returns A React component
*/

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
              <TwoSeventyRing width={30} height={30} color="rgb(36,41,47)"/>
              <h1 className="text-3xl dark:text-white">Loading...</h1>
    </div>
  )
}

export default Loading
