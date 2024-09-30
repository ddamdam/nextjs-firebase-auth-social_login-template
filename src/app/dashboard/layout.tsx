// app/dashboard/layout.tsx
"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import Layout from "../../components/Layout/Layout";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <Layout>{children}</Layout>
    </ProtectedRoute>

    
  );
};

export default DashboardLayout;
