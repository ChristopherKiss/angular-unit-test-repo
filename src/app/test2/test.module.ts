import { NgModule } from '@angular/core';
import { Test2Component } from './test/test.component';
import { ParentComponent } from './parent.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [Test2Component, ParentComponent],
    imports: [SharedModule],
    exports: [ParentComponent],
    providers: [],
})
export class Test2Module {}
