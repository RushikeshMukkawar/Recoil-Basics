import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  return <div>
    <CountRerender />
    <Buttons />
  </div>
}

function CountRerender() {
  // const [count, setCount] = useRecoilState(countAtom);
  console.log("CountRerender rerendering");
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? null : "It is even"} 
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons rerendering");
  return <div>
    <button onClick={() => { setCount(count => count + 1) }}>Increase</button>
    <button onClick={() => { setCount(count => count - 1) }}>Decrease</button>
    <EvenCountRenderer></EvenCountRenderer>
  </div>
}

export default App
