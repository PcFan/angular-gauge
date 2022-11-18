import { EventEmitter, Component, ElementRef, Input, Output, InjectionToken, NgModule } from '@angular/core';
import Gauge from 'svg-gauge';

class GaugeDefaults {
    constructor() {
        /**
         * The angle in degrees to start the dial
         */
        this.dialStartAngle = 135;
        /**
         * The angle in degrees to end the dial. This MUST be less than dialStartAngle
         */
        this.dialEndAngle = 45;
        /**
         * The radius of the gauge
         */
        this.dialRadius = 40;
        /**
         * The minimum value for the gauge
         */
        this.min = 0;
        /**
         * The maximum value for the gauge
         */
        this.max = 100;
        /**
         * Whether to show the value at the center of the gauge
         */
        this.showValue = true;
        /**
         * The CSS class of the gauge
         */
        this.gaugeClass = 'gauge';
        /**
         * The CSS class of the gauge's dial
         */
        this.dialClass = 'dial';
        /**
         * The CSS class of the gauge's fill (value dial)
         */
        this.valueDialClass = 'value';
        /**
         * 	The CSS class of the gauge's text
         */
        this.valueClass = 'value-text';
        /**
         *  viewBox
         */
        this.viewBox = "0 0 100 50";
        /**
         * Whether to animate changing the gauge
         */
        this.animated = false;
    }
}

class GaugeComponent {
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

const USER_DEFAULTS = new InjectionToken('gauge defaults');
function defaultsFactory(userDefaults) {
    const defaults = new GaugeDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
class GaugeModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { GaugeModule, USER_DEFAULTS, defaultsFactory, GaugeComponent as ɵa, GaugeDefaults as ɵb };
//# sourceMappingURL=angular-gauge.js.map