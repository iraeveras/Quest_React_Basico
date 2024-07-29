import "./Drawer.css"
const Drawer = (props) => {
    return <div className="drawer" style={{color: props.color, textTransform: "uppercase"}}><span>{props.title}</span></div>
}

export default Drawer;