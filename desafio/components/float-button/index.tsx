import { ChatAlt2Icon } from "@heroicons/react/outline"

const FloatButton = () => {
    return (
        <div className="text-blue-700 fixed bottom-5 z-0 right-5 ">
            <button className=" px-5 w-24 h-10 flex bg-white rounded-full items-center content-center hover:bg-blue-100 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <ChatAlt2Icon className="text-blue-600 h-4 w-4"/>
                <span className="mt-0 pl-1 text-base font-semibold">Help</span>
            </button>
        </div>
    )
}

export default FloatButton