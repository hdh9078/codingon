import {Outlet} from "react-router-dom"


import LifeCycleFunc from "./08Lifecycle/LifeCycleFunc"
import RefSampleClass1 from "./09Ref/RefSampleClass1";
import RefSampleClass2 from "./09Ref/RefSampleClass2";
import RefSampleFunc1 from "./09Ref/RefSampleFunc1";
import RefSampleFunc2 from "./09Ref/RefSampleFunc2";
import UseCallback from "./10Hook/useCallback";
import UserMemo from "./10Hook/useMemo";
import Counter from "./10Hook/useReducer";
import SassComponent from "./11Style/SassComponent";
import Style from "./11Style/Style";
import StyledComponent from "./11Style/StyledComponent"
// import Router from "./12Router/Router";
import Header from "./12Router/Header";

function App() {
    return (
        <>
            {/* <LifeCycleFunc/> */}
            {/* <UseEffect/> */}
            {/* <RefSampleClass1/>
            <RefSampleClass2/>
            <RefSampleFunc1/>
            <RefSampleFunc2/> */}
            {/* <UserMemo/> */}
            {/* <UseCallback/> */}
            {/* <Counter/> */}
            {/* <Style/> */}
            {/* <SassComponent/> */}
            {/* <StyledComponent/> */}
            {/* <Router/> */}
            <Header/>
            <Outlet />
        </>
    )    
}

export default App;
