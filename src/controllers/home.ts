import Alpine from 'alpinejs';
import { BaseController } from '../commons/controller';

class HomeController extends BaseController {
    preload(_$routeParams?: any): void {
        Alpine.data('info', () => ({
            title: 'Home'
        }));
    }
}

export const homeController = new HomeController();
