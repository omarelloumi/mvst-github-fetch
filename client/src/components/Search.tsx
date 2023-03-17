/**
    * A React component that renders a search input field for repositories.
    * @param {Object} props - The props object.
    * @param {string} props.search - The search string entered by the user.
    * @param {Array} props.filtredRepos - The list of repositories filtered by search string.
    * @param {Function} props.setSearch - A function that sets the search string.
    * @returns A React component that renders a search input field for repositories.
    * @example
    * <Search search={search} filtredRepos={filtredRepos} setSearch={setSearch} />
*/

type Props ={
    search : string,
    filtredRepos : any,
    setSearch : (search: string) => void
}

const Search = (props: Props) => {
  return (
    <div className='w-full border-t border-t-gray-300'>
        <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-[rgb(36,41,47)] dark:text-white text-lg md:text-xl">
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
                <p className="text-[rgb(36,41,47)] dark:text-white text-sm">
                    <span className="font-bold">{props.filtredRepos.length}</span> results for repositories matching {props.search}
                </p>
                <button
                    className="text-white bg-red-500 text-sm rounded-md px-2 py-1 hover:bg-red-600"
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
