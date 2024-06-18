import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Account",
  description: "Start your easy trading Today",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
