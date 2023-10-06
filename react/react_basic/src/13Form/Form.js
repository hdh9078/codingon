import {useForm} from "react-hook-form";


export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    //handleSubmit(): 두개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는 유효하지 않을 때 실행되는 함수(선택)
    


    const onValid = (data) => {
        console.log("onValid", data);
    };

    // const onInValid = (error) => {
    //     console.log("onInValid", error);
    // };

    console.log("errors", errors)
    // console.log("watch", watch("username"))

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type="text"
                {...register("username", {
                    required: "이름을 입력하세요",
                    minLength: {messege:"최소 2글자 이상 작성하세요",
                    value: 2}
                })}
                placeholder="username"/>
                {errors.username?.message}
                <br/>
                <input type="text"
                {...register("email",{
                    required: "이메일을 입력하세요", 
                    validate:{useGmail:(v)=> v.includes("gmail.com") || "gmail로만 가입가능합니다"}
                })} 
                placeholder="email"/>
                {errors.email?.message}
                <br/>
                <input type="text" {...register("password")} placeholder="password"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}