import logo from './logo.svg';
import './App.css';


  function App() {
    
    const flag = true;
    let txt = "";
    const math = (3 + 5 == 8)

    const name = "응응";
    const style1 = {
      textDecoration: "underline"
    }
    const animal = "호랑이";

    const title = "hello"
    


    if(flag) {
      txt = "true 입니다.";
    } else {
      txt = "false 입니다.";
    }

    const styles = {
      backgroundColor: "red"
    }

    //map함수
    const lists = ["k", "d", "t", "w", "e", "b"];
    //filter함수
    const animals = ["dog", "cat", "rabbit"];
    const newAnimals = animals.filter(value => {
      return value.includes("a");
    })
    console.log(newAnimals);
    
    //단축평가
    //&&연산자
    const result = true && "Hello";
    console.log(result)
    //||연산자
    const defaultValue = 1000;
    const price = 1500;
    const dbPrice = price || defaultValue;
    console.log(dbPrice)


    const users = [
      {id:1, name: "John", age: 25, vip: true},
      {id:2, name: "Jane", age: 19, vip: false},
      {id:3, name: "Alice", age: 30, vip: true},
      {id:4, name: "Bob", age: 18, vip: false},
      {id:5, name: "Charlie", age: 35, vip: true},
    ];
    const user = users.filter(value => value.vip === true);
    console.log(user);

    const login = true; //true면 아래 함수 전체 보여주고 false면 안 보여준다 <></>이것 사이에 넣어줘야한다

    return (
      <>
      {login && <>
         {/* 실습1 */}
         <div>이것은 div입니다.
          <h3>이것은 div안에 있는 h3태그 입니다.</h3>
        </div>
        <div>{math ? <h1>정답입니다!</h1> : <h1>오답입니다!</h1>}</div>

        {/* 실습2 */}
        <h2>제 반려 동물의 이름은 <span style={style1}>{name}</span>입니다 <div><span style={style1}>{name}</span>은 <span style={style1}>{animal}</span>입니다</div></h2>
        <h2>제 반려 동물의 이름은 <u>{name}</u>입니다.<br></br><u>{name}</u>은 <u>{animal}</u>입니다.</h2>
        {/* 실습3 */}
        <div className='test1'>
          <div className='test'>{title}</div>
          <div>아이디:<input type='text' className='input'></input></div><br></br>
          <div>비밀번호:<input type='text' className='input'></input></div>
        </div>

        {/* 실습4 */}
        <div className='color'>
          <div className='red'></div>
          <div className='orange'></div>
          <div className='yellow'></div>
          <div className='green'></div>
          <div className='blue'></div>
          <div className='navy'></div>
          <div className='purple'></div>
        </div>
        
        {/* map함수 */}
        {lists.map((value, index) => {
            return (
              <div key={index}>
                <p>Hello {value}</p>
              </div>
            )
        })}

        {user.map((value) => {
          return (
            <li key={value.id}>
              {value.name}
            </li>
          )
        })}
        {/* 위의 코드 한 줄로 */}
        {user.map((value) => (
          <div key={value.id}>{value.name}</div>
        ))}
      </>}
       

        <h1 style={{backgroundColor: "black", color: "white"}}>Hello React</h1>
        <div style={styles}>리액트시작</div>
        <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
        
        <div>{txt}</div>
      </>
    );
  }


export default App;
