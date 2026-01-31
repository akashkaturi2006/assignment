interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function Button({
  label,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded font-medium transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
}
