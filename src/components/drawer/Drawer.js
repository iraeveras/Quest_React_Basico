import "./Drawer.css"
const Drawer = (props) => {
    return (
        <>
            <div title={props.title} colors={props.color} className="drawer" style={{ color: props.color, textTransform: "uppercase" }}>
                <span className="span">{props.title}</span>
            </div>
        </>
    )
}

export default Drawer;