import Alpine from 'alpinejs';
import { BaseController } from '../commons/controller';

class AboutController extends BaseController {
    preload(_$routeParams?: any): void {
        Alpine.data('info', () => ({
            title: 'About'
        }));
    }
}

export const aboutController = new AboutController();
