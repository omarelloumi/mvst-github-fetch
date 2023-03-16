type Props = {
    url: string
    name: string
    visibility: string
}

const RepositoyName = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
        <a
            href={props.url}
            target='_blank'
            className='text-[rgb(14,108,219)] text-xl font-semibold hover:underline underline-offset-4 decoration-[rgb(14,108,219)]'
        >
            {props.name}
        </a>
        <span className='text-[rgb(36,41,47)] border py-1 px-3 rounded-3xl text-xs font-semibold'>{props.visibility.charAt(0).toUpperCase()+props.visibility.slice(1)}</span>
    </div>
  )
}

export default RepositoyName
