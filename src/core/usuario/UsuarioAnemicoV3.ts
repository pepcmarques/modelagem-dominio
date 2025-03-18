import Erros from "@/core/constants/Erros";
import Validador from "@/core/utils/Validador";

export default class UsuarioAnemicoV3 {
  constructor(private id: number, private nome: string, private email: string, private senha: string) {
    this.setId(id);
    this.setNome(nome);
    this.setEmail(email);
    if (senha) this.setSenha(senha);
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    if (Validador.isEmailValido(email)) {
      this.email = email;
    }
  }

  getSenha(): string {
    return this.senha;
  }

  setSenha(senha: string): void {
    if (senha.length < 6) throw new Error(Erros.SENHA_INVALIDA);
    this.senha = senha;
  }
}
