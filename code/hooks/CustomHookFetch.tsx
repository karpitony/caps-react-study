import useFetchPosts from './hooks/useFetchPosts';

export default function PostList() {
  const { data, loading, error } = useFetchPosts('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!data) return <p>데이터가 없습니다.</p>;

  return (
  <ul>
    {data.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
  );
}
