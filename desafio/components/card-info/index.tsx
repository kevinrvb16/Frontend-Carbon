import { PencilIcon } from "@heroicons/react/outline"
const CardInfo = () => {
    return (
        <div className="mx-1 px-4 border rounded-xl  cursor-auto">
            <div className="mt-4">
                <div className="flex justify-between">
                    <a href="https://stackdiary.com/" className="text-lg font-medium text-gray-900  dark:hover:text-gray-200">Change or cancel a trip</a>
                    <div className="flex justify-end">
                        <PencilIcon className="h-4 w-4"/>
                    </div>
                </div>
                <p className="my-2 text-xs">Make updates to your itinerary or cancel a booking</p>
            </div>

        </div>
    )
}

export default CardInfo