import "./Sasstest1.scss";
import image from "./pngwing.com.png"

export default function Sasstest1() {
    
    return (
        <div className="Sasstest1">
            <div class="box red"></div>
            <div class="box orange"></div>
            <div class="box yellow"></div>
            <div class="box green"></div>
            <div class="box blue"></div>
            <div class="f"></div>
            <div class="g"></div>
            <img class="qww" src={image}></img>
        </div>
    )
}