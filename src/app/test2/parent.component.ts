import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `<app-test [test]="test"></app-test>`,
    styles: [``]
})
export class ParentComponent {
    @Input()
    public test: string;
}
