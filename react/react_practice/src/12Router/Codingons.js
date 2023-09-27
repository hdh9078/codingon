import {useNavigate} from "react-router-dom";

export default function Student() {
    const navi = useNavigate();
    const onCilck = () => {
        navi("/")
    }


    return <div>학생의 이름은 codingon 입니다.
        <button onClick={onCilck}>돌아가기</button>
    </div>
}