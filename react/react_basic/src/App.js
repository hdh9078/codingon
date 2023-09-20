import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import ReactComponet from "./ReactComponent";
import Test from "./test";
import Test2 from "./test2";
import Test3 from "./test3";
import Test4 from "./test4";
import Event from "./Event";
import EventClass from "./EventClass";


function App() {
  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <ReactComponet></ReactComponet>
      <Test></Test>
      <Test2></Test2> */}
      {/* <ClassComponent name="dongha" age={21}></ClassComponent>
      <ClassComponent/> */}
      {/* <FunctionComponent myClass={"kdt9"}>코딩</FunctionComponent>
      <FunctionComponent/> */}
      {/* <Test3 food="치킨"></Test3>
      <Test3/> */}
      {/* <Test4 title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기계발서"></Test4> */}
      {/* <Event/> */}
      <EventClass message="메세지입니다"/>
    </>
  );
}

export default App;
