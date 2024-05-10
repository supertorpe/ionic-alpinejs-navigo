
import Alpine from 'alpinejs';
import { BaseController } from '../commons/controller';

class AppController extends BaseController {
    preload(_$routeParams?: any): void {
        Alpine.store('info', {
            changeTheme: () => {
                if (document.querySelector('html')?.classList.contains('ion-palette-dark')) {
                    document.querySelector('html')?.classList.remove('ion-palette-dark');
                } else {
                    document.querySelector('html')?.classList.add('ion-palette-dark');
                }
            }
        });
    }
}

export const appController = new AppController();
