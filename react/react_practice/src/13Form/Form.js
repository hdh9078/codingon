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
                    required: "이름은 필수항목입니다",
                    
                })}
                placeholder="username"/>
                {errors.username?.message}
                <br/>
                <input type="number"
                {...register("age",{
                    required: "나이를 입력해주세요.",
                    min: {messege:"0 이상의 숫자만 입력 가능합니다."},
                    validate:{useGmail:(v)=> v.includes(-1) && "0 이상의 숫자만 입력 가능합니다."}
                })} 
                placeholder="age"/>
                {errors.age?.message}
                <br/>
                <button type="submit">제출</button>
            </form>
        </>
    )
}