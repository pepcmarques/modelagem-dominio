import RegiaoCpf from "@/core/shared/RegiaoCpf"

test("Deve criar uma RegiaoCpf da região 0 por código", () => {
    const regiao = RegiaoCpf.porCodigo(0)
    expect(regiao.codigo).toBe(0)
    expect(regiao.estados[0]).toBe("RS")
})

test("Deve criar uma RegiaoCpf da região 0 pelo CPF", () => {
    const regiao = RegiaoCpf.porCpf("345.799.510-93")
    expect(regiao.codigo).toBe(0)
    expect(regiao.estados[0]).toBe("RS")
})

test("Deve comparar RegiaoCpf iguais pelo CPF", () => {
    const regiaoA = RegiaoCpf.porCpf("345.799.510-93")
    const regiaoB = RegiaoCpf.porCpf("682.167.960-64")
    expect(regiaoA.igual(regiaoB)).toBe(true)
    expect(regiaoA.diferente(regiaoB)).toBe(false)
})

test("Deve comparar RegiaoCpf diferentes pelo CPF", () => {
    const regiaoA = RegiaoCpf.porCpf("345.799.510-93")
    const regiaoB = RegiaoCpf.porCpf("364.953.677-32")
    expect(regiaoA.igual(regiaoB)).toBe(false)
    expect(regiaoA.diferente(regiaoB)).toBe(true)
})

test("Deve comparar RegiaoCpf com undefined", () => {
    const regiaoA = RegiaoCpf.porCpf("345.799.510-93")
    expect(regiaoA.igual(undefined as any)).toBe(false)
    expect(regiaoA.diferente(undefined as any)).toBe(true)
})


test("Deve criar RegiaoCpf de CE_MA_PI", () => {
    const regiao = RegiaoCpf.CE_MA_PI
    expect(regiao.codigo).toBe(3)
    expect(regiao.estados[0]).toBe('CE')
    expect(regiao.estados[1]).toBe('MA')
    expect(regiao.estados[2]).toBe('PI')
})