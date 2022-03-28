import Button from "../button"
import Phone from "../phone"

const HorizontalCard = () => {
    return (

        <div className="flex m-10 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full ">
            <img className="object-cover w-full h-[268px] rounded-t-lg  md:w-[360px]  md:rounded-l-lg" src="use-app.jpg" alt="woman using smartphone"/>
            <div className="flex flex-col justify-between leading-normal mx-7">
                <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 ">Plan your trip in a snap on the app</h5>
                <p className="mb-3 font-normal text-gray-700">From home or hammock, organize your entire escape and explore app offers</p>
                <h5 className="my-3 text-lg font-semibold tracking-tight text-gray-900 ">Text yourself a download link</h5>
                <div className="flex mb-2">
                    <Phone/>
                    <button className="ml-0 items-center py-2 px-3 font-medium h-12 w-52 text-base text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get the app</button>
                </div>
                <p className="mb-3 text-xs text-gray-700">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
            </div>
            <div>
                <img src='https://chart.googleapis.com/chart?cht=qr&chl=%23&chs=180x180&choe=UTF-8&chld=L|2' alt='qr code'/><a href='https://www.qr-code-generator.com'  rel='nofollow'></a>
                <p>Scan the QR code</p>
            </div>
        </div>

    )
}
export default HorizontalCard