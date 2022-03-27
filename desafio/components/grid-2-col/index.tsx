import CardTravel from "../card-travel"

const Grid2Col = () => {
    return (
        <div className="grid grid-cols-2 gap-2 m-10">
            <CardTravel></CardTravel>
            <CardTravel></CardTravel>
        </div>
    )
}
export default Grid2Col