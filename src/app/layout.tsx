import "@/styles/globals.css";
import { AuthProvider } from "../components/contexts/authContext/index";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
