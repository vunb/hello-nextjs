import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
}

export default function Layout(props) {
    return (
        <div style={layoutStyle}>
            <Header></Header>
            {props.children}
        </div>
    )
}