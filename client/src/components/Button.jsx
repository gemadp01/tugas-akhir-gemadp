import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva(
  "py-2 px-5 rounded hover:bg-bgColor-2 hover:text-secondary cursor-pointer",
  {
    variants: {
      color: {
        primary: "bg-bgColor-2 text-secondary",
        secondary: "border border-primary text-primary",
        sidebarItem: "bg-bgColor-1 text-primary",
        active: "bg-bgColor-2 text-secondary rounded",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
);

function Button({ className, color, size, children }) {
  return (
    <button className={clsx(button({ color, size }), className)}>
      {children}
    </button>
  );
}

export default Button;
