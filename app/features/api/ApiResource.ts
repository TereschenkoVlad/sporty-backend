export interface IApiResource {
  constructor(): void;
}

export class ApiResource {
  item: IApiResource;

  constructor(item: IApiResource) {
    this.item = item;
  }

  getItem(): IApiResource {
    return this.item;
  }
}
