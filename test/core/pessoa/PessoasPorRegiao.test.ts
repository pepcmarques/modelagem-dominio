import PessoasPorRegiao from "@/core/Pessoa/PessoasPorRegiao"
import RegiaoCpf from "@/core/shared/RegiaoCpf"
import PessoaBuilder from "@/test/data/PessoaBuilder"

test("Deve retornar pessoas agrupadas da regiao de SP", () => {
    const pessoas = PessoaBuilder.criarLista(10000)
    const pessoasAgrupadas = new PessoasPorRegiao(pessoas).agrupar()

    const pessoasSP = pessoasAgrupadas.get(RegiaoCpf.SP) ?? []
    const mesmaRegiao = pessoasSP.every(p => p.cpf.regiao.igual(RegiaoCpf.SP))

    expect(mesmaRegiao).toBe(true)
})