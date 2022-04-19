export interface Controller {
    preload($routeParams?: any): void;
    run($routeParams?: any): void;
}

export class BaseController implements Controller {
    preload(_$routeParams?: any): void {
    }
    run(_$routeParams?: any): void {
    }
}

export const dummyController = new BaseController();