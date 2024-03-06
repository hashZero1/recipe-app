import logo1 from '../../assets/logo1.png';

export default function NavComponent() {
  return (
    <>
      <nav className="bg-gray-100 p-2">
        <div className="py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <a className="flex" href="/">
                <img className=' h-12' src={logo1}/>
                {/* <span className="ml-2 font-semibold text-[#e6e6e6]">
                  HealthHub
                </span> */}
              </a>
            </div>
            <div className="ml-2 flex">
              <div className="flex text-gray-100 cursor-pointer bg-gray-600 items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </div>
              <div className="ml-2 flex text-red-600 cursor-pointer items-center gap-x-1 rounded-md border-2 border-red-600 py-2 px-4 hover:bg-red-600 hover:text-red-100">
                <span className="text-sm  font-medium">Sign in</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
