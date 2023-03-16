import getColor from "../Palette"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import RepositoyName from "./RepositoyName"
import Language from "./Language"


TimeAgo.addDefaultLocale(en)

type Props = {
    repo : any
}

const Repository = ({repo}: Props) => {

  return (
    <div
        className='border-b border-b-gray-300 w-full flex justify-between items-center py-6 gap-4'
    >
        <div className='flex flex-col gap-4'>
            <RepositoyName url={repo.html_url} name={repo.name} visibility={repo.visibility}/>
            {repo.description && (<p className="text-sm text-[rgb(36,41,47)]">{repo.description}</p>)}
            <div className="flex items-center gap-4">
                {repo.language && (<Language language={repo.language} getColor={getColor}/>)}
                <p className="text-xs text-[rgb(36,41,47)] shrink-0"><FontAwesomeIcon icon={faStar} className="text-[rgb(36,41,47)]"/> {repo.stargazers_count}</p>
                <p className="text-xs text-[rgb(36,41,47)]">Updated <ReactTimeAgo date={repo.updated_at} locale="en-US"/></p>
            </div>
        </div>
        <a
                href={repo.html_url}
                target='_blank'
                className='text-white text-lg font-semibold bg-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-600 shrink-0'
            >
                View
        </a>
    </div>
  )
}

export default Repository
