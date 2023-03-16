type Props ={
    search : string,
    filtredRepos : any,
    setSearch : (search: string) => void
}

const Search = (props: Props) => {
  return (
    <div className='w-full border-t border-t-gray-300'>
        <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-[rgb(36,41,47)] text-lg md:text-xl">
            Search for a repository
        </h2>
        <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-[rgb(36,41,47)]"
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
        />
        </div>
        {props.search.length > 0 && (
            <div className="mt-3 flex justify-between w-full">
                <p className="text-[rgb(36,41,47)] text-sm">
                    <span className="font-bold">{props.filtredRepos.length}</span> results for repositories matching {props.search}
                </p>
                <button
                    className="text-red-600 text-sm cursor-pointer hover:underline"
                    onClick={() => props.setSearch("")}
                >
                    Clear search
                </button>
            </div>)
        }
    </div>
  )
}

export default Search
