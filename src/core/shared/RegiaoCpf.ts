import Cpf from "./Cpf";

export default class RegiaoCpf {

    static readonly TODAS = [
        new RegiaoCpf(0, ["RS"]),
        new RegiaoCpf(1, ["DF", "GO", "MT", "MS", "TO"]),
        new RegiaoCpf(2, ["PA", "AM", "AC", "AP", "RO", "RR"]),
        new RegiaoCpf(3, ["CE", "MA", "PI"]),
        new RegiaoCpf(4, ["PE", "RN", "PB", "AL"]),
        new RegiaoCpf(5, ["BA", "SE"]),
        new RegiaoCpf(6, ["MG"]),
        new RegiaoCpf(7, ["RJ", "ES"]),
        new RegiaoCpf(8, ["SP"]),
        new RegiaoCpf(9, ["PR", "SC"]),
    ]

    private constructor(readonly codigo: number, readonly estados: string[]) {
    }
    
    static RS = RegiaoCpf.TODAS[0]
    static DF_GO_MT_MS_TO = RegiaoCpf.TODAS[1]
    static PA_AM_AC_AP_RO_RR = RegiaoCpf.TODAS[2]
    static CE_MA_PI = RegiaoCpf.TODAS[3]
    static PE_RN_PB_AL = RegiaoCpf.TODAS[4]
    static BA_SE = RegiaoCpf.TODAS[5]
    static MG = RegiaoCpf.TODAS[6]
    static RJ_ES = RegiaoCpf.TODAS[7]
    static SP = RegiaoCpf.TODAS[8]
    static PR_SC = RegiaoCpf.TODAS[9]

    static porCodigo(codigo: number): RegiaoCpf {
        return RegiaoCpf.TODAS[codigo]
    }

    static porCpf(cpf: string): RegiaoCpf {
        const codigo = +cpf.replace(/\D/g, '')[8]
        return RegiaoCpf.TODAS[codigo]
    }

    igual(outraRegiao: RegiaoCpf): boolean {
        return this.codigo === outraRegiao?.codigo
    }

    diferente(outraRegiao: RegiaoCpf): boolean {
        return this.codigo !== outraRegiao?.codigo
    }
}