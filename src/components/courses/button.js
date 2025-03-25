export function Button({ children, disabled, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${disabled ? "bg-gray-300" : "bg-blue-600 text-white hover:bg-blue-700"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
