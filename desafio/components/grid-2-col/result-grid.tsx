import Dropdown from '../dropdown'
import Maps from '../maps'
import SearchInput from '../search-input'

const Grid2ColResult = () => {
    return (
        <div className="grid grid-cols-12 gap-2 m-10">
            <div className="col-span-3">
                <Maps/>
                <div>
                    <p className=" font-semibold text-lg">Search by property name</p>
                    <SearchInput/>
                </div>
            </div>
            <div className="col-span-9">
                <div>
                    <div className="flex justify-between mx-2 my-1">
                        <p className="font-semibold">See how we pick our recommended properties</p>
                        <Dropdown/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Grid2ColResult