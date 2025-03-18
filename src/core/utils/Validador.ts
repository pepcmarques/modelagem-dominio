export default class Validador {
  static combinar(...erros: (string | null)[]): string[] | null {
    const errosFiltrados = erros.filter((erro) => erro !== null) as string[];
    return errosFiltrados.length > 0 ? errosFiltrados : null;
  }

  static naoNulo(valor: any, erro: string): string | null {
    return valor !== null && valor !== undefined ? null : erro;
  }

  static naoVazio(valor: string | null | undefined, erro: string): string | null {
    if (Validador.naoNulo(valor, erro)) return erro;
    return valor!.trim() !== "" ? null : erro;
  }

  static tamanhoMenorQue(valor: string | any[], tamanhoMaximo: number, erro: string): string | null {
    if (valor.length < tamanhoMaximo) return null;
    return erro;
  }

  static tamanhoMaiorQue(valor: string | any[], tamanhoMinimo: number, erro: string): string | null {
    if (valor.length > tamanhoMinimo) return null;
    return erro;
  }

  static regex(valor: string, regex: RegExp, erro: string): string | null {
    return regex.test(valor) ? null : erro;
  }

  static isEmailValido(email: string): boolean {
    const regex = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
  }
}
