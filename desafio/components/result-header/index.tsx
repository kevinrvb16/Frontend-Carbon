import Button from "../button"
import DatePicker from "../datepicker"
import Input from "../input"

const ResultHeader = () => {
    return (
        <>
            <div className="text-sm font-medium text-center justify-center text-gray-800 border-gray-200  dark:border-gray-300">

                <div className="flex m-2">
                    <Input/>
                    <DatePicker/>
                    <Button/>
                </div>

            </div>
        </>
    )
}

export default ResultHeader