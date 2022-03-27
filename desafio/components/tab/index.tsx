import Button from "../button"
import DatePicker from "../datepicker"
import Input from "../input"

const Tab = () => {
    return (
        <>

            <div className="text-sm font-medium text-center text-gray-800 border-b border-gray-200  dark:border-gray-300">
                <ul className="flex flex-wrap -mb-px">
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
                    <Button/>
            </div>
        </>
    )
}

export default Tab