import { useParams } from 'react-router';
import { usePostData } from "../hooks/usePostData";
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SinglePostPage( ) {
  const { postId } = useParams();
  const { data, loading, error} = usePostData(postId);

  if (loading) 
    return <div>loading...</div>
  if (error)
    return <div>error</div>
  return (
    <div>
      <p>포스트: {postId}</p>
      <div className='markdown-body'>
        <ReactMarkdown 
          components={{
            code({ node, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  // @ts-ignore
                  style={nightOwl}
                  showLineNumbers
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                >
                  {String(children).trim()}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {data}
        </ReactMarkdown>
      </div>
    </div>
  )
}

