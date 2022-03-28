const Phone = () => {
    return (
        <div className="relative z-0 w-full group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-3 px-2 text-sm text-gray-900 bg-transparent border rounded-lg border-gray-900  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_phone" className="absolute pl-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-1 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Phone number</label>
        </div>
    )
}
export default Phone