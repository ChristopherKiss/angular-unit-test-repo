import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { Test2Module } from './test2/test2.module';
import { Test3Module } from './test3/test3.module';
import { Test1Service } from '../shared/services/test1.service';
import { Test2Service } from '../shared/services/test2.service';
import { Test3Service } from '../shared/services/test3.service';
import { Test4Service } from '../shared/services/test4.service';
import { Test5Service } from '../shared/services/test5.service';

@NgModule({
    declarations: [TestComponent],
    imports: [SharedModule, Test2Module, Test3Module],
    exports: [],
    providers: [Test1Service, Test2Service, Test3Service, Test4Service, Test5Service],
})
export class TestModule {}
