interface InputProps {
  placeholder?: string;
  disabled?: boolean;
}

export default function Input({
  placeholder,
  disabled = false,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      disabled={disabled}
      className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
    />
  );
}
