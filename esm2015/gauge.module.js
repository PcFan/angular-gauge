import { NgModule, InjectionToken } from '@angular/core';
import { GaugeComponent } from './gauge.component';
import { GaugeDefaults } from './gauge-defaults.service';
export const USER_DEFAULTS = new InjectionToken('gauge defaults');
export function defaultsFactory(userDefaults) {
    const defaults = new GaugeDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
export class GaugeModule {
    static forRoot(userDefaults = {}) {
        return {
            ngModule: GaugeModule,
            providers: [
                {
                    provide: USER_DEFAULTS,
                    useValue: userDefaults,
                },
                {
                    provide: GaugeDefaults,
                    useFactory: defaultsFactory,
                    deps: [USER_DEFAULTS],
                },
            ],
        };
    }
}
GaugeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GaugeComponent],
                exports: [GaugeComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii93b3Jrc3BhY2VzL2FuZ3VsYXItZ2F1Z2Uvc3JjLyIsInNvdXJjZXMiOlsiZ2F1Z2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQTJCLElBQUksY0FBYyxDQUNyRSxnQkFBZ0IsQ0FDakIsQ0FBQztBQUVGLE1BQU0sVUFBVSxlQUFlLENBQUMsWUFBMEI7SUFDeEQsTUFBTSxRQUFRLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7SUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQU1ELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQ1osZUFBNkIsRUFBRTtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYXVnZURlZmF1bHRzLCBHYXVnZU9wdGlvbnMgfSBmcm9tICcuL2dhdWdlLWRlZmF1bHRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcbiAgJ2dhdWdlIGRlZmF1bHRzJ1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzRmFjdG9yeSh1c2VyRGVmYXVsdHM6IEdhdWdlT3B0aW9ucyk6IEdhdWdlRGVmYXVsdHMge1xuICBjb25zdCBkZWZhdWx0czogR2F1Z2VEZWZhdWx0cyA9IG5ldyBHYXVnZURlZmF1bHRzKCk7XG4gIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHVzZXJEZWZhdWx0cyk7XG4gIHJldHVybiBkZWZhdWx0cztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2F1Z2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbR2F1Z2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHVzZXJEZWZhdWx0czogR2F1Z2VPcHRpb25zID0ge31cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHYXVnZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2F1Z2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfREVGQVVMVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJEZWZhdWx0cyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEdhdWdlRGVmYXVsdHMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogZGVmYXVsdHNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX0RFRkFVTFRTXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19