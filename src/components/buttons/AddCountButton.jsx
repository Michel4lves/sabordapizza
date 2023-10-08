import "../../sass/components/buttons/AddCountButton.sass"

export default function AddCountButton({ handleClickLess, handleClickPlus, customClass, text }) {
    return (
        <div className={`counter ${customClass}`}>
            <button className="add-less-button" onClick={handleClickLess}>-</button>
            <div className="count-number">{text}</div>
            <button className="add-plus-button" onClick={handleClickPlus}>+</button>
        </div>
    )
}