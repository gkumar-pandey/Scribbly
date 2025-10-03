import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <nav>Auth Navbar</nav>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
