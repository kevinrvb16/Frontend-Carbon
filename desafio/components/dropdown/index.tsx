const Dropdown = () => {
    return (
        <>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="focus:ring-4 border focus:outline-none focus:ring-blue-300 dark:focus:border-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" placeholder="Sort by">Recommended<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className="hidden z-10 w-44 m-0 bg-white rounded divide-y absolute divide-gray-100 shadow dark:bg-gray-700" style={{inset:' auto auto 0px 0px', transform:'translate3d(351.333px, 78px, 0px)'}} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Distance from downtown</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Guest rating + our picks</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price + our picks</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Dropdown