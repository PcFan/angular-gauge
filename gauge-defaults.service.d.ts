export interface GaugeOptions {
    /**
     * The angle in degrees to start the dial
     */
    dialStartAngle?: number;
    /**
     * The angle in degrees to end the dial. This MUST be less than dialStartAngle
     */
    dialEndAngle?: number;
    /**
     * The radius of the gauge
     */
    dialRadius?: number;
    /**
     * The minumum value for the gauge
     */
    min?: number;
    /**
     * The maximum value for the gauge
     */
    max?: number;
    /**
     * Function that returns a string label that will be rendered in the center. This function will be passed the current value
     */
    label?: (value: number) => string;
    /**
     * Function that returns a string color value for the gauge''s fill (value dial)
     */
    color?: (value: number) => string;
    /**
     * Whether to show the value at the center of the gauge
     */
    showValue?: boolean;
    /**
     * The CSS class of the gauge
     */
    gaugeClass?: string;
    /**
     * The CSS class of the gauge's dial
     */
    dialClass?: string;
    /**
     * The CSS class of the gauge's fill (value dial)
     */
    valueDialClass?: string;
    /**
     * 	The CSS class of the gauge's text
     */
    valueClass?: string;
    /**
     * The value of the gauge
     */
    value?: number;
    /**
     * Whether to animate changing the gauge
     */
    animated?: boolean;
    /**
     * viewBox
     */
    viewBox?: string;
    /**
     * Animation duration in seconds
     */
    animationDuration?: number;
}
export declare class GaugeDefaults implements GaugeOptions {
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
     *  viewBox
     */
    viewBox: string;
    /**
     * Whether to animate changing the gauge
     */
    animated: boolean;
    /**
     * Animation duration in seconds
     */
    animationDuration: number;
}
