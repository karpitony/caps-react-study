import { useSearchParams } from "react-router";

export default function PostPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get('author');

  const handleClick = () => {
    setSearchParams({ author: 'newuser' });
  };

  return (
    <div>
      <p>현재 작성자: {author || '모두'}</p>
      <button onClick={handleClick}>작성자 변경</button>
    </div>
  );
}