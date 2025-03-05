(function () {

		document.querySelector("head").insertAdjacentHTML('afterbegin', 
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		// Standard Light
		'<link rel="shortcut icon" href="favicon.ico">' +
		'<link rel="icon" href="favicon.ico">' +
		'<link rel="favicon" href="favicon.ico">' +
		// Standard Dark
		'<link rel="shortcut icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		// High Contrast Light
		'<link rel="shortcut icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="favicon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		// High Contrast Dark
		'<link rel="shortcut icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' 
		);
	if (getKey('tm-default-page') === '-1') {
		insertKey('tm-default-page', 'processes' );
	}
		/* Active Theme */
		document.getElementById("AppTheme" + ['01','02','03','04'][ ['auto','auto-dark','light','dark'].indexOf(getKey('color-scheme')) ]).checked=true;
		$('body').attr("page",  'calculator');


})();




/* Section Changing Functions */

function Tab0() {
		$('body').attr("page", "calculator");
}

function Tab1() {
		$('body').attr("page", "convertor");
}

function Tab2() {
		$('body').attr("page", "settings");
}



/** Calculator **/

/* Group 1 */
function square() {
    let display = document.getElementById("display");
    display.value += "^2";
}

function cube() {
    let display = document.getElementById("display");
    display.value += "^3";
}
 
function pi() {
    let display = document.getElementById("display");
    display.value += "pi";
}
 
function e() {
    let display = document.getElementById("display");
    display.value += "e";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
 
function clearValue() {
    let display = document.getElementById("display");
    display.value = "";
}
 
 
/* Group 2 */
function abs() {
    let display = document.getElementById("display");
    display.value += "abs(";
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}

function parenOpen() {
    let display = document.getElementById("display");
    display.value += "(";
}
function parenClose() {
    let display = document.getElementById("display");
    display.value += ")";
}

function factorial() {
    let display = document.getElementById("display");
    display.value += "!";
}

function division() {
    let display = document.getElementById("display");
    display.value += "/";
}

/* Group 3 */
 function exp() {
    let display = document.getElementById("display");
    display.value += "exp(";
}

function base10Log() {
    let display = document.getElementById("display");
    display.value += " log(";
}

function digit7() {
    let display = document.getElementById("display");
    display.value += "7";
}
function digit8() {
    let display = document.getElementById("display");
    display.value += "8";
}

function digit9() {
    let display = document.getElementById("display");
    display.value += "9";
}

function multiply() {
    let display = document.getElementById("display");
    display.value += "*";
}

/* Group 4 */
 function twoPower() {
    let display = document.getElementById("display");
    display.value += "2^";
}

function tenPower() {
    let display = document.getElementById("display");
    display.value += "10^";
}

function digit4() {
    let display = document.getElementById("display");
    display.value += "4";
}
function digit5() {
    let display = document.getElementById("display");
    display.value += "5";
}

function digit6() {
    let display = document.getElementById("display");
    display.value += "6";
}

function subtract() {
    let display = document.getElementById("display");
    display.value += "-";
}

/* Group 5 */
 function log2() {
    let display = document.getElementById("display");
    display.value += "log2(";
}

function log10() {
    let display = document.getElementById("display");
    display.value += "log10(";
}

function digit1() {
    let display = document.getElementById("display");
    display.value += "1";
}
function digit2() {
    let display = document.getElementById("display");
    display.value += "2";
}

function digit3() {
    let display = document.getElementById("display");
    display.value += "3";
}

function addition() {
    let display = document.getElementById("display");
    display.value += "+";
}

/* Group 5 */ 
function modulo() {
    let display = document.getElementById("display");
    display.value += "%";
}

function power() {
    let display = document.getElementById("display");
    display.value += "^";
}

function digitComma() {
    let display = document.getElementById("display");
    display.value += ",";
}

function digit0() {
    let display = document.getElementById("display");
    display.value += "0";
}

function digitFS() {
    let display = document.getElementById("display");
    display.value += ".";
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
 
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

/* Menu */
function sin() {
    let display = document.getElementById("display");
    display.value += "sin(";
}

function cos() {
    let display = document.getElementById("display");
    display.value += "cos(";
}

function tan() {
    let display = document.getElementById("display");
    display.value += "tan(";
}

function sec() {
    let display = document.getElementById("display");
    display.value += "sec(";
}

function csc() {
    let display = document.getElementById("display");
    display.value += "csc(";
}

function cot() {
    let display = document.getElementById("display");
    display.value += "cot(";
}

function asin() {
    let display = document.getElementById("display");
    display.value += "asin(";
}

function acos() {
    let display = document.getElementById("display");
    display.value += "acos(";
}

function atan() {
    let display = document.getElementById("display");
    display.value += "atan(";
}

function asec() {
    let display = document.getElementById("display");
    display.value += "asec(";
}

function acsc() {
    let display = document.getElementById("display");
    display.value += "acsc(";
}

function acot() {
    let display = document.getElementById("display");
    display.value += "acot(";
}

/** Convertor **/
/* Length */
function Convertor01_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor01_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor01_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor01_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor01_03");
	} else {
		var display = document.getElementById("Convertor01_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor01_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor01_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor01_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Surface Area */
function Convertor02_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor02_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor02_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor02_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor02_03");
	} else {
		var display = document.getElementById("Convertor02_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor02_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor02_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor02_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Volume */
function Convertor03_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor03_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor03_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor03_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor03_03");
	} else {
		var display = document.getElementById("Convertor03_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor03_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor03_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor03_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Angle */
function Convertor04_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor04_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor04_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor04_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor04_03");
	} else {
		var display = document.getElementById("Convertor04_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor04_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor04_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor04_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Time */
function Convertor05_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor05_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor05_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor05_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor05_03");
	} else {
		var display = document.getElementById("Convertor05_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor05_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor05_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor05_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Frequency */
function Convertor06_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor06_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor06_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor06_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor06_03");
	} else {
		var display = document.getElementById("Convertor06_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor06_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor06_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor06_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Mass */
function Convertor07_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor07_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor07_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor07_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor07_03");
	} else {
		var display = document.getElementById("Convertor07_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor07_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor07_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor07_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Temperature */
function Convertor08_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor08_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor08_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor08_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor08_03");
	} else {
		var display = document.getElementById("Convertor08_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor08_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor08_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor08_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Force */
function Convertor09_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor09_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor09_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor09_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor09_03");
	} else {
		var display = document.getElementById("Convertor09_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor09_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor09_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor09_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Energy */
function Convertor10_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor10_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor10_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor10_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor10_03");
	} else {
		var display = document.getElementById("Convertor10_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor10_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor10_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor10_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Power */
function Convertor11_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor11_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor11_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor11_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor11_03");
	} else {
		var display = document.getElementById("Convertor11_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor11_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor11_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor11_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Pressure */
function Convertor12_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor12_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor12_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor12_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor12_03");
	} else {
		var display = document.getElementById("Convertor12_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor12_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor12_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor12_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}

/* Data */
function Convertor13_Result(inv=false) {
	if (!(inv)) {
		var display = document.getElementById("Convertor13_01");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor13_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor13_04 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor13_03");
	} else {
		var display = document.getElementById("Convertor13_03");
		var fromV = document.querySelector(".cpe-dropdown.cpe-select#Convertor13_04 .cpe-input > .cpe-select__value").getAttribute('value')
		var toV = document.querySelector(".cpe-dropdown.cpe-select#Convertor13_02 .cpe-input > .cpe-select__value").getAttribute('value');
		var display2 = document.getElementById("Convertor13_01");
	}
    var expression = display.value + ' ' + fromV + ' to ' + toV;
    var result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
 
        result = math.evaluate(expression);
        display2.value = result.toString().split(' ')[0];
    } catch (error) {
        display2.value = "Error";
    }

}