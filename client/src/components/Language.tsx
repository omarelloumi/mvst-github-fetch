/**
  * A component that renders a language name and a color-coded dot indicating its color
  * @param {object} props - Component props
  * @param {string} props.language - The name of the language to display
  * @param {function} props.getColor - A function that takes a language name as a parameter and returns its corresponding color in RGB format
  * @returns A React component
  * @example
  * <Language language="JavaScript" getColor={getColor} />
*/

type Props = {
    language: string
    getColor: (language: string) => string
}

const Language = (props: Props) => {
  return (
    <div className="text-xs text-[rgb(36,41,47)] dark:text-white flex items-center">
        <div className="w-3 h-3 rounded-full" style={{backgroundColor: props.getColor(props.language)}}>
        </div>
        <span className="ml-1">{props.language}</span>
    </div>
  )
}

export default Language
