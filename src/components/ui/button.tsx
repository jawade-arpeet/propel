import cn from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

function Button({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-9 inline-flex items-center gap-2 justify-center px-4 py-2 text-sm font-semibold rounded-md",
        variant === "outline"
          ? "border border-stone-700"
          : "bg-foreground text-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
