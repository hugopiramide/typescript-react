import React, { useState } from 'react';
import { type AuthMode } from '../types/types';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <div className="container min-h-screen bg-white flex flex-col items-center px-4 pt-10 font-sans text-[#111111] text-center">
      <div className="mt-5">
        <a className="navbar-brand" href="/"> <img id="logo" src="/src/assets/img/logo.svg" alt="Logo" /> </a>
      </div>

      <div className="w-full max-w-[460px]">
        <h1 className="text-[28px] font-bold tracking-tighter leading-8 mb-8 text-center uppercase mb-3">
          {mode === 'login' ? 'TU CUENTA PARA TODO HCD' : 'ÚNETE A NOSOTROS'}
        </h1>

        <form className="flex flex-col gap-4 text-center" onSubmit={(e) => e.preventDefault()}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="User Name"
              className="w-full border border-gray-300 p-3 rounded-sm focus:border-black outline-none transition-all"
            />
          )}
          
          <input
            type="email"
            placeholder="Electronic Email"
            className="w-full border border-gray-300 p-3 rounded-sm focus:border-black outline-none transition-all"
          />
          
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-sm focus:border-black outline-none transition-all"
          />

          {mode === 'login' && (
            <div className="flex justify-between items-center text-xs text-gray-500 my-2">
              <label className="flex items-center gap-2 cursor-pointer mt-3">
                <input type="checkbox" className="accent-black w-4 h-4 me-2" />
               Stay logged In
              </label>
            </div>
          )}

          <p className="text-[12px] text-gray-500 text-center leading-5 px-4 mt-3">
            By {mode === 'login' ? 'start session' : 'registering'}, you accept the 
            <span className="underline text-black font-semibold"> HCD Privacy Policy and Terms of Use</span> 
          </p>

          <button className="bg-black text-white font-bold py-3 mt-4 rounded-sm hover:bg-zinc-800 transition-colors uppercase tracking-tight p-5">
            {mode === 'login' ? 'Log In' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <br />
          <span className="text-gray-500 me-3">
            {mode === 'login' ? '¿Are you not already a member?' : '¿Are you already a member?'} 
          </span>
          <button 
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="ml-1 font-bold underline hover:text-gray-600 transition-colors"
          >
            {mode === 'login' ? 'Join Now' : 'Start Session'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage