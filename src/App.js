import { useRef } from "react";
import { useFLIPAnimation } from "./hooks";
import "./styles.css";

export default function App() {
  const boxRef = useRef(null);
  const action = useFLIPAnimation(boxRef, () => {
    console.log("动画完成！");
  });
  return (
    <div className="App">
      <div className="box" ref={boxRef} onClick={action}></div>
    </div>
  );
}
