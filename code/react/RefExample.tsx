import { useRef } from 'react';

export default function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };
    
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>포커스 주기</button>
    </>
  );
}
