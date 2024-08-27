import { Directive } from '@angular/core';

@Directive({
    selector: '[crxClickStopPropogation]',
    standalone: true,
    host: {
        '(click)': 'onClick($event)'
    }
})
export class ClickStopPropogationDirective {

    onClick (e: PointerEvent) {

        e.preventDefault();
        e.stopPropagation();

    }

}
