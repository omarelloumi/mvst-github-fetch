import { TwoSeventyRing } from "react-svg-spinners"

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
              <TwoSeventyRing width={30} height={30} color="rgb(36,41,47)" />
              <h1 className="text-3xl">Loading...</h1>
    </div>
  )
}

export default Loading
