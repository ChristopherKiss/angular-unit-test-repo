import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe1Pipe } from './pipe-1.pipe';
import { Pipe2Pipe } from './pipe-2.pipe';
import { Pipe3Pipe } from './pipe-3.pipe';
import { Pipe4Pipe } from './pipe-4.pipe';
import { Pipe5Pipe } from './pipe-5.pipe';

@NgModule({
    declarations: [Pipe1Pipe, Pipe2Pipe, Pipe3Pipe, Pipe4Pipe, Pipe5Pipe],
    imports: [ CommonModule ],
    exports: [Pipe1Pipe, Pipe2Pipe, Pipe3Pipe, Pipe4Pipe, Pipe5Pipe],
    providers: [],
})
export class PipeModule {}
