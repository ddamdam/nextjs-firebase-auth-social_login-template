// components/ProtectedRoute.tsx
"use client";

import { useAuth } from "../components/contexts/authContext"; // Updated path
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  if (user === null) {
    return <div className="flex items-center justify-center min-h-screen">Ładowanie...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
