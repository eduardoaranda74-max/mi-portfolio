
export const post = async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
  
    // Usaremos Web3Forms (es gratis y no requiere registro inicial)
    const formData = new FormData();
    formData.append("access_key", "80cd3f2a-8970-4c0d-a24d-14b65821d766");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    if (response.ok) {
      return new Response(JSON.stringify({ message: "¡Mensaje enviado con éxito! 🚀" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
        return new Response(JSON.stringify({ message: "Error al enviar. Inténtalo de nuevo." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
  };
