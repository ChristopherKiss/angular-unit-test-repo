import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class Test2Component {
    @Input()
    public test: string;
}
