import { LocationMarkerIcon } from "@heroicons/react/outline"
const Input = () => {
    return (
        <div className="flex">
            <LocationMarkerIcon className="w-5 h-5" />
            <input className="focus:border-blue-500" placeholder="Going to"></input>
        </div>
    )
}

export default Input