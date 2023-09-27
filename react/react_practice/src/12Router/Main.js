import {Link} from "react-router-dom";

export default function Main() {



    return (
        <div>
            <div>
                 <h2>
                    <Link to="/">ReactRouter 실습</Link>
                </h2>
                <div>
                    <Link to="/student/kdt">학생KDT</Link>
                </div>
                <div>
                    <Link to="/student/codingon">코딩온</Link>
                </div>
                <div>
                    <Link to="/student/new?name=kdt9/">searchParams</Link>
                </div>
            </div>
        </div>
    )
}