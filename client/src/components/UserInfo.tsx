type Props = {
    userData: any
}

const UserInfo = ({userData}: Props) => {
  return (

    <div className="flex flex-col justify-start items-start gap-2">
        <div className="grid grid-cols-4 md:grid-cols-1 justify-center items-center md:items-start gap-6 md:gap-0 w-full">
            <img src={userData.avatar_url} alt="avatar" className="col-span-1 rounded-full w-full"/>
            <div className="col-span-3 flex flex-col py-4">
                <h2 className="text-[rgb(36,41,47)] text-2xl font-semibold">{userData.name}</h2>
                <p className="text-[rgb(87,96,106)] text-lg">{userData.login}</p>
            </div>
        </div>
        <div className="border-t border-t-gray-300 w-full py-4">
            <p className="text-base">
                {userData.bio}
            </p>
        </div>
        <div className="border-t border-t-gray-300 w-full py-4 flex gap-2">
            <p className="text-sm"><span className="text-[rgb(36,41,47)] font-semibold">{userData.followers}</span> Followers</p>
            <span>.</span>
            <p className="text-sm"><span className="text-[rgb(36,41,47)] font-semibold">{userData.following}</span> Following</p>
        </div>
    </div>
  )
}

export default UserInfo
