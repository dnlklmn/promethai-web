interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({ children, fullWidth }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 text-white bg-primary rounded-md whitespace-nowrap ${
        fullWidth ? "w-full" : "w-fit"
      }`}
    >
      {children}
    </button>
  );
}
