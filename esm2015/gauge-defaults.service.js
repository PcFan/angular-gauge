export class GaugeDefaults {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlcy9hbmd1bGFyLWdhdWdlL3NyYy8iLCJzb3VyY2VzIjpbImdhdWdlLWRlZmF1bHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZBLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ0U7O1dBRUc7UUFDSCxtQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3Qjs7V0FFRztRQUNILGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCOztXQUVHO1FBQ0gsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4Qjs7V0FFRztRQUNILFFBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEI7O1dBRUc7UUFDSCxRQUFHLEdBQVcsR0FBRyxDQUFDO1FBWWxCOztXQUVHO1FBQ0gsY0FBUyxHQUFZLElBQUksQ0FBQztRQUUxQjs7V0FFRztRQUNILGVBQVUsR0FBVyxPQUFPLENBQUM7UUFFN0I7O1dBRUc7UUFDSCxjQUFTLEdBQVcsTUFBTSxDQUFDO1FBRTNCOztXQUVHO1FBQ0gsbUJBQWMsR0FBVyxPQUFPLENBQUM7UUFFakM7O1dBRUc7UUFDSCxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBT2xDOztXQUVHO1FBQ0gsWUFBTyxHQUFXLFlBQVksQ0FBQztRQUcvQjs7V0FFRztRQUNILGFBQVEsR0FBWSxLQUFLLENBQUM7SUFNNUIsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBHYXVnZU9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGFuZ2xlIGluIGRlZ3JlZXMgdG8gc3RhcnQgdGhlIGRpYWxcbiAgICovXG4gIGRpYWxTdGFydEFuZ2xlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYW5nbGUgaW4gZGVncmVlcyB0byBlbmQgdGhlIGRpYWwuIFRoaXMgTVVTVCBiZSBsZXNzIHRoYW4gZGlhbFN0YXJ0QW5nbGVcbiAgICovXG4gIGRpYWxFbmRBbmdsZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHJhZGl1cyBvZiB0aGUgZ2F1Z2VcbiAgICovXG4gIGRpYWxSYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW51bXVtIHZhbHVlIGZvciB0aGUgZ2F1Z2VcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gdmFsdWUgZm9yIHRoZSBnYXVnZVxuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcgbGFiZWwgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGluIHRoZSBjZW50ZXIuIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWQgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICovXG4gIGxhYmVsPzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGNvbG9yIHZhbHVlIGZvciB0aGUgZ2F1Z2UnJ3MgZmlsbCAodmFsdWUgZGlhbClcbiAgICovXG4gIGNvbG9yPzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IHRoZSB2YWx1ZSBhdCB0aGUgY2VudGVyIG9mIHRoZSBnYXVnZVxuICAgKi9cbiAgc2hvd1ZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBvZiB0aGUgZ2F1Z2VcbiAgICovXG4gIGdhdWdlQ2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3Mgb2YgdGhlIGdhdWdlJ3MgZGlhbFxuICAgKi9cbiAgZGlhbENsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG9mIHRoZSBnYXVnZSdzIGZpbGwgKHZhbHVlIGRpYWwpXG4gICAqL1xuICB2YWx1ZURpYWxDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogXHRUaGUgQ1NTIGNsYXNzIG9mIHRoZSBnYXVnZSdzIHRleHRcbiAgICovXG4gIHZhbHVlQ2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZ2F1Z2VcbiAgICovXG4gIHZhbHVlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGFuaW1hdGUgY2hhbmdpbmcgdGhlIGdhdWdlXG4gICAqL1xuICBhbmltYXRlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHZpZXdCb3hcbiAgICovXG4gICB2aWV3Qm94Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYXVnZURlZmF1bHRzIGltcGxlbWVudHMgR2F1Z2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBhbmdsZSBpbiBkZWdyZWVzIHRvIHN0YXJ0IHRoZSBkaWFsXG4gICAqL1xuICBkaWFsU3RhcnRBbmdsZTogbnVtYmVyID0gMTM1O1xuXG4gIC8qKlxuICAgKiBUaGUgYW5nbGUgaW4gZGVncmVlcyB0byBlbmQgdGhlIGRpYWwuIFRoaXMgTVVTVCBiZSBsZXNzIHRoYW4gZGlhbFN0YXJ0QW5nbGVcbiAgICovXG4gIGRpYWxFbmRBbmdsZTogbnVtYmVyID0gNDU7XG5cbiAgLyoqXG4gICAqIFRoZSByYWRpdXMgb2YgdGhlIGdhdWdlXG4gICAqL1xuICBkaWFsUmFkaXVzOiBudW1iZXIgPSA0MDtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gdmFsdWUgZm9yIHRoZSBnYXVnZVxuICAgKi9cbiAgbWluOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgdGhlIGdhdWdlXG4gICAqL1xuICBtYXg6IG51bWJlciA9IDEwMDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGxhYmVsIHRoYXQgd2lsbCBiZSByZW5kZXJlZCBpbiB0aGUgY2VudGVyLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIHRoZSBjdXJyZW50IHZhbHVlXG4gICAqL1xuICBsYWJlbDogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGNvbG9yIHZhbHVlIGZvciB0aGUgZ2F1Z2UnJ3MgZmlsbCAodmFsdWUgZGlhbClcbiAgICovXG4gIGNvbG9yOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIHZhbHVlIGF0IHRoZSBjZW50ZXIgb2YgdGhlIGdhdWdlXG4gICAqL1xuICBzaG93VmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG9mIHRoZSBnYXVnZVxuICAgKi9cbiAgZ2F1Z2VDbGFzczogc3RyaW5nID0gJ2dhdWdlJztcblxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBvZiB0aGUgZ2F1Z2UncyBkaWFsXG4gICAqL1xuICBkaWFsQ2xhc3M6IHN0cmluZyA9ICdkaWFsJztcblxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBvZiB0aGUgZ2F1Z2UncyBmaWxsICh2YWx1ZSBkaWFsKVxuICAgKi9cbiAgdmFsdWVEaWFsQ2xhc3M6IHN0cmluZyA9ICd2YWx1ZSc7XG5cbiAgLyoqXG4gICAqIFx0VGhlIENTUyBjbGFzcyBvZiB0aGUgZ2F1Z2UncyB0ZXh0XG4gICAqL1xuICB2YWx1ZUNsYXNzOiBzdHJpbmcgPSAndmFsdWUtdGV4dCc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZ2F1Z2VcbiAgICovXG4gIHZhbHVlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICB2aWV3Qm94XG4gICAqL1xuICB2aWV3Qm94OiBzdHJpbmcgPSBcIjAgMCAxMDAgNTBcIjtcblxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGFuaW1hdGUgY2hhbmdpbmcgdGhlIGdhdWdlXG4gICAqL1xuICBhbmltYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbn1cbiJdfQ==