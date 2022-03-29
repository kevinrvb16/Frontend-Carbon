const SearchInput = () => {
    return (
        <div className="m-0">
            <div className="container flex">
                <div className="relative"> <input type="text" className="h-12 w-72 pr-8 pl-5 rounded z-0 shadow focus:outline-blue-600" placeholder="e.g. Florianopolis"/>
                    <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
                </div>
            </div>
        </div>
    )
}
export default SearchInput