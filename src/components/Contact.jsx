import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    const formData = new FormData(e.target);

    // Usaremos Web3Forms (es gratis y no requiere registro inicial)
    formData.append("access_key", "80cd3f2a-8970-4c0d-a24d-14b65821d766"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setStatus("¡Mensaje enviado con éxito! 🚀");
      e.target.reset();
    } else {
      setStatus("Error al enviar. Inténtalo de nuevo.");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Hablemos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" name="name" placeholder="Tu nombre" required
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-orange-500 outline-none transition-all"
          />
          <input 
            type="email" name="email" placeholder="Tu email" required
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-orange-500 outline-none transition-all"
          />
          <textarea 
            name="message" placeholder="¿En qué puedo ayudarte?" rows="4" required
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-orange-500 outline-none transition-all"
          ></textarea>
          <button 
            type="submit"
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-transform active:scale-95"
          >
            Enviar Mensaje
          </button>
          {status && <p className="text-center text-orange-400 mt-4 animate-pulse">{status}</p>}
        </form>
      </div>
    </section>
  );
}