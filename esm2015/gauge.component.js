import { Component, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import Gauge from 'svg-gauge';
import { GaugeDefaults } from './gauge-defaults.service';
export class GaugeComponent {
    constructor(elm, defaults) {
        this.elm = elm;
        this.defaults = defaults;
        /**
         * Called when the gauge is created
         */
        this.gaugeCreated = new EventEmitter();
    }
    ngAfterViewInit() {
        const options = {
            dialStartAngle: this.dialStartAngle,
            dialEndAngle: this.dialEndAngle,
            dialRadius: this.dialRadius,
            min: this.min,
            max: this.max,
            label: this.label,
            showValue: this.showValue,
            gaugeClass: this.gaugeClass,
            dialClass: this.dialClass,
            valueDialClass: this.valueDialClass,
            valueClass: this.valueClass,
            value: this.value,
            color: this.color,
            viewBox: this.viewBox
        };
        Object.keys(this.defaults).forEach((optionKey) => {
            if (typeof options[optionKey] === 'undefined') {
                options[optionKey] = this.defaults[optionKey];
            }
        });
        Object.keys(options).forEach((optionKey) => {
            if (typeof options[optionKey] === 'undefined') {
                delete options[optionKey];
            }
        });
        this.gauge = Gauge(this.elm.nativeElement, options);
        this.gaugeCreated.emit({ gauge: this.gauge });
        this.updateValue();
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.updateValue();
        }
    }
    updateValue() {
        if (this.gauge) {
            if (this.animated) {
                this.gauge.setValueAnimated(this.value, this.animationDuration);
            }
            else {
                this.gauge.setValue(this.value);
            }
        }
    }
}
GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mwl-gauge',
                template: ''
            },] }
];
GaugeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: GaugeDefaults }
];
GaugeComponent.propDecorators = {
    dialStartAngle: [{ type: Input }],
    dialEndAngle: [{ type: Input }],
    dialRadius: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    label: [{ type: Input }],
    color: [{ type: Input }],
    showValue: [{ type: Input }],
    gaugeClass: [{ type: Input }],
    dialClass: [{ type: Input }],
    valueDialClass: [{ type: Input }],
    valueClass: [{ type: Input }],
    value: [{ type: Input }],
    animated: [{ type: Input }],
    animationDuration: [{ type: Input }],
    viewBox: [{ type: Input }],
    gaugeCreated: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii93b3Jrc3BhY2VzL2FuZ3VsYXItZ2F1Z2Uvc3JjLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFdBQVcsQ0FBQztBQUM5QixPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBTXZFLE1BQU0sT0FBTyxjQUFjO0lBd0Z6QixZQUFvQixHQUFlLEVBQVUsUUFBdUI7UUFBaEQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWU7UUFQcEU7O1dBRUc7UUFDTyxpQkFBWSxHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSUgsQ0FBQztJQUV4RSxlQUFlO1FBQ2IsTUFBTSxPQUFPLEdBQWlCO1lBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMvQyxJQUFJLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDekMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQzdDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNqRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7OztZQWpKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7OztZQWRDLFVBQVU7WUFTSCxhQUFhOzs7NkJBVW5CLEtBQUs7MkJBS0wsS0FBSzt5QkFLTCxLQUFLO2tCQUtMLEtBQUs7a0JBS0wsS0FBSztvQkFLTCxLQUFLO29CQUtMLEtBQUs7d0JBS0wsS0FBSzt5QkFLTCxLQUFLO3dCQUtMLEtBQUs7NkJBS0wsS0FBSzt5QkFLTCxLQUFLO29CQUtMLEtBQUs7dUJBS0wsS0FBSztnQ0FLTCxLQUFLO3NCQUtMLEtBQUs7MkJBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEdhdWdlIGZyb20gJ3N2Zy1nYXVnZSc7XG5pbXBvcnQgeyBHYXVnZURlZmF1bHRzLCBHYXVnZU9wdGlvbnMgfSBmcm9tICcuL2dhdWdlLWRlZmF1bHRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtZ2F1Z2UnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBHYXVnZU9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGFuZ2xlIGluIGRlZ3JlZXMgdG8gc3RhcnQgdGhlIGRpYWxcbiAgICovXG4gIEBJbnB1dCgpIGRpYWxTdGFydEFuZ2xlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBhbmdsZSBpbiBkZWdyZWVzIHRvIGVuZCB0aGUgZGlhbC4gVGhpcyBNVVNUIGJlIGxlc3MgdGhhbiBkaWFsU3RhcnRBbmdsZVxuICAgKi9cbiAgQElucHV0KCkgZGlhbEVuZEFuZ2xlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSByYWRpdXMgb2YgdGhlIGdhdWdlXG4gICAqL1xuICBASW5wdXQoKSBkaWFsUmFkaXVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIHZhbHVlIGZvciB0aGUgZ2F1Z2VcbiAgICovXG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgdGhlIGdhdWdlXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IG51bWJlcjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGxhYmVsIHRoYXQgd2lsbCBiZSByZW5kZXJlZCBpbiB0aGUgY2VudGVyLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIHRoZSBjdXJyZW50IHZhbHVlXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGNvbG9yIHZhbHVlIGZvciB0aGUgZ2F1Z2UnJ3MgZmlsbCAodmFsdWUgZGlhbClcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIHZhbHVlIGF0IHRoZSBjZW50ZXIgb2YgdGhlIGdhdWdlXG4gICAqL1xuICBASW5wdXQoKSBzaG93VmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3Mgb2YgdGhlIGdhdWdlXG4gICAqL1xuICBASW5wdXQoKSBnYXVnZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3Mgb2YgdGhlIGdhdWdlJ3MgZGlhbFxuICAgKi9cbiAgQElucHV0KCkgZGlhbENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3Mgb2YgdGhlIGdhdWdlJ3MgZmlsbCAodmFsdWUgZGlhbClcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlRGlhbENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFx0VGhlIENTUyBjbGFzcyBvZiB0aGUgZ2F1Z2UncyB0ZXh0XG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZ2F1Z2VcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYW5pbWF0ZSBjaGFuZ2luZyB0aGUgZ2F1Z2VcbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcblxuICAvKipcbiAgKiBWaWV3Ym94XG4gICovXG4gIEBJbnB1dCgpIHZpZXdCb3g6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGdhdWdlIGlzIGNyZWF0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBnYXVnZUNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjx7IGdhdWdlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBnYXVnZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLCBwcml2YXRlIGRlZmF1bHRzOiBHYXVnZURlZmF1bHRzKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zOiBHYXVnZU9wdGlvbnMgPSB7XG4gICAgICBkaWFsU3RhcnRBbmdsZTogdGhpcy5kaWFsU3RhcnRBbmdsZSxcbiAgICAgIGRpYWxFbmRBbmdsZTogdGhpcy5kaWFsRW5kQW5nbGUsXG4gICAgICBkaWFsUmFkaXVzOiB0aGlzLmRpYWxSYWRpdXMsXG4gICAgICBtaW46IHRoaXMubWluLFxuICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgc2hvd1ZhbHVlOiB0aGlzLnNob3dWYWx1ZSxcbiAgICAgIGdhdWdlQ2xhc3M6IHRoaXMuZ2F1Z2VDbGFzcyxcbiAgICAgIGRpYWxDbGFzczogdGhpcy5kaWFsQ2xhc3MsXG4gICAgICB2YWx1ZURpYWxDbGFzczogdGhpcy52YWx1ZURpYWxDbGFzcyxcbiAgICAgIHZhbHVlQ2xhc3M6IHRoaXMudmFsdWVDbGFzcyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICB2aWV3Qm94OiB0aGlzLnZpZXdCb3hcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0cykuZm9yRWFjaCgob3B0aW9uS2V5KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25LZXldID0gdGhpcy5kZWZhdWx0c1tvcHRpb25LZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uS2V5KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZ2F1Z2UgPSBHYXVnZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuICAgIHRoaXMuZ2F1Z2VDcmVhdGVkLmVtaXQoeyBnYXVnZTogdGhpcy5nYXVnZSB9KTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1sndmFsdWUnXSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2F1Z2UpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VmFsdWVBbmltYXRlZCh0aGlzLnZhbHVlLCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2F1Z2Uuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=