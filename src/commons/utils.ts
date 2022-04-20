import Navigo from 'navigo';
import { Controller } from './controller';

const templates = new Map<string, string>();

export const openRoute = (navigo: Navigo, template: string, targetElementSelector: string, controller: Controller, params?: any): Promise<void> => {
    return new Promise<void>(resolve => {
        const targetElement = document.querySelector(targetElementSelector);
        if (targetElement) {
            const elementObserver = new MutationObserver((mutations) => {
                mutations.forEach((_mutation) => {
                    if (controller) {
                        elementObserver.disconnect();
                        navigo.updatePageLinks();
                        controller.run(params);
                        resolve();
                    }
                });
            });
            elementObserver.observe(targetElement, { childList: true });
            controller.preload(params);
            const content = templates.get(template);
            if (content) {
                targetElement.innerHTML = content;
            } else {
                fetch(template)
                .then(response => response.text()
                    .then(content => {
                        templates.set(template, content);
                        targetElement.innerHTML = content;
                    }));
            }
        }
    });
};
