type Props = {
    language: string
    getColor: (language: string) => string
}

const Language = (props: Props) => {
  return (
    <div className="text-xs text-[rgb(36,41,47)] flex items-center">
        <div className="w-3 h-3 bg-[rgb(36,41,47)] rounded-full" style={{backgroundColor: props.getColor(props.language)}}>
        </div>
        <span className="ml-1">{props.language}</span>
    </div>
  )
}

export default Language
