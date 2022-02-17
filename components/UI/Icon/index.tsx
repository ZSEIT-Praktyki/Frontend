import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
}

export default function Icon({ children }: IconProps) {
  return <button className="p-2 rounded-full">{children}</button>;
}
