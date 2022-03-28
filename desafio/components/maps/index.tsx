const Maps = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute w-72 border rounded-lg inset-0 bg-gray-300">
                <iframe width="100%" className="border-0 rounded-lg" height="100%" frame-border="0" margin-height="0" margin-width="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            </div>
            <div className="container px-5 py-20 mx-auto flex"></div>
        </section>
    )
}
export default Maps