import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function H1({ children }: TextProps) {
  return <h1 className="text-white text-5xl font-bold">{children}</h1>;
}
export function H2({ children }: TextProps) {
  return <h2 className="text-white text-4xl font-bold">{children}</h2>;
}
export function H3({ children }: TextProps) {
  return <h3 className="text-white text-3xl font-bold">{children}</h3>;
}
export function H4({ children }: TextProps) {
  return <h4 className="text-white text-2xl font-bold">{children}</h4>;
}
export function H5({ children }: TextProps) {
  return <h5 className="text-white text-xl font-bold">{children}</h5>;
}
export function H6({ children }: TextProps) {
  return <h6 className="text-white text-md font-bold">{children}</h6>;
}
export function Paragraph({ children }: TextProps) {
  return <p className="text-white font-medium text-md">{children}</p>;
}
