import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, NgModule, Type } from '@angular/core';

@Component({ selector: 'app-host', template: '' })
export class HostComponent<T = undefined> {
    public data!: T;
}

@NgModule({ declarations: [HostComponent] })
export class TestModule {}

class TestingStatic {
    public createHostComponent<T = undefined>(template: string, params?: T): ComponentFixture<HostComponent<T>> {
        TestBed.configureTestingModule({ declarations: [HostComponent] });

        const fixture = TestBed.overrideTemplate(HostComponent, template).createComponent<HostComponent<T>>(
            HostComponent
        );

        if (params) {
            fixture.componentInstance.data = params;
        }

        fixture.detectChanges();
        return fixture;
    }

    public withExports(module: Type<unknown>, exports: Type<unknown>[]): void {
        TestBed.overrideModule(module, { add: { exports } });
    }
}

export const Testing = new TestingStatic();
