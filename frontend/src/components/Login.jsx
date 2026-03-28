import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { LogIn, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try { await signInWithEmailAndPassword(auth, email, password); } 
    catch (err) { alert(err.message); }
  };

  const handleGoogleLogin = () => signInWithPopup(auth, googleProvider);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="glass p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary">AI Moderator</h1>
        <p className="text-center text-slate-400">Sign in to start commenting</p>
        
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-primary" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-primary" onChange={e => setPassword(e.target.value)} />
          <button className="w-full bg-primary py-3 rounded-lg font-semibold hover:opacity-90 transition">Login</button>
        </form>

        <div className="relative flex items-center py-2"><div className="flex-grow border-t border-slate-700"></div><span className="mx-4 text-slate-500">OR</span><div className="flex-grow border-t border-slate-700"></div></div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-100">
          <Mail size={20} /> Continue with Google
        </button>
      </div>
    </div>
  );
}