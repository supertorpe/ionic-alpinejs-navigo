import Alpine from 'alpinejs';

import { Controller } from '../commons/controller';

class PageController implements Controller {

    preload($routeParams?: any): void {
        const values = Alpine.reactive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        const sort = () => {
            values.sort();
        };

        const swap = (values: number[], index1: number, index2: number) => {
            const aux = values[index2];
            values[index2] = values[index1];
            values[index1] = aux;
        };        

        const disorder = () => {
            for (let i = 0; i < 10; i++) {
                swap(values, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            }
        };

         Alpine.data('info', () => ({
             title: $routeParams['name'],
             values: values,
             sort: sort,
             disorder: disorder
         }));
 

        disorder();
    }

    run($routeParams?: any): void {
        console.log(JSON.stringify($routeParams));
    }
}


export const pageController = new PageController();
