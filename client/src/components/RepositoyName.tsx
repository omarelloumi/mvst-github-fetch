/**
  * A React component that renders a repository name with a link to its URL and visibility status.
  * @param {Object} props - The props object.
  * @param {string} props.url - The URL of the repository.
  * @param {string} props.name - The name of the repository.
  * @param {string} props.visibility - The visibility status of the repository.
  * @returns A React component.
*/

type Props = {
    url: string // The URL of the repository.
    name: string // The name of the repository.
    visibility: string // The visibility status of the repository.
}

const RepositoyName = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
        <a
            href={props.url}
            target='_blank'
            className='text-[rgb(14,108,219)] dark:text-[rgb(88,166,255)] text-xl font-semibold hover:underline underline-offset-4 decoration-[rgb(14,108,219)]'
        >
            {props.name}
        </a>
        <span className='text-[rgb(36,41,47)] dark:text-white border py-1 px-3 rounded-3xl text-xs font-semibold'>{props.visibility.charAt(0).toUpperCase()+props.visibility.slice(1)}</span>
    </div>
  )
}

export default RepositoyName
