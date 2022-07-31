import { HttpClient } from '../../infra/HttpClient/HttpClient';

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: 'POST',
      body:{
        username, 
        password
      }
    }).then( async(respostaDoServidor) => {
      if(!respostaDoServidor.ok) throw new Error("Usuario e senha invalido");
      const body = await respostaDoServidor.body;
      console.log(body);
    })
  }
}
