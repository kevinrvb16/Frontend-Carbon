const ImgCard = () => {
    return (
        <div className="brightness-[.99] bg-cover bg-[url('https://a.travel-assets.com/travel-assets-manager/cmct-4981/US-CA-UK-FR-DE-MX-AU-HP-Hero-D-928x398.jpg')] p-6 m-10 rounded-lg border h-[520px] border-gray-200  md:max-w-6xl dark:border-gray-300">
            <div className="w-64">
                <h1 className="m-2 filter-none  text-[34px] font-semibold tracking-tight text-white drop-shadow-xl">There's so much world out there</h1>
            </div>
            <p className="mb-3 text-lg text-white drop-shadow-lg">Members save 30% or more on select hotels—and enjoy the experiences that matter most*</p>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's go</button>
            <p className="text-xs text-white">*Book by 3/31/2022; travel by 9/6/2022. Terms and Conditions apply. See site for details.</p>
        </div>
    )
}
export default ImgCard