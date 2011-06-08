/*!
 * @depends TableLookupOscillator.js
 */

/**
 * Sine wave oscillator using a lookup table
 *
 * **Inputs**
 *
 * - Frequency
 *
 * **Outputs**
 *
 * - Sine wave
 *
 * **Parameters**
 *
 * - frequency The frequency of the oscillator.  Linked to input 0.
 *
 * @extends TableLookupOscillator
 */

/**
 * Constructor
 *
 * @param {Audiolet} audiolet The audiolet object
 * @param {Number} [frequency=440] Initial frequency
 */
var Sine = function(audiolet, frequency) {
  Sine.superclass.call(this, audiolet, Sine.TABLE, frequency); 
}
extend(Sine, TableLookupOscillator);

/**
 * toString
 *
 * @return {String}
 */
Sine.prototype.toString = function() {
  return 'Sine';
}

/**
 * Sine table
 */
Sine.TABLE = [];
for (var i = 0; i < 8192; i++) {
  Sine.TABLE.push(Math.sin(i * 2 * Math.PI / 8192));
}
