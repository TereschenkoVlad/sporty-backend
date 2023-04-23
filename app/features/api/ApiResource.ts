export interface IApiResource {}

export class ApiResource {
  item: IApiResource;

  constructor(item: IApiResource) {
    this.item = item;
  }

  getItem(): IApiResource {
    return this.item;
  }
}
