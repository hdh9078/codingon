import image from "./아아.jpg"

function test2() {
    const style = {
        color: "orange",
        fontSize: "40px",
        marginTop: "20"
    }


    return (
        <>
            <div style={style}><h2>안녕하세요</h2><img src={image}></img></div>
        </>
    )
}

export default test2;
