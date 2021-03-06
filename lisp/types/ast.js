AstSymbol = new JS.Class({
	initialize: function(_line, _col, _name) {
	    this._name = _name;
	    this._line = _line;
	    this._col = _col;
	},
	getName: function() {
	    return this._name;
	},
	getLine: function() {
	    return this._line;
	},
	getColumn: function() {
	    return this._column;
	},
	toString: function() {
	    return this._name;
	},
	getClassName: function() {
	    return "AstSymbol";
	}
    });

AstKeyword = new JS.Class({
	initialize: function(_line, _col, _name) {
	    this._name = _name;
	    this._line = _line;
	    this._col = _col;
	},
	getName: function() {
	    return this._name;
	},
	getLine: function() {
	    return this._line;
	},
	getColumn: function() {
	    return this._column;
	},
	toString: function() {
	    return this._name;
	},
	get: function(o) {
	    var this_name = this._name;
	    return function() {
		var fn = o[this_name];
		return (typeof(fn) == "function" ? fn.apply(o, arguments) : fn);
	    };
	},
	getClassName: function() {
	    return "AstKeyword";
	}
    });

AstString = new JS.Class({
	initialize: function(_line, _col, _value) {
	    this._value = _value;
	    this._line = _line;
	    this._col = _col;
	},
	getValue: function() {
	    return this._value;
	},
	getLine: function() {
	    return this._line;
	},
	getColumn: function() {
	    return this._column;
	},
	toString: function() {
	    return "\"" + this._value + "\"";
	},
	getClassName: function() {
	    return "AstString";
	}
    });

AstInteger = new JS.Class({
	initialize: function(_line, _col, _value) {
	    this._value = _value;
	    this._line = _line;
	    this._col = _col;
	},
	getValue: function() {
	    return this._value;
	},
	getLine: function() {
	    return this._line;
	},
	getColumn: function() {
	    return this._column;
	},
	toString: function() {
	    return this._value;
	},
	getClassName: function() {
	    return "AstInteger";
	}
    });