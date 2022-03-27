import CardTrip from "../card-trip"
import CardInfo from "../card-info"

const Grid3Col = () => {
    return (
        <div className="grid grid-cols-3 gap-3 m-10">
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardTrip></CardTrip>
            <CardTrip></CardTrip>
            <CardTrip></CardTrip>
        </div>
    )
}
export default Grid3Col