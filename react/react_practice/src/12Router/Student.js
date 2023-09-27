import {useNavigate, useParams, useSearchParams} from "react-router-dom";

export default function Student() {
    const {name} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("name")

    const navi = useNavigate();
    const onCilck = () => {
        navi("/")
    }


    return (
        <div>
            학생의 이름은<span style={{color:"green"}}>{name}</span> 입니다.
            {keyword !== null && <div>실제 이름은 <span style={{color: "red"}}>{keyword}</span></div>}
            <button onClick={onCilck}>돌아가기</button>
        </div>
    )
}