export default function Container({ customClass, children }) {
    return <div className={`${"container"} ${customClass}`}>{children}</div>
}