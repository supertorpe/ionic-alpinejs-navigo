import Navigo from 'navigo';
import { MenuI, menuController } from '@ionic/core';
import { Controller } from './controller';

const templates = new Map<string, string>();

let menuRegistered = false;
const closeMenu = (menuId: string) => {
    if (!menuRegistered) {
        const query = "ion-menu[menu-id='" + menuId + "']";
        const menu = document.querySelector(query) as unknown as MenuI;
        if (!menu) return;
        menuController._register(menu);
        menuRegistered = true;
    }
    menuController.close(menuId);
}

const loadContent = (targetElement: Element, content: string) => {
    // TO DO: add some transition effect
    targetElement.innerHTML = content;
};

export const openRoute = (navigo: Navigo, template: string, targetElementSelector: string, controller: Controller, params?: any): Promise<void> => {
    closeMenu('main-menu');
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
                loadContent(targetElement, content);
            } else {
                fetch(template)
                .then(response => response.text()
                    .then(content => {
                        templates.set(template, content);
                        loadContent(targetElement, content);
                    }));
            }
        }
    });
};
