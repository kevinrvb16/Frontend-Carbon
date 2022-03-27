import CardInfo from "../card-info"

const Grid3Col = () => {
    return (
        <div className="grid-cols-3 m-10">
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
        </div>
    )
}
export default Grid3Col