interface CellProps {
  value: string;
  row: number;
  col: number;  
  handleClick: (row: number, col: number) => void;
}

export default function Cell({ value, row, col, handleClick }: CellProps) {
  const onClick = () => {
    handleClick(row, col);
  };
  return (
    <button 
      onClick={onClick}
      className="w-16 h-16 border border-gray-400 flex items-center justify-center hover:bg-gray-200"
    >
      <p className="text-2xl font-bold">{value}</p>
    </button>
  )
}