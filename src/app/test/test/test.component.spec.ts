import { TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { TestModule } from '../test.module';

describe('TestComponent', () => {
    it('should be defined - fast', () => {
        console.time('fast');
        TestBed.configureTestingModule({
            imports: [TestModule]
        });

        const fixture = TestBed.createComponent(TestComponent);
        const component = fixture.componentInstance;

        expect(component).toBeDefined();
        console.timeEnd('fast');
    });

    it('should be defined - slow', () => {
        console.time('slow');
        TestBed.configureTestingModule({
            imports: [TestModule]
        });

        TestBed.overrideModule(TestModule, { add: { exports: [TestComponent] } });

        const fixture = TestBed.createComponent(TestComponent);
        const component = fixture.componentInstance;

        expect(component).toBeDefined();
        console.timeEnd('slow');
    });

    it('should be defined - slow2', () => {
        console.time('slow2');
        TestBed.configureTestingModule({
            imports: [TestModule]
        });

        TestBed.overrideModule(TestModule, { add: { exports: [TestComponent] } });

        const fixture = TestBed.createComponent(TestComponent);
        const component = fixture.componentInstance;

        expect(component).toBeDefined();
        console.timeEnd('slow2');
    });

    it('should be defined - slow3', () => {
        console.time('slow3');
        TestBed.configureTestingModule({
            imports: [TestModule]
        });

        TestBed.overrideModule(TestModule, { add: { exports: [TestComponent] } });

        const fixture = TestBed.createComponent(TestComponent);
        const component = fixture.componentInstance;

        expect(component).toBeDefined();
        console.timeEnd('slow3');
    });
});
