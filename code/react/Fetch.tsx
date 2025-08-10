import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function App() {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
  <div>
    <h1>fetch 테스트</h1>
    <ul>
      {data && data.map((item) => (
        <li key={item.id}>
          <h2>title: {item.title}</h2>
          <p>body: {item.body}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}