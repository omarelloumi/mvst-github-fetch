import getColor from "../Palette"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)

type Props = {
    repo : any
}

const Repository = ({repo}: Props) => {

  return (
    <div
        className='border-b border-b-gray-300 w-full flex justify-between items-center py-6'
    >
        <div className='flex flex-col gap-4'>
            <div className="flex items-center gap-2">
                <a
                    href={repo.html_url}
                    target='_blank'
                    className='text-[rgb(14,108,219)] text-xl font-semibold hover:underline underline-offset-4 decoration-[rgb(14,108,219)]'
                >
                    {repo.name}
                </a>
                <span className='text-[rgb(36,41,47)] border py-1 px-3 rounded-3xl text-xs font-semibold'>{repo.visibility.charAt(0).toUpperCase()+repo.visibility.slice(1)}</span>
            </div>
            {
                    repo.description && (
                        <p className="text-sm text-[rgb(36,41,47)]">{repo.description}</p>
                    )
            }
            <div className="flex items-center gap-4">
                {
                    repo.language && (
                        <>
                            <div className="text-xs text-[rgb(36,41,47)] flex items-center">
                                <div className="w-3 h-3 bg-[rgb(36,41,47)] rounded-full" style={{backgroundColor: getColor(repo.language)}}>
                                </div>
                                <span className="ml-1">{repo.language}</span>
                            </div>
                        </>
                    )
                }
                <p className="text-xs text-[rgb(36,41,47)]"><FontAwesomeIcon icon={faStar} className="text-[rgb(36,41,47)]"/> {repo.stargazers_count}</p>
                <p className="text-xs text-[rgb(36,41,47)]">Updated <ReactTimeAgo date={repo.updated_at} locale="en-US"/></p>


            </div>
        </div>
        <a
                href={repo.html_url}
                target='_blank'
                className='text-white text-lg font-semibold bg-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-600'
            >
                Go to this repository
        </a>
    </div>
  )
}

export default Repository
