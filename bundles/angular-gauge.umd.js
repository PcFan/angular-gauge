(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('svg-gauge')) :
    typeof define === 'function' && define.amd ? define('angular-gauge', ['exports', '@angular/core', 'svg-gauge'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-gauge'] = {}, global.ng.core, global.Gauge));
}(this, (function (exports, core, Gauge) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Gauge__default = /*#__PURE__*/_interopDefaultLegacy(Gauge);

    var GaugeDefaults = /** @class */ (function () {
        function GaugeDefaults() {
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
        return GaugeDefaults;
    }());

    var GaugeComponent = /** @class */ (function () {
        function GaugeComponent(elm, defaults) {
            this.elm = elm;
            this.defaults = defaults;
            /**
             * Called when the gauge is created
             */
            this.gaugeCreated = new core.EventEmitter();
        }
        GaugeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var options = {
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
            Object.keys(this.defaults).forEach(function (optionKey) {
                if (typeof options[optionKey] === 'undefined') {
                    options[optionKey] = _this.defaults[optionKey];
                }
            });
            Object.keys(options).forEach(function (optionKey) {
                if (typeof options[optionKey] === 'undefined') {
                    delete options[optionKey];
                }
            });
            this.gauge = Gauge__default['default'](this.elm.nativeElement, options);
            this.gaugeCreated.emit({ gauge: this.gauge });
            this.updateValue();
        };
        GaugeComponent.prototype.ngOnChanges = function (changes) {
            if (changes['value']) {
                this.updateValue();
            }
        };
        GaugeComponent.prototype.updateValue = function () {
            if (this.gauge) {
                if (this.animated) {
                    this.gauge.setValueAnimated(this.value, this.animationDuration);
                }
                else {
                    this.gauge.setValue(this.value);
                }
            }
        };
        return GaugeComponent;
    }());
    GaugeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mwl-gauge',
                    template: ''
                },] }
    ];
    GaugeComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GaugeDefaults }
    ]; };
    GaugeComponent.propDecorators = {
        dialStartAngle: [{ type: core.Input }],
        dialEndAngle: [{ type: core.Input }],
        dialRadius: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        label: [{ type: core.Input }],
        color: [{ type: core.Input }],
        showValue: [{ type: core.Input }],
        gaugeClass: [{ type: core.Input }],
        dialClass: [{ type: core.Input }],
        valueDialClass: [{ type: core.Input }],
        valueClass: [{ type: core.Input }],
        value: [{ type: core.Input }],
        animated: [{ type: core.Input }],
        animationDuration: [{ type: core.Input }],
        viewBox: [{ type: core.Input }],
        gaugeCreated: [{ type: core.Output }]
    };

    var USER_DEFAULTS = new core.InjectionToken('gauge defaults');
    function defaultsFactory(userDefaults) {
        var defaults = new GaugeDefaults();
        Object.assign(defaults, userDefaults);
        return defaults;
    }
    var GaugeModule = /** @class */ (function () {
        function GaugeModule() {
        }
        GaugeModule.forRoot = function (userDefaults) {
            if (userDefaults === void 0) { userDefaults = {}; }
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
        };
        return GaugeModule;
    }());
    GaugeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [GaugeComponent],
                    exports: [GaugeComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GaugeModule = GaugeModule;
    exports.USER_DEFAULTS = USER_DEFAULTS;
    exports.defaultsFactory = defaultsFactory;
    exports.ɵa = GaugeComponent;
    exports.ɵb = GaugeDefaults;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-gauge.umd.js.map