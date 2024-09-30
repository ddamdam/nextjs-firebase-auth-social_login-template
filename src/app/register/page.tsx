'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerWithEmail, loginWithGoogle } from '@/firebase/auth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerWithEmail(email, password);
      setIsDialogOpen(true);
      await signOut(auth);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to log in with Google.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
              Register
            </Button>
            <div className="text-center text-sm text-gray-500">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.28 0 6.27 1.25 8.47 3.28l6.24-6.24C34.13 3.43 29.29 1 24 1 14.4 1 6.21 6.53 2.39 14.24l7.25 5.63C11.43 14.1 17.2 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.61 24.63c0-1.45-.13-2.85-.38-4.2H24v8.16h12.74c-.55 2.99-2.23 5.52-4.8 7.23l7.25 5.63C43.99 37.73 46.61 31.65 46.61 24.63z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.25 28.8c-1.22-3.68-1.22-7.68 0-11.36l-7.25-5.63C-.63 17.54-.63 31.73 2.99 40.75l7.26-5.62z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.29 0 10.13-1.83 13.91-4.97l-7.25-5.63C28.74 37.57 26.49 38.5 24 38.5c-6.8 0-12.57-4.6-14.36-10.86l-7.26 5.62C6.21 41.47 14.4 46 24 46z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Register with Google
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center text-black">Thank you for registering!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-black">
              Please confirm your email before logging in. We've sent you a verification link.
            </p>
            <Button onClick={() => router.push('/login')} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Go to Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterPage;
