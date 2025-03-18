import Id from "@/core/shared/Id";

export interface EntidadeProps {
  id?: string;
}

export default abstract class Entidade<TipoGenerico, Props extends EntidadeProps> {
  readonly id: Id;
  readonly props: Props;

  constructor(props: Props) {
    this.id = new Id(props.id);
    this.props = { ...props, id: this.id.valor };
  }

  igual(outraEntidade: Entidade<TipoGenerico, Props>): boolean {
    return this.id.igual(outraEntidade?.id);
  }

  diferente(outraEntidade: Entidade<TipoGenerico, Props>): boolean {
    return this.id.diferente(outraEntidade?.id);
  }

  clone(novasProps: Props, ...args: any): TipoGenerico {
    //          this.constructor will call the child constructor
    return new (this.constructor as any)({ ...this.props, ...novasProps }, ...args);
  }
}
