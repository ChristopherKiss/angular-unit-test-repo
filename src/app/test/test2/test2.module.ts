import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { ComponentModule } from 'src/app/shared/components/component.module';

@NgModule({
    declarations: [Test2Component],
    imports: [ CommonModule, SharedModule, PipeModule, ComponentModule ],
    exports: [Test2Component],
    providers: [],
})
export class Test2Module {}
