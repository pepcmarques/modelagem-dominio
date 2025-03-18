import Erros from "@/core/constants/Erros";
import Validador from "@/core/utils/Validador";

export default class UsuarioAnemicoV3 {
  constructor(private _id: number, private _nome: string, private _email: string, private _senha?: string) {}

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    if (Validador.isEmailValido(email)) {
      this._email = email;
    }
  }

  get senha(): string | undefined {
    return this._senha;
  }

  set senha(senha: string | undefined) {
    if (senha && senha.length < 6) throw new Error(Erros.SENHA_INVALIDA);
    this._senha = senha;
  }
}
