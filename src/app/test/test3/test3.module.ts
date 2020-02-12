import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3Component } from './test3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { Test1Service } from 'src/app/shared/services/test1.service';
import { Test2Service } from 'src/app/shared/services/test2.service';
import { Test4Service } from 'src/app/shared/services/test4.service';
import { Test5Service } from 'src/app/shared/services/test5.service';
import { Test3Service } from 'src/app/shared/services/test3.service';

@NgModule({
    declarations: [Test3Component],
    imports: [ CommonModule, SharedModule, PipeModule, ComponentModule ],
    exports: [Test3Component],
    providers: [Test1Service, Test2Service, Test3Service, Test4Service, Test5Service],
})
export class Test3Module {}
