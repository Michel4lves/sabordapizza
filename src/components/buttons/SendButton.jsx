import "../../sass/components/buttons/SendButton.sass"

export default function SendButton({ title, handleClick }) {
    return (
        <button className="send-button" onClick={handleClick}>{title}</button>
    )
}