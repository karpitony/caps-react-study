import { useState, useEffect } from 'react';

function Child() {
  console.log('Child 컴포넌트 리렌더링!');
  return <div>나는 프롭 없는 자식 컴포넌트예요.</div>;
}

function ChildWithProp({ message }: { message: string }) {
  console.log('ChildWithProp 컴포넌트 리렌더링!');
  return <div>부모가 준 메시지: {message}</div>;
}

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(
    'Parent 컴포넌트의 useEffect 안!'
    );
  }, []);
    
  useEffect(() => {
    console.log(
    'Parent 컴포넌트의 useEffect 안! count:',
    count
    );
    }, [count]);
  
  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      
      <Child />
      <ChildWithProp message={`현재 카운트는 ${count}입니다`} />
    </div>
  );
}