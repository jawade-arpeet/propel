import React from "react";

import cn from "@/utils/cn";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 h-9 bg-background font-medium text-foreground rounded-md text-xs border border-stone-800 focus:outline-none focus:ring focus:ring-stone-900 focus:ring-offset-1",
        className
      )}
      {...props}
    />
  );
}

export default Input;
