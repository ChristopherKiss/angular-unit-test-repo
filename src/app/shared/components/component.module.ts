import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test-1.component';
import { Test2Component } from 'src/app/test2/test/test.component';
import { Test3Component } from './test-3.component';
import { Test4Component } from './test-4.component';
import { Test5Component } from './test-5.component';
import { Test6Component } from './test-6.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [Test1Component, Test2Component, Test3Component, Test4Component, Test5Component, Test6Component],
    imports: [ CommonModule, MaterialModule ],
    exports: [Test1Component, Test2Component, Test3Component, Test4Component, Test5Component, Test6Component],
    providers: [],
})
export class ComponentModule {}
