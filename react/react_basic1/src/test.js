

function test() {
    const name = "황동하";
    const my_style = {
        backgroundColor: "blue",
        color: "orange",
        fontSize: "40px"
}
    return (
        <>
            <div style={my_style}>{name}</div>
        </>
    )
}

export default test;