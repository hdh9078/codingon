import {Link, useSearchParams} from "react-router-dom";

export const user = [
    {
        id: 1,
        name: "홍길동",
        comment: [
            {
                text: "안녕하세요"
            }
        ]
    }
]

export default function User() {
    const [searchParams, setSearchParams] = useSearchParams()
    
    return (
        <div>
            {user.map((value) => {
                return (
                    <div key={value.id}>
                        <div>{value.name}</div>
                    </div>
                )
            })}
        </div>
    )
}