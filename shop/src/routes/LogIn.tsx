import { Link } from 'react-router-dom'

const LogIn = () => {

  return (
    <div className="container min-h-screen bg-white flex flex-col items-center px-4 pt-10 font-sans text-[#111111] text-center">
      <div className="mt-5">
        <a className="navbar-brand" href="/"> <img id="logo" src="/src/assets/img/logo.svg" alt="Logo" /> </a>
      </div>

      <div className="w-full max-w-[460px]">
        <h1 className="text-[28px] font-bold tracking-tighter leading-8 mb-8 text-center uppercase mb-3">
          TU CUENTA PARA TODO HCD
        </h1>

        <form className="flex flex-col gap-4 text-center" onSubmit={(e) => e.preventDefault()}>
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

            <div className="flex justify-between items-center text-xs text-gray-500 my-2">
              <label className="flex items-center gap-2 cursor-pointer mt-3">
                <input type="checkbox" className="accent-black w-4 h-4 me-2" />
               Stay logged In
              </label>
            </div>

          <p className="text-[12px] text-gray-500 text-center leading-5 px-4 mt-3">
            Registrandote aceptas la
            <span className="underline text-black font-semibold"> HCD Politica de Privacidad y Términos de Uso</span> 
          </p>

          <button className="bg-black text-white font-bold py-3 mt-4 rounded-sm hover:bg-zinc-800 transition-colors uppercase tracking-tight p-5">
            Log In
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <br />
          <span className="text-gray-500 me-3">
            ¿ Aún no eres miembro ? 
          </span>
          <Link 
            to={'/register'}
            className="ml-1 font-bold underline hover:text-gray-600 transition-colors"
          >
            Unirse
          </Link>
        </div>
        <span className="mt-6 text-center">
          <Link 
            to={'/register'} 
            className="no-underline text-gray-400 hover:text-black text-xs transition-colors"
          >
            ← Volver al Inicio
          </Link>
        </span>
      </div>
    </div>
  )
}

export default LogIn