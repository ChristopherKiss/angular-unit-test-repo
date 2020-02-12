import { NgModule } from '@angular/core';
import { ComponentModule } from './components/component.module';
import { PipeModule } from './pipes/pipe.module';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [],
    imports: [ComponentModule, PipeModule, MaterialModule],
    exports: [ComponentModule, PipeModule, MaterialModule],
    providers: [],
})
export class SharedModule {}
