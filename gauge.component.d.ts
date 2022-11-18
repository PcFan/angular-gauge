import { ElementRef, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { GaugeDefaults, GaugeOptions } from './gauge-defaults.service';
export declare class GaugeComponent implements AfterViewInit, OnChanges, GaugeOptions {
    private elm;
    private defaults;
    /**
     * The angle in degrees to start the dial
     */
    dialStartAngle: number;
    /**
     * The angle in degrees to end the dial. This MUST be less than dialStartAngle
     */
    dialEndAngle: number;
    /**
     * The radius of the gauge
     */
    dialRadius: number;
    /**
     * The minimum value for the gauge
     */
    min: number;
    /**
     * The maximum value for the gauge
     */
    max: number;
    /**
     * Function that returns a string label that will be rendered in the center. This function will be passed the current value
     */
    label: (value: number) => string;
    /**
     * Function that returns a string color value for the gauge''s fill (value dial)
     */
    color: (value: number) => string;
    /**
     * Whether to show the value at the center of the gauge
     */
    showValue: boolean;
    /**
     * The CSS class of the gauge
     */
    gaugeClass: string;
    /**
     * The CSS class of the gauge's dial
     */
    dialClass: string;
    /**
     * The CSS class of the gauge's fill (value dial)
     */
    valueDialClass: string;
    /**
     * 	The CSS class of the gauge's text
     */
    valueClass: string;
    /**
     * The value of the gauge
     */
    value: number;
    /**
     * Whether to animate changing the gauge
     */
    animated: boolean;
    /**
     * Animation duration in seconds
     */
    animationDuration: number;
    /**
    * Viewbox
    */
    viewBox: string;
    /**
     * Called when the gauge is created
     */
    gaugeCreated: EventEmitter<{
        gauge: any;
    }>;
    private gauge;
    constructor(elm: ElementRef, defaults: GaugeDefaults);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateValue;
}
