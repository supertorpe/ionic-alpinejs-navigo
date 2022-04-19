
import Alpine from 'alpinejs';
import { BaseController } from '../commons/controller';

class AppController extends BaseController {
    preload(_$routeParams?: any): void {
        Alpine.store('info', {
            changeTheme: () => {
                if (document.querySelector('body')?.classList.contains('dark')) {
                    document.querySelector('body')?.classList.remove('dark');
                } else {
                    document.querySelector('body')?.classList.add('dark');
                }
            }
        });
    }
}

export const appController = new AppController();
