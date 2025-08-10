import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      alert('3초가 지났어요!');
    }, 3000);
    
    return () => {
      clearTimeout(timerId);
      console.log('타이머가 정리되었습니다.');
    };
  }, []);
  
  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      
      <Child />
      <ChildWithProp message={`현재 카운트는 ${count}입니다`} />
    </div>
  );
}