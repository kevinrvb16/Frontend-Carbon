import Button from "../button"
import DatePicker from "../datepicker"
import Input from "../input"

const Tab = () => {
    return (
        <>

            <div className="text-sm font-medium text-center justify-center text-gray-800 border-gray-200  dark:border-gray-300">
                <ul className="flex flex-wrap -mb-px border-b align-center">
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900">Stays</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Flights</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900">Cars</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900">Packages</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900">Things to do</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900">Cruises</a>
                    </li>
                </ul>
                <div className="flex m-2">
                    <Input/>
                    <DatePicker/>
                </div>
                <div className="font-light text-sm text-gray-600 text-left">
                    <input type="checkbox" className="h-4 w-4 checked:bg-blue-500 text-gray-500 mr-2" />Add a flight
                    <input type="checkbox" className="h-4 w-4 ml-10 checked:bg-blue-500  mr-2" />Add a car
                </div>
                <Button/>
            </div>
        </>
    )
}

export default Tab