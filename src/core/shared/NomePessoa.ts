import Erros from "../constants/Erros";
import Validador from "../utils/Validador";

export default class NomePessoa {
  readonly nome: string;

  constructor(nome?: string) {
    this.nome = nome?.trim() ?? '';

    const errors = Validador.combinar(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO),
      Validador.tamanhoMaiorQue(this.nome, 4, Erros.NOME_PEQUENO),
      Validador.tamanhoMenorQue(this.nome, 100, Erros.NOME_GRANDE),
      Validador.naoVazio(this.nome.split(" ")[1], Erros.NOME_SEM_SOBRENOME),
      Validador.regex(this.nome, /^[a-zA-ZÀ-ú'-\.\s]*$/, Erros.NOME_CARACTERES_ESPECIAIS)
    );

    if (errors) throw new Error(errors.join(","));
  }

  get completo(): string {
    return this.nome;
  }

  get primeiroNome(): string {
    return this.nome.split(" ")[0];
  }

  get sobrenomesAsList(): string[] {
    return this.nome.split(" ").slice(1);
  }

  get sobrenomes(): string {
    return this.nome.split(" ").slice(1).join(" ");
  }

  get ultimoSobrenome(): string {  
    return this.sobrenomesAsList[this.sobrenomesAsList.length - 1];
  }
}
