
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = A2(_elm_lang$core$List_ops['::'], _p22._0, taken);
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return _elm_lang$core$Native_List.fromArray(
											[_p23._1._0, _p23._1._1._0]);
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return _elm_lang$core$Native_List.fromArray(
												[_p23._1._0, _p23._1._1._0, _p23._1._1._1._0]);
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? A2(
												_elm_lang$core$List_ops['::'],
												_p26,
												A2(
													_elm_lang$core$List_ops['::'],
													_p27,
													A2(
														_elm_lang$core$List_ops['::'],
														_p28,
														A2(
															_elm_lang$core$List_ops['::'],
															_p25,
															A2(_elm_lang$core$List$takeTailRec, n - 4, _p24))))) : A2(
												_elm_lang$core$List_ops['::'],
												_p26,
												A2(
													_elm_lang$core$List_ops['::'],
													_p27,
													A2(
														_elm_lang$core$List_ops['::'],
														_p28,
														A2(
															_elm_lang$core$List_ops['::'],
															_p25,
															A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)))));
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return _elm_lang$core$Native_List.fromArray(
					[_p23._1._0]);
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		currentSend(incomingValue);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	
	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}	
	
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function badCustom(msg)
{
	return { tag: 'custom', msg: msg };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'custom':
				return 'A `customDecoder` failed'
					+ (context === '_' ? '' : ' at ' + context)
					+ ' with the message: ' + problem.msg;

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badCustom(realResult._0);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[i - 1],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$dom$Native_Dom = function() {

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(on(document)),
	onWindow: F3(on(window)),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: undefined };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};

			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = document.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$navigation$Native_Navigation = function() {

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


return {
	go: go,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
	return _elm_lang$core$Process$spawn(
		A3(
			_elm_lang$dom$Dom_LowLevel$onWindow,
			'popstate',
			_elm_lang$core$Json_Decode$value,
			function (_p0) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			task1,
			function (_p1) {
				return task2;
			});
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p2) {
			var _p3 = _p2;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p3._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p4 = cmd;
		switch (_p4.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p4._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$pushState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
			default:
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$replaceState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
		}
	});
var _elm_lang$navigation$Navigation$updateHelp = F2(
	function (func, _p5) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: _p6._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, func, _p6._1)
		};
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, process: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p7) {
		var _p8 = _p7;
		var _p10 = _p8.process;
		var stepState = function () {
			var _p9 = {ctor: '_Tuple2', _0: subs, _1: _p10};
			_v4_2:
			do {
				if (_p9._0.ctor === '[]') {
					if (_p9._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$core$Process$kill(_p9._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v4_2;
					}
				} else {
					if (_p9._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$navigation$Navigation$spawnPopState(router),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(pid)));
							});
					} else {
						break _v4_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p10));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
var _elm_lang$navigation$Navigation$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$navigation$Navigation$Change = function (a) {
	return {ctor: 'Change', _0: a};
};
var _elm_lang$navigation$Navigation$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_lang$navigation$Navigation$makeParser = _elm_lang$navigation$Navigation$Parser;
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p11, myCmd) {
		var _p12 = myCmd;
		switch (_p12.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p12._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p12._0);
			default:
				return _elm_lang$navigation$Navigation$Modify(_p12._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (_p13, stuff) {
		var _p14 = _p13;
		var _p16 = _p14._0;
		var location = _elm_lang$navigation$Native_Navigation.getLocation(
			{ctor: '_Tuple0'});
		var init = function (flags) {
			return A2(
				_elm_lang$navigation$Navigation$updateHelp,
				_elm_lang$navigation$Navigation$UserMsg,
				A2(
					stuff.init,
					flags,
					_p16(location)));
		};
		var view = function (model) {
			return A2(
				_elm_lang$html$Html_App$map,
				_elm_lang$navigation$Navigation$UserMsg,
				stuff.view(model));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(_elm_lang$navigation$Navigation$Change)),
						A2(
						_elm_lang$core$Platform_Sub$map,
						_elm_lang$navigation$Navigation$UserMsg,
						stuff.subscriptions(model))
					]));
		};
		var update = F2(
			function (msg, model) {
				return A2(
					_elm_lang$navigation$Navigation$updateHelp,
					_elm_lang$navigation$Navigation$UserMsg,
					function () {
						var _p15 = msg;
						if (_p15.ctor === 'Change') {
							return A2(
								stuff.urlUpdate,
								_p16(_p15._0),
								model);
						} else {
							return A2(stuff.update, _p15._0, model);
						}
					}());
			});
		return _elm_lang$html$Html_App$programWithFlags(
			{init: init, view: view, update: update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$program = F2(
	function (parser, stuff) {
		return A2(
			_elm_lang$navigation$Navigation$programWithFlags,
			parser,
			_elm_lang$core$Native_Utils.update(
				stuff,
				{
					init: function (_p17) {
						return stuff.init;
					}
				}));
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p18) {
		var _p19 = _p18;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p20) {
				return func(
					_p19._0(_p20));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

//import Dict, List, Maybe, Native.Scheduler //

var _evancz$elm_http$Native_Http = function() {

function send(settings, request)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var req = new XMLHttpRequest();

		// start
		if (settings.onStart.ctor === 'Just')
		{
			req.addEventListener('loadStart', function() {
				var task = settings.onStart._0;
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// progress
		if (settings.onProgress.ctor === 'Just')
		{
			req.addEventListener('progress', function(event) {
				var progress = !event.lengthComputable
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({
						loaded: event.loaded,
						total: event.total
					});
				var task = settings.onProgress._0(progress);
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// end
		req.addEventListener('error', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawNetworkError' }));
		});

		req.addEventListener('timeout', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawTimeout' }));
		});

		req.addEventListener('load', function() {
			return callback(_elm_lang$core$Native_Scheduler.succeed(toResponse(req)));
		});

		req.open(request.verb, request.url, true);

		// set all the headers
		function setHeader(pair) {
			req.setRequestHeader(pair._0, pair._1);
		}
		A2(_elm_lang$core$List$map, setHeader, request.headers);

		// set the timeout
		req.timeout = settings.timeout;

		// enable this withCredentials thing
		req.withCredentials = settings.withCredentials;

		// ask for a specific MIME type for the response
		if (settings.desiredResponseType.ctor === 'Just')
		{
			req.overrideMimeType(settings.desiredResponseType._0);
		}

		// actuall send the request
		if(request.body.ctor === "BodyFormData")
		{
			req.send(request.body.formData)
		}
		else
		{
			req.send(request.body._0);
		}

		return function() {
			req.abort();
		};
	});
}


// deal with responses

function toResponse(req)
{
	var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
	var response = tag === 'Blob' ? req.response : req.responseText;
	return {
		status: req.status,
		statusText: req.statusText,
		headers: parseHeaders(req.getAllResponseHeaders()),
		url: req.responseURL,
		value: { ctor: tag, _0: response }
	};
}


function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


function multipart(dataList)
{
	var formData = new FormData();

	while (dataList.ctor !== '[]')
	{
		var data = dataList._0;
		if (data.ctor === 'StringData')
		{
			formData.append(data._0, data._1);
		}
		else
		{
			var fileName = data._1.ctor === 'Nothing'
				? undefined
				: data._1._0;
			formData.append(data._0, data._2, fileName);
		}
		dataList = dataList._1;
	}

	return { ctor: 'BodyFormData', formData: formData };
}


function uriEncode(string)
{
	return encodeURIComponent(string);
}

function uriDecode(string)
{
	return decodeURIComponent(string);
}

return {
	send: F2(send),
	multipart: multipart,
	uriEncode: uriEncode,
	uriDecode: uriDecode
};

}();

var _evancz$elm_http$Http$send = _evancz$elm_http$Native_Http.send;
var _evancz$elm_http$Http$defaultSettings = {timeout: 0, onStart: _elm_lang$core$Maybe$Nothing, onProgress: _elm_lang$core$Maybe$Nothing, desiredResponseType: _elm_lang$core$Maybe$Nothing, withCredentials: false};
var _evancz$elm_http$Http$multipart = _evancz$elm_http$Native_Http.multipart;
var _evancz$elm_http$Http$uriDecode = _evancz$elm_http$Native_Http.uriDecode;
var _evancz$elm_http$Http$uriEncode = _evancz$elm_http$Native_Http.uriEncode;
var _evancz$elm_http$Http$queryEscape = function (string) {
	return A2(
		_elm_lang$core$String$join,
		'+',
		A2(
			_elm_lang$core$String$split,
			'%20',
			_evancz$elm_http$Http$uriEncode(string)));
};
var _evancz$elm_http$Http$queryPair = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_evancz$elm_http$Http$queryEscape(_p1._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_evancz$elm_http$Http$queryEscape(_p1._1)));
};
var _evancz$elm_http$Http$url = F2(
	function (baseUrl, args) {
		var _p2 = args;
		if (_p2.ctor === '[]') {
			return baseUrl;
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'?',
					A2(
						_elm_lang$core$String$join,
						'&',
						A2(_elm_lang$core$List$map, _evancz$elm_http$Http$queryPair, args))));
		}
	});
var _evancz$elm_http$Http$Request = F4(
	function (a, b, c, d) {
		return {verb: a, headers: b, url: c, body: d};
	});
var _evancz$elm_http$Http$Settings = F5(
	function (a, b, c, d, e) {
		return {timeout: a, onStart: b, onProgress: c, desiredResponseType: d, withCredentials: e};
	});
var _evancz$elm_http$Http$Response = F5(
	function (a, b, c, d, e) {
		return {status: a, statusText: b, headers: c, url: d, value: e};
	});
var _evancz$elm_http$Http$TODO_implement_blob_in_another_library = {ctor: 'TODO_implement_blob_in_another_library'};
var _evancz$elm_http$Http$TODO_implement_file_in_another_library = {ctor: 'TODO_implement_file_in_another_library'};
var _evancz$elm_http$Http$BodyBlob = function (a) {
	return {ctor: 'BodyBlob', _0: a};
};
var _evancz$elm_http$Http$BodyFormData = {ctor: 'BodyFormData'};
var _evancz$elm_http$Http$ArrayBuffer = {ctor: 'ArrayBuffer'};
var _evancz$elm_http$Http$BodyString = function (a) {
	return {ctor: 'BodyString', _0: a};
};
var _evancz$elm_http$Http$string = _evancz$elm_http$Http$BodyString;
var _evancz$elm_http$Http$Empty = {ctor: 'Empty'};
var _evancz$elm_http$Http$empty = _evancz$elm_http$Http$Empty;
var _evancz$elm_http$Http$FileData = F3(
	function (a, b, c) {
		return {ctor: 'FileData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$BlobData = F3(
	function (a, b, c) {
		return {ctor: 'BlobData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$blobData = _evancz$elm_http$Http$BlobData;
var _evancz$elm_http$Http$StringData = F2(
	function (a, b) {
		return {ctor: 'StringData', _0: a, _1: b};
	});
var _evancz$elm_http$Http$stringData = _evancz$elm_http$Http$StringData;
var _evancz$elm_http$Http$Blob = function (a) {
	return {ctor: 'Blob', _0: a};
};
var _evancz$elm_http$Http$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _evancz$elm_http$Http$RawNetworkError = {ctor: 'RawNetworkError'};
var _evancz$elm_http$Http$RawTimeout = {ctor: 'RawTimeout'};
var _evancz$elm_http$Http$BadResponse = F2(
	function (a, b) {
		return {ctor: 'BadResponse', _0: a, _1: b};
	});
var _evancz$elm_http$Http$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _evancz$elm_http$Http$handleResponse = F2(
	function (handle, response) {
		if ((_elm_lang$core$Native_Utils.cmp(200, response.status) < 1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) {
			var _p3 = response.value;
			if (_p3.ctor === 'Text') {
				return handle(_p3._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload('Response body is a blob, expecting a string.'));
			}
		} else {
			return _elm_lang$core$Task$fail(
				A2(_evancz$elm_http$Http$BadResponse, response.status, response.statusText));
		}
	});
var _evancz$elm_http$Http$NetworkError = {ctor: 'NetworkError'};
var _evancz$elm_http$Http$Timeout = {ctor: 'Timeout'};
var _evancz$elm_http$Http$promoteError = function (rawError) {
	var _p4 = rawError;
	if (_p4.ctor === 'RawTimeout') {
		return _evancz$elm_http$Http$Timeout;
	} else {
		return _evancz$elm_http$Http$NetworkError;
	}
};
var _evancz$elm_http$Http$getString = function (url) {
	var request = {
		verb: 'GET',
		headers: _elm_lang$core$Native_List.fromArray(
			[]),
		url: url,
		body: _evancz$elm_http$Http$empty
	};
	return A2(
		_elm_lang$core$Task$andThen,
		A2(
			_elm_lang$core$Task$mapError,
			_evancz$elm_http$Http$promoteError,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request)),
		_evancz$elm_http$Http$handleResponse(_elm_lang$core$Task$succeed));
};
var _evancz$elm_http$Http$fromJson = F2(
	function (decoder, response) {
		var decode = function (str) {
			var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
			if (_p5.ctor === 'Ok') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload(_p5._0));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			A2(_elm_lang$core$Task$mapError, _evancz$elm_http$Http$promoteError, response),
			_evancz$elm_http$Http$handleResponse(decode));
	});
var _evancz$elm_http$Http$get = F2(
	function (decoder, url) {
		var request = {
			verb: 'GET',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: _evancz$elm_http$Http$empty
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});
var _evancz$elm_http$Http$post = F3(
	function (decoder, url, body) {
		var request = {
			verb: 'POST',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: body
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});

var _evancz$url_parser$UrlParser$oneOfHelp = F3(
	function (choices, chunks, formatter) {
		oneOfHelp:
		while (true) {
			var _p0 = choices;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Result$Err('Tried many parsers, but none of them worked!');
			} else {
				var _p1 = A2(_p0._0._0, chunks, formatter);
				if (_p1.ctor === 'Err') {
					var _v2 = _p0._1,
						_v3 = chunks,
						_v4 = formatter;
					choices = _v2;
					chunks = _v3;
					formatter = _v4;
					continue oneOfHelp;
				} else {
					return _elm_lang$core$Result$Ok(_p1._0);
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Chunks = F2(
	function (a, b) {
		return {seen: a, rest: b};
	});
var _evancz$url_parser$UrlParser$parse = F3(
	function (input, _p2, url) {
		var _p3 = _p2;
		var _p4 = A2(
			_p3._0,
			A2(
				_evancz$url_parser$UrlParser$Chunks,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(_elm_lang$core$String$split, '/', url)),
			input);
		if (_p4.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p4._0);
		} else {
			var _p7 = _p4._0._1;
			var _p6 = _p4._0._0.rest;
			var _p5 = _p6;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Result$Ok(_p7);
			} else {
				if ((_p5._0 === '') && (_p5._1.ctor === '[]')) {
					return _elm_lang$core$Result$Ok(_p7);
				} else {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'The parser worked, but /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$String$join, '/', _p6),
								' was left over.')));
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		F2(
			function (_p8, result) {
				var _p9 = _p8;
				var _p12 = _p9.rest;
				var _p10 = _p12;
				if (_p10.ctor === '[]') {
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', str));
				} else {
					var _p11 = _p10._0;
					return _elm_lang$core$Native_Utils.eq(_p11, str) ? _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: A2(
								_evancz$url_parser$UrlParser$Chunks,
								A2(_elm_lang$core$List_ops['::'], _p11, _p9.seen),
								_p10._1),
							_1: result
						}) : _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Wanted /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								str,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' but got /',
									A2(_elm_lang$core$String$join, '/', _p12)))));
				}
			}));
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (_p13, func) {
					var _p14 = _p13;
					var _p15 = _p14.rest;
					if (_p15.ctor === '[]') {
						return _elm_lang$core$Result$Err(
							A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', tipe));
					} else {
						var _p17 = _p15._0;
						var _p16 = stringToSomething(_p17);
						if (_p16.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								{
									ctor: '_Tuple2',
									_0: A2(
										_evancz$url_parser$UrlParser$Chunks,
										A2(_elm_lang$core$List_ops['::'], _p17, _p14.seen),
										_p15._1),
									_1: func(_p16._0)
								});
						} else {
							return _elm_lang$core$Result$Err(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Parsing `',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p17,
										A2(_elm_lang$core$Basics_ops['++'], '` went wrong: ', _p16._0))));
						}
					}
				}));
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					return A2(
						_elm_lang$core$Result$andThen,
						A2(_p20._0, chunks, func),
						function (_p22) {
							var _p23 = _p22;
							return A2(_p21._0, _p23._0, _p23._1);
						});
				}));
	});
var _evancz$url_parser$UrlParser$oneOf = function (choices) {
	return _evancz$url_parser$UrlParser$Parser(
		_evancz$url_parser$UrlParser$oneOfHelp(choices));
};
var _evancz$url_parser$UrlParser$format = F2(
	function (input, _p24) {
		var _p25 = _p24;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					var _p26 = A2(_p25._0, chunks, input);
					if (_p26.ctor === 'Err') {
						return _elm_lang$core$Result$Err(_p26._0);
					} else {
						return _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: _p26._0._0,
								_1: func(_p26._0._1)
							});
					}
				}));
	});

var _krisajenkins$remotedata$RemoteData$isFailure = function (data) {
	var _p0 = data;
	if (_p0.ctor === 'Failure') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	var _p1 = data;
	if (_p1.ctor === 'Success') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$withDefault = F2(
	function ($default, data) {
		var _p2 = data;
		if (_p2.ctor === 'Success') {
			return _p2._0;
		} else {
			return $default;
		}
	});
var _krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _krisajenkins$remotedata$RemoteData$pure = _krisajenkins$remotedata$RemoteData$Success;
var _krisajenkins$remotedata$RemoteData$prism = {
	reverseGet: _krisajenkins$remotedata$RemoteData$Success,
	getOption: function (data) {
		var _p3 = data;
		if (_p3.ctor === 'Success') {
			return _elm_lang$core$Maybe$Just(_p3._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _krisajenkins$remotedata$RemoteData$asCmd = function (task) {
	return A3(_elm_lang$core$Task$perform, _krisajenkins$remotedata$RemoteData$Failure, _krisajenkins$remotedata$RemoteData$Success, task);
};
var _krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	var _p4 = result;
	if (_p4.ctor === 'Err') {
		return _krisajenkins$remotedata$RemoteData$Failure(_p4._0);
	} else {
		return _krisajenkins$remotedata$RemoteData$Success(_p4._0);
	}
};
var _krisajenkins$remotedata$RemoteData$fromTask = function (_p5) {
	return A2(
		_elm_lang$core$Task$map,
		_krisajenkins$remotedata$RemoteData$fromResult,
		_elm_lang$core$Task$toResult(_p5));
};
var _krisajenkins$remotedata$RemoteData$Loading = {ctor: 'Loading'};
var _krisajenkins$remotedata$RemoteData$NotAsked = {ctor: 'NotAsked'};
var _krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		var _p6 = data;
		switch (_p6.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					f(_p6._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p6._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$toMaybe = function (_p7) {
	return A2(
		_krisajenkins$remotedata$RemoteData$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_krisajenkins$remotedata$RemoteData$map, _elm_lang$core$Maybe$Just, _p7));
};
var _krisajenkins$remotedata$RemoteData_ops = _krisajenkins$remotedata$RemoteData_ops || {};
_krisajenkins$remotedata$RemoteData_ops['<$>'] = _krisajenkins$remotedata$RemoteData$map;
var _krisajenkins$remotedata$RemoteData$mapFailure = F2(
	function (f, data) {
		var _p8 = data;
		switch (_p8.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(_p8._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					f(_p8._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$mapBoth = F3(
	function (successFn, errorFn, data) {
		var _p9 = data;
		switch (_p9.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					successFn(_p9._0));
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					errorFn(_p9._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$andThen = F2(
	function (data, f) {
		var _p10 = data;
		switch (_p10.ctor) {
			case 'Success':
				return f(_p10._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p10._0);
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Loading;
		}
	});
var _krisajenkins$remotedata$RemoteData$apply = F2(
	function (wrappedFunction, wrappedValue) {
		var _p11 = {ctor: '_Tuple2', _0: wrappedFunction, _1: wrappedValue};
		switch (_p11._0.ctor) {
			case 'Success':
				switch (_p11._1.ctor) {
					case 'Success':
						return _krisajenkins$remotedata$RemoteData$Success(
							_p11._0._0(_p11._1._0));
					case 'Loading':
						return _krisajenkins$remotedata$RemoteData$Loading;
					case 'NotAsked':
						return _krisajenkins$remotedata$RemoteData$NotAsked;
					default:
						return _krisajenkins$remotedata$RemoteData$Failure(_p11._1._0);
				}
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p11._0._0);
		}
	});
var _krisajenkins$remotedata$RemoteData_ops = _krisajenkins$remotedata$RemoteData_ops || {};
_krisajenkins$remotedata$RemoteData_ops['<*>'] = _krisajenkins$remotedata$RemoteData$apply;
var _krisajenkins$remotedata$RemoteData$append = F2(
	function (a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData_ops['<*>'],
			A2(
				_krisajenkins$remotedata$RemoteData_ops['<$>'],
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				a),
			b);
	});
var _krisajenkins$remotedata$RemoteData$update = F2(
	function (f, remoteData) {
		var _p12 = remoteData;
		switch (_p12.ctor) {
			case 'Success':
				var _p13 = f(_p12._0);
				var first = _p13._0;
				var second = _p13._1;
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Success(first),
					_1: second
				};
			case 'NotAsked':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$NotAsked, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Loading':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Failure(_p12._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _lukewestby$elm_http_builder$HttpBuilder$appendQuery = F3(
	function (url, key, value) {
		return A2(_elm_lang$core$String$contains, '?', url) ? A2(
			_elm_lang$core$Basics_ops['++'],
			url,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'&',
				A2(
					_elm_lang$core$Basics_ops['++'],
					key,
					A2(_elm_lang$core$Basics_ops['++'], '=', value)))) : A2(
			_elm_lang$core$Basics_ops['++'],
			url,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'?',
				A2(
					_elm_lang$core$Basics_ops['++'],
					key,
					A2(_elm_lang$core$Basics_ops['++'], '=', value))));
	});
var _lukewestby$elm_http_builder$HttpBuilder$replace = F2(
	function (old, $new) {
		return function (_p0) {
			return A2(
				_elm_lang$core$String$join,
				$new,
				A2(_elm_lang$core$String$split, old, _p0));
		};
	});
var _lukewestby$elm_http_builder$HttpBuilder$queryEscape = function (_p1) {
	return A3(
		_lukewestby$elm_http_builder$HttpBuilder$replace,
		'%20',
		'+',
		_evancz$elm_http$Http$uriEncode(_p1));
};
var _lukewestby$elm_http_builder$HttpBuilder$queryPair = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._1)));
};
var _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded = function (args) {
	return A2(
		_elm_lang$core$String$join,
		'&',
		A2(_elm_lang$core$List$map, _lukewestby$elm_http_builder$HttpBuilder$queryPair, args));
};
var _lukewestby$elm_http_builder$HttpBuilder$toSettings = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _lukewestby$elm_http_builder$HttpBuilder$toRequest = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _lukewestby$elm_http_builder$HttpBuilder$appendCacheBusterToUrl = F2(
	function (request, time) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				url: A3(
					_lukewestby$elm_http_builder$HttpBuilder$appendQuery,
					request.url,
					'_',
					_elm_lang$core$Basics$toString(time))
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$jsonReader = F2(
	function (decoder, value) {
		var _p8 = value;
		if (_p8.ctor === 'Text') {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p8._0);
		} else {
			return _elm_lang$core$Result$Err('JSON reader does not support given body type.');
		}
	});
var _lukewestby$elm_http_builder$HttpBuilder$stringReader = function (value) {
	var _p9 = value;
	if (_p9.ctor === 'Text') {
		return _elm_lang$core$Result$Ok(_p9._0);
	} else {
		return _elm_lang$core$Result$Err('String reader does not support given body type.');
	}
};
var _lukewestby$elm_http_builder$HttpBuilder$url = _evancz$elm_http$Http$url;
var _lukewestby$elm_http_builder$HttpBuilder$defaultInternals = {cacheBuster: false, zeroStatusAllowed: false};
var _lukewestby$elm_http_builder$HttpBuilder$Internals = F2(
	function (a, b) {
		return {cacheBuster: a, zeroStatusAllowed: b};
	});
var _lukewestby$elm_http_builder$HttpBuilder$Response = F5(
	function (a, b, c, d, e) {
		return {data: a, status: b, statusText: c, headers: d, url: e};
	});
var _lukewestby$elm_http_builder$HttpBuilder$RequestBuilder = F3(
	function (a, b, c) {
		return {ctor: 'RequestBuilder', _0: a, _1: b, _2: c};
	});
var _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl = F2(
	function (verb, url) {
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			{
				verb: verb,
				url: url,
				headers: _elm_lang$core$Native_List.fromArray(
					[]),
				body: _evancz$elm_http$Http$empty
			},
			_evancz$elm_http$Http$defaultSettings,
			_lukewestby$elm_http_builder$HttpBuilder$defaultInternals);
	});
var _lukewestby$elm_http_builder$HttpBuilder$get = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('GET');
var _lukewestby$elm_http_builder$HttpBuilder$post = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('POST');
var _lukewestby$elm_http_builder$HttpBuilder$put = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('PUT');
var _lukewestby$elm_http_builder$HttpBuilder$patch = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('PATCH');
var _lukewestby$elm_http_builder$HttpBuilder$delete = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('DELETE');
var _lukewestby$elm_http_builder$HttpBuilder$options = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('OPTIONS');
var _lukewestby$elm_http_builder$HttpBuilder$trace = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('TRACE');
var _lukewestby$elm_http_builder$HttpBuilder$head = _lukewestby$elm_http_builder$HttpBuilder$requestWithVerbAndUrl('HEAD');
var _lukewestby$elm_http_builder$HttpBuilder$mapRequest = F2(
	function (updater, _p10) {
		var _p11 = _p10;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			updater(_p11._0),
			_p11._1,
			_p11._2);
	});
var _lukewestby$elm_http_builder$HttpBuilder$withHeader = F2(
	function (key, value) {
		return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
			function (request) {
				return _elm_lang$core$Native_Utils.update(
					request,
					{
						headers: A2(
							_elm_lang$core$List_ops['::'],
							{ctor: '_Tuple2', _0: key, _1: value},
							request.headers)
					});
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withHeaders = function (headers) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
		function (request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{
					headers: A2(_elm_lang$core$Basics_ops['++'], headers, request.headers)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withBody = function (body) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapRequest(
		function (request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{body: body});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withStringBody = function (_p12) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_evancz$elm_http$Http$string(_p12));
};
var _lukewestby$elm_http_builder$HttpBuilder$withJsonBody = function (_p13) {
	return _lukewestby$elm_http_builder$HttpBuilder$withStringBody(
		A2(_elm_lang$core$Json_Encode$encode, 0, _p13));
};
var _lukewestby$elm_http_builder$HttpBuilder$withUrlEncodedBody = function (_p14) {
	return _lukewestby$elm_http_builder$HttpBuilder$withStringBody(
		_lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(_p14));
};
var _lukewestby$elm_http_builder$HttpBuilder$withMultipartBody = function (_p15) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_evancz$elm_http$Http$multipart(_p15));
};
var _lukewestby$elm_http_builder$HttpBuilder$withMultipartStringBody = function (_p16) {
	return _lukewestby$elm_http_builder$HttpBuilder$withMultipartBody(
		A2(
			_elm_lang$core$List$map,
			function (_p17) {
				var _p18 = _p17;
				return A2(_evancz$elm_http$Http$stringData, _p18._0, _p18._1);
			},
			_p16));
};
var _lukewestby$elm_http_builder$HttpBuilder$mapSettings = F2(
	function (updater, _p19) {
		var _p20 = _p19;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			_p20._0,
			updater(_p20._1),
			_p20._2);
	});
var _lukewestby$elm_http_builder$HttpBuilder$withTimeout = function (timeout) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{timeout: timeout});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withStartHandler = function (task) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					onStart: _elm_lang$core$Maybe$Just(task)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withProgressHandler = function (progressHandler) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					onProgress: _elm_lang$core$Maybe$Just(progressHandler)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withMimeType = function (mimeType) {
	return _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
		function (settings) {
			return _elm_lang$core$Native_Utils.update(
				settings,
				{
					desiredResponseType: _elm_lang$core$Maybe$Just(mimeType)
				});
		});
};
var _lukewestby$elm_http_builder$HttpBuilder$withCredentials = _lukewestby$elm_http_builder$HttpBuilder$mapSettings(
	function (settings) {
		return _elm_lang$core$Native_Utils.update(
			settings,
			{withCredentials: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$mapInternals = F2(
	function (updater, _p21) {
		var _p22 = _p21;
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$RequestBuilder,
			_p22._0,
			_p22._1,
			updater(_p22._2));
	});
var _lukewestby$elm_http_builder$HttpBuilder$withCacheBuster = _lukewestby$elm_http_builder$HttpBuilder$mapInternals(
	function (internals) {
		return _elm_lang$core$Native_Utils.update(
			internals,
			{cacheBuster: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withZeroStatusAllowed = _lukewestby$elm_http_builder$HttpBuilder$mapInternals(
	function (internals) {
		return _elm_lang$core$Native_Utils.update(
			internals,
			{zeroStatusAllowed: true});
	});
var _lukewestby$elm_http_builder$HttpBuilder$BadResponse = function (a) {
	return {ctor: 'BadResponse', _0: a};
};
var _lukewestby$elm_http_builder$HttpBuilder$Timeout = {ctor: 'Timeout'};
var _lukewestby$elm_http_builder$HttpBuilder$NetworkError = {ctor: 'NetworkError'};
var _lukewestby$elm_http_builder$HttpBuilder$promoteRawError = function (rawError) {
	var _p23 = rawError;
	if (_p23.ctor === 'RawTimeout') {
		return _lukewestby$elm_http_builder$HttpBuilder$Timeout;
	} else {
		return _lukewestby$elm_http_builder$HttpBuilder$NetworkError;
	}
};
var _lukewestby$elm_http_builder$HttpBuilder$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _lukewestby$elm_http_builder$HttpBuilder$responseFromRaw = F2(
	function (reader, response) {
		var _p24 = reader(response.value);
		if (_p24.ctor === 'Ok') {
			return _elm_lang$core$Task$succeed(
				{data: _p24._0, status: response.status, statusText: response.statusText, headers: response.headers, url: response.url});
		} else {
			return _elm_lang$core$Task$fail(
				_lukewestby$elm_http_builder$HttpBuilder$UnexpectedPayload(_p24._0));
		}
	});
var _lukewestby$elm_http_builder$HttpBuilder$handleResponse = F4(
	function (successReader, errorReader, internals, response) {
		var isSuccessful = ((_elm_lang$core$Native_Utils.cmp(response.status, 200) > -1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) || (_elm_lang$core$Native_Utils.eq(response.status, 0) && internals.zeroStatusAllowed);
		return isSuccessful ? A2(_lukewestby$elm_http_builder$HttpBuilder$responseFromRaw, successReader, response) : A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			function (_p25) {
				return _elm_lang$core$Task$fail(
					_lukewestby$elm_http_builder$HttpBuilder$BadResponse(_p25));
			},
			A2(_lukewestby$elm_http_builder$HttpBuilder$responseFromRaw, errorReader, response));
	});
var _lukewestby$elm_http_builder$HttpBuilder$sendHelp = F5(
	function (successReader, errorReader, internals, settings, request) {
		return A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			A3(_lukewestby$elm_http_builder$HttpBuilder$handleResponse, successReader, errorReader, internals),
			A2(
				_elm_lang$core$Task$mapError,
				_lukewestby$elm_http_builder$HttpBuilder$promoteRawError,
				A2(_evancz$elm_http$Http$send, settings, request)));
	});
var _lukewestby$elm_http_builder$HttpBuilder$send = F3(
	function (successReader, errorReader, _p26) {
		var _p27 = _p26;
		var _p30 = _p27._1;
		var _p29 = _p27._0;
		var _p28 = _p27._2;
		return _p28.cacheBuster ? A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Task$andThen,
			A4(_lukewestby$elm_http_builder$HttpBuilder$sendHelp, successReader, errorReader, _p28, _p30),
			A2(
				_elm_lang$core$Task$map,
				_lukewestby$elm_http_builder$HttpBuilder$appendCacheBusterToUrl(_p29),
				_elm_lang$core$Time$now)) : A5(_lukewestby$elm_http_builder$HttpBuilder$sendHelp, successReader, errorReader, _p28, _p30, _p29);
	});

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1));
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4));
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5));
					}
				case 'DocumentRule':
					return A2(
						_elm_lang$core$List_ops['::'],
						_p0._0,
						_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1));
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6));
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7));
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8));
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9));
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10));
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13));
					}
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p16._0,
					A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						update(_p17._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p17._0,
					A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return _elm_lang$core$Native_List.fromArray(
										[
											A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0))
										]);
								} else {
									var _p19 = A2(
										_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
										update,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1)
											]));
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p19._0._0,
												A2(_elm_lang$core$List_ops['::'], _p18._0._1._0, _p19._0._1))
											]);
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1))
								]);
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p18._0,
			A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1));
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_rtfeldman$elm_css$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				_elm_lang$core$Native_List.fromArray(
					[property])));
	});
var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return _elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
								A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0))
							]);
					case 'MediaRule':
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(
								_rtfeldman$elm_css$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
									_p22._0._1))
							]);
					default:
						return declarations;
				}
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		var _p23 = styleBlock;
		if (_p23._1.ctor === '[]') {
			var _p24 = _p23._0;
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p24,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p23._2),
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					f(_p24),
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		} else {
			var _p26 = _p23._1;
			var _p25 = _p23._0;
			var newFirst = f(_p25);
			var newRest = A2(_elm_lang$core$List$map, f, _p26);
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p25, _p26, _p23._2),
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					newFirst,
					newRest,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		}
	});
var _rtfeldman$elm_css$Css_Structure$MediaQuery = function (a) {
	return {ctor: 'MediaQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
	function (pseudo, _p27) {
		var _p28 = _p27;
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			_p28._0,
			_p28._1,
			_elm_lang$core$Maybe$Just(pseudo));
	});
var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p29 = sequence;
		switch (_p29.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._0,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p30 = list;
		if (_p30.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if ((_p30._0.ctor === '_Tuple2') && (_p30._1.ctor === '[]')) {
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: _p30._0._0,
						_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p30._0._1)
					}
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p30._0,
					A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p30._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p31 = selector;
		if (_p31._1.ctor === '[]') {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p31._0),
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p31._2);
		} else {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p31._0,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p31._1),
				_p31._2);
		}
	});
var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p32 = declarations;
		_v24_15:
		do {
			if (_p32.ctor === '[]') {
				return declarations;
			} else {
				if (_p32._1.ctor === '[]') {
					switch (_p32._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p32._0._0._1.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[
										_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p32._0._0._2))
									]);
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._0._1);
								return _elm_lang$core$Native_List.fromArray(
									[
										_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._0._0, newRest, _p32._0._0._2))
									]);
							}
						case 'MediaRule':
							if (_p32._0._1.ctor === '::') {
								if (_p32._0._1._1.ctor === '[]') {
									if (_p32._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._1._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p32._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									} else {
										var newRest = A2(
											_rtfeldman$elm_css$Css_Structure$mapLast,
											_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
											_p32._0._1._0._1);
										var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._1._0._0, newRest, _p32._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									}
								} else {
									var _p33 = A2(
										_rtfeldman$elm_css$Css_Structure$extendLastSelector,
										selector,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p32._0._0, _p32._0._1._1)
											]));
									if (((_p33.ctor === '::') && (_p33._0.ctor === 'MediaRule')) && (_p33._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p33._0._0,
												A2(_elm_lang$core$List_ops['::'], _p32._0._1._0, _p33._0._1))
											]);
									} else {
										return _p33;
									}
								}
							} else {
								break _v24_15;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p32._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._0._1))
								]);
						case 'DocumentRule':
							if (_p32._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_rtfeldman$elm_css$Css_Structure$StyleBlock,
									A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._4._0),
									_elm_lang$core$Native_List.fromArray(
										[]),
									_p32._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock)
									]);
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._4._1);
								var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._4._0, newRest, _p32._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock)
									]);
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v24_15;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p32._0,
			A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._1));
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (mixins) {
	toPropertyPairs:
	while (true) {
		var _p0 = mixins;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return A2(
						_elm_lang$core$List_ops['::'],
						_rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				case 'ApplyMixins':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					mixins = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p3._0]));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: _elm_lang$core$Native_List.fromArray(
			[]),
		namespaces: _elm_lang$core$Native_List.fromArray(
			[]),
		snippets: snippets
	};
};
var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$ApplyMixins = function (a) {
	return {ctor: 'ApplyMixins', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
	function (update, mixin) {
		var _p4 = mixin;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return mixin;
			case 'WithPseudoElement':
				return mixin;
			case 'WithMedia':
				return mixin;
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
					A2(
						_rtfeldman$elm_css$Css_Structure$mapLast,
						_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
	function (update, mixins) {
		var _p5 = mixins;
		if (_p5.ctor === '[]') {
			return mixins;
		} else {
			if (_p5._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p5._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], '    ', str);
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _rtfeldman$elm_css$Css_Structure_Output$indent(
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
				_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1)
			]));
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var pseudoElementsString = A2(
		_elm_lang$core$String$join,
		'',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2))
			]));
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0)
			]),
		A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		pseudoElementsString,
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p13) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p13));
				},
				segments)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = function (_p14) {
	var _p15 = _p14;
	var selectorStr = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
			A2(_elm_lang$core$List_ops['::'], _p15._0, _p15._1)));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		selectorStr,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p15._2),
				'\n}')));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p16 = declaration;
	switch (_p16.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p16._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (_p17) {
						var _p18 = _p17;
						return _p18._0;
					},
					_p16._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _rtfeldman$elm_css$Css_Structure_Output$indent(
							_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p19));
					},
					_p16._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rtfeldman$elm_css$Css_Structure_Output$indent(blocks),
							'\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 56, column: 5},
					end: {line: 73, column: 49}
				},
				_p16)('not yet implemented :x');
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return _elm_lang$core$Basics$not(
					_elm_lang$core$String$isEmpty(_p27));
			},
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
					A2(
					_elm_lang$core$String$join,
					'\n\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations))
				])));
};

var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p1) {
	var _p2 = _p1;
	return {
		ctor: '_Tuple2',
		_0: _p2.warnings,
		_1: {key: _p2.key, value: _p2.value, important: _p2.important}
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Basics$snd(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p3 = declaration;
		if (_p3.ctor === 'StyleBlockDeclaration') {
			return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p3._0);
		} else {
			return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		var _p4 = declarations;
		if (_p4.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Native_List.fromArray(
						[_p4._0]));
			} else {
				var _v5 = _p4._1;
				declarations = _v5;
				continue lastDeclaration;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p5 = declarationsAndWarnings;
	if (_p5.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p5._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p5._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p5._0.warnings, result.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p6 = tuplesToExpand;
		if (_p6.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var _p7 = expandTuples(_p6._1);
			var nextWarnings = _p7._0;
			var nextTuples = _p7._1;
			var _p8 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p6._0._1);
			var warnings = _p8._0;
			var properties = _p8._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: _p6._0._0, _1: properties},
					nextTuples)
			};
		}
	};
	var _p9 = expandTuples(tuples);
	var warnings = _p9._0;
	var newTuples = _p9._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p10 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p10._0;
	var properties = _p10._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p11._0;
	var properties = _p11._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties)
				]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p12 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p12._0;
	var properties = _p12._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$FontFace(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p13 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p13._0;
		var properties = _p13._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties)
				]),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p14 = declaration;
		switch (_p14.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p14._0]));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p14._0),
					_p14._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p14._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p14._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p14._0, _p14._1, _p14._2, _p14._3, _p14._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p15 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p15.declarations;
			var warnings = _p15.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p16) {
	var _p17 = _p16;
	return A2(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
		_p17._2,
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
				A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p17._0,
					_p17._1,
					_elm_lang$core$Native_List.fromArray(
						[])))
			]));
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins = F2(
	function (mixins, declarations) {
		applyMixins:
		while (true) {
			var _p18 = mixins;
			if (_p18.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: _elm_lang$core$Native_List.fromArray(
						[])
				};
			} else {
				switch (_p18._0.ctor) {
					case 'AppendProperty':
						var _p19 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p18._0._0);
						var warnings = _p19._0;
						var property = _p19._1;
						var result = A2(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
							_p18._1,
							A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p18._0._1,
							_p18._1,
							_rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector(_p18._0._0),
							declarations);
					case 'NestSnippet':
						var chain = F2(
							function (_p21, _p20) {
								var _p22 = _p21;
								var _p23 = _p20;
								return A3(
									_rtfeldman$elm_css$Css_Structure$Selector,
									_p22._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p22._1,
										A2(
											_elm_lang$core$List_ops['::'],
											{ctor: '_Tuple2', _0: _p18._0._0, _1: _p23._0},
											_p23._1)),
									_elm_lang$core$Maybe$oneOf(
										_elm_lang$core$Native_List.fromArray(
											[_p23._2, _p22._2])));
							});
						var expandDeclaration = function (declaration) {
							var _p24 = declaration;
							switch (_p24.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												A2(_elm_lang$core$List_ops['::'], _p24._0._0, _p24._0._1));
										},
										_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p25 = newSelectors;
										if (_p25.ctor === '[]') {
											return _elm_lang$core$Native_List.fromArray(
												[]);
										} else {
											return _elm_lang$core$Native_List.fromArray(
												[
													_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
													A3(
														_rtfeldman$elm_css$Css_Structure$StyleBlock,
														_p25._0,
														_p25._1,
														_elm_lang$core$Native_List.fromArray(
															[])))
												]);
										}
									}();
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p24._0._2, newDeclarations)
											]));
								case 'MediaRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p24._0, _p24._1);
								case 'SupportsRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p24._0, _p24._1);
								case 'DocumentRule':
									return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p24._0, _p24._1, _p24._2, _p24._3, _p24._4);
								case 'PageRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p24._0, _p24._1);
								case 'FontFace':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p24._0);
								case 'Keyframes':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p24._0, _p24._1);
								case 'Viewport':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p24._0);
								case 'CounterStyle':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p24._0);
								default:
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p24._0);
							}
						};
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p18._1, declarations)
									]),
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p18._0._1))));
					case 'WithPseudoElement':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p18._0._1,
							_p18._1,
							_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p18._0._0),
							declarations);
					case 'WithMedia':
						var newDeclarations = function () {
							var _p26 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p26.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[]);
							} else {
								return _elm_lang$core$Native_List.fromArray(
									[
										A2(
										_rtfeldman$elm_css$Css_Structure$MediaRule,
										_p18._0._0,
										_elm_lang$core$Native_List.fromArray(
											[
												A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												_p26._0,
												_p26._1,
												_elm_lang$core$Native_List.fromArray(
													[]))
											]))
									]);
							}
						}();
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							_elm_lang$core$Native_List.fromArray(
								[
									A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p18._1, declarations),
									A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p18._0._1, newDeclarations)
								]));
					default:
						var _v16 = A2(_elm_lang$core$Basics_ops['++'], _p18._0._0, _p18._1),
							_v17 = declarations;
						mixins = _v16;
						declarations = _v17;
						continue applyMixins;
				}
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast = F4(
	function (nestedMixins, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$List$tail(decls));
		};
		var nextResult = A2(
			_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
			rest,
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _p27 = {
				ctor: '_Tuple2',
				_0: _elm_lang$core$List$head(nextResult.declarations),
				_1: _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(declarations))
			};
			if (((_p27.ctor === '_Tuple2') && (_p27._0.ctor === 'Just')) && (_p27._1.ctor === 'Just')) {
				var _p29 = _p27._1._0;
				var _p28 = _p27._0._0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(declarations) - 1,
						declarations),
					_elm_lang$core$Native_List.fromArray(
						[
							(!_elm_lang$core$Native_Utils.eq(_p29, _p28)) ? _p28 : _p29
						]));
			} else {
				return declarations;
			}
		}();
		var handleInitial = function (declarationsAndWarnings) {
			var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, nestedMixins, declarationsAndWarnings.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
				declarations: result.declarations
			};
		};
		var insertMixinsToNestedDecl = function (lastDecl) {
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
				A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					handleInitial,
					A2(
						_elm_lang$core$List$map,
						function (declaration) {
							return {
								declarations: _elm_lang$core$Native_List.fromArray(
									[declaration]),
								warnings: _elm_lang$core$Native_List.fromArray(
									[])
							};
						},
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				warnings: _elm_lang$core$Native_List.fromArray(
					[]),
				declarations: _elm_lang$core$Native_List.fromArray(
					[])
			},
			A2(
				_elm_lang$core$Maybe$map,
				insertMixinsToNestedDecl,
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		return {
			warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
			declarations: A2(
				_elm_lang$core$Basics_ops['++'],
				newDeclarations,
				A2(
					_elm_lang$core$Basics_ops['++'],
					withoutParent(initialResult.declarations),
					withoutParent(nextResult.declarations)))
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p30 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p30.declarations;
		var warnings = _p30.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p31 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p31.declarations;
		var warnings = _p31.warnings;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations)
				]),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p32 = snippetDeclarations;
	if (_p32.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p32._0);
		var declarations = _p33.declarations;
		var warnings = _p33.warnings;
		var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p32._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p34 = snippetDeclaration;
	switch (_p34.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p34._0);
		case 'MediaRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p34._0, _p34._1);
		case 'SupportsRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p34._0, _p34._1);
		case 'DocumentRule':
			return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p34._0, _p34._1, _p34._2, _p34._3, _p34._4);
		case 'PageRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p34._0, _p34._1);
		case 'FontFace':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p34._0);
		case 'Keyframes':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p34._0, _p34._1);
		case 'Viewport':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p34._0);
		case 'CounterStyle':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p34._0);
		default:
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p34._0);
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p35) {
	var _p36 = _p35;
	var _p37 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p36.snippets));
	var warnings = _p37.warnings;
	var declarations = _p37.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p36.charset, imports: _p36.imports, namespaces: _p36.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (sheet) {
	var _p38 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p38._0;
	var warnings = _p38._1;
	return {
		warnings: warnings,
		css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
			_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _rtfeldman$elm_css$Css$asPairs = _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs;
var _rtfeldman$elm_css$Css$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_rtfeldman$elm_css$Css$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css$compile = _rtfeldman$elm_css$Css_Preprocess_Resolve$compile;
var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _rtfeldman$elm_css$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_rtfeldman$elm_css$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _rtfeldman$elm_css$Css$each = F2(
	function (snippetCreators, mixins) {
		var selectorsToSnippet = function (selectors) {
			var _p1 = selectors;
			if (_p1.ctor === '[]') {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[]));
			} else {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
							A3(_rtfeldman$elm_css$Css_Preprocess$StyleBlock, _p1._0, _p1._1, mixins))
						]));
			}
		};
		return selectorsToSnippet(
			_rtfeldman$elm_css$Css$collectSelectors(
				A2(
					_elm_lang$core$List$concatMap,
					_rtfeldman$elm_css$Css_Preprocess$unwrapSnippet,
					A2(
						_elm_lang$core$List$map,
						F2(
							function (x, y) {
								return y(x);
							})(
							_elm_lang$core$Native_List.fromArray(
								[])),
						snippetCreators))));
	});
var _rtfeldman$elm_css$Css$generalSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$GeneralSibling);
var _rtfeldman$elm_css$Css$adjacentSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$AdjacentSibling);
var _rtfeldman$elm_css$Css$descendants = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Descendant);
var _rtfeldman$elm_css$Css$withClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$ClassSelector(
			A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)));
};
var _rtfeldman$elm_css$Css$children = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Child);
var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('selection'));
var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('first-line'));
var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('first-letter'));
var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('before'));
var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('after'));
var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('valid'));
var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('target'));
var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('scope'));
var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('root'));
var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('required'));
var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('read-write'));
var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('out-of-range'));
var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('optional'));
var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-of-type'));
var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-child'));
var _rtfeldman$elm_css$Css$nthOfType = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthChild = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('link'));
var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-of-type'));
var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-child'));
var _rtfeldman$elm_css$Css$lang = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'lang(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('invalid'));
var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('indeterminate'));
var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('hover'));
var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('focus'));
var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('fullscreen'));
var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-of-type'));
var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-child'));
var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first'));
var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('enabled'));
var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('empty'));
var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('disabled'));
var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('checked'));
var _rtfeldman$elm_css$Css$any = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'any(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('active'));
var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
	var _p2 = directionality;
	if (_p2.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _rtfeldman$elm_css$Css$dir = function (directionality) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'dir(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_rtfeldman$elm_css$Css$directionalityToString(directionality),
					')'))));
};
var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _rtfeldman$elm_css$Css$makeSnippet = F2(
	function (mixins, sequence) {
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						_elm_lang$core$Native_List.fromArray(
							[]),
						mixins))
				]));
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['.'] = F2(
	function ($class, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure$ClassSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class))
					])));
	});
var _rtfeldman$elm_css$Css$selector = F2(
	function (selectorStr, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			A2(
				_rtfeldman$elm_css$Css_Structure$CustomSelector,
				selectorStr,
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _rtfeldman$elm_css$Css$everything = function (mixins) {
	return A2(
		_rtfeldman$elm_css$Css$makeSnippet,
		mixins,
		_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
			_elm_lang$core$Native_List.fromArray(
				[])));
};
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['#'] = F2(
	function (id, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure$IdSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', id))
					])));
	});
var _rtfeldman$elm_css$Css$mixin = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins;
var _rtfeldman$elm_css$Css$stylesheet = _rtfeldman$elm_css$Css_Preprocess$stylesheet;
var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
};
var _rtfeldman$elm_css$Css$animationName = function (identifier) {
	return _rtfeldman$elm_css$Css$animationNames(
		_elm_lang$core$Native_List.fromArray(
			[identifier]));
};
var _rtfeldman$elm_css$Css$fontWeight = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p5,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				_elm_lang$core$Native_List.range(1, 9)));
	};
	var warnings = validWeight(
		_rtfeldman$elm_css$Css$stringToInt(_p5)) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p5, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values'))
		]);
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p5);
};
var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p6) {
	var _p7 = _p6;
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p7.warnings, 'font-feature-settings', _p7.value);
};
var _rtfeldman$elm_css$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _rtfeldman$elm_css$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _rtfeldman$elm_css$Css$src = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _rtfeldman$elm_css$Css$withMedia = _rtfeldman$elm_css$Css_Preprocess$WithMedia;
var _rtfeldman$elm_css$Css$media = F2(
	function (mediaQueries, snippets) {
		var nestedMediaRules = function (declarations) {
			nestedMediaRules:
			while (true) {
				var _p8 = declarations;
				if (_p8.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					switch (_p8._0.ctor) {
						case 'StyleBlockDeclaration':
							var _v7 = _p8._1;
							declarations = _v7;
							continue nestedMediaRules;
						case 'MediaRule':
							return A2(
								_elm_lang$core$List_ops['::'],
								A2(
									_rtfeldman$elm_css$Css_Preprocess$MediaRule,
									A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p8._0._0),
									_p8._0._1),
								nestedMediaRules(_p8._1));
						default:
							return A2(
								_elm_lang$core$List_ops['::'],
								_p8._0,
								nestedMediaRules(_p8._1));
					}
				}
			}
		};
		var extractStyleBlocks = function (declarations) {
			extractStyleBlocks:
			while (true) {
				var _p9 = declarations;
				if (_p9.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					if (_p9._0.ctor === 'StyleBlockDeclaration') {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p9._0._0,
							extractStyleBlocks(_p9._1));
					} else {
						var _v9 = _p9._1;
						declarations = _v9;
						continue extractStyleBlocks;
					}
				}
			}
		};
		var snippetDeclarations = A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets);
		var mediaRuleFromStyleBlocks = A2(
			_rtfeldman$elm_css$Css_Preprocess$MediaRule,
			mediaQueries,
			extractStyleBlocks(snippetDeclarations));
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List_ops['::'],
				mediaRuleFromStyleBlocks,
				nestedMediaRules(snippetDeclarations)));
	});
var _rtfeldman$elm_css$Css$mediaQuery = F2(
	function (queryString, snippets) {
		return A2(
			_rtfeldman$elm_css$Css$media,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$MediaQuery(queryString)
				]),
			snippets);
	});
var _rtfeldman$elm_css$Css$color = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _rtfeldman$elm_css$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value, c4.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value]));
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _rtfeldman$elm_css$Css$featureOff = 0;
var _rtfeldman$elm_css$Css$featureOn = 1;
var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value, argD.value])));
	});
var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
var _rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value])));
	});
var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations3 = function (_p10) {
	return A2(
		_rtfeldman$elm_css$Css$prop3,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p10));
};
var _rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value])));
	});
var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations2 = function (_p11) {
	return A2(
		_rtfeldman$elm_css$Css$prop2,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p11));
};
var _rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
	});
var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
var _rtfeldman$elm_css$Css$fontFamilies = function (_p12) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-family',
		_rtfeldman$elm_css$Css$stringsToValue(_p12));
};
var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p13) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-variant-numeric',
		_rtfeldman$elm_css$Css$valuesOrNone(_p13));
};
var _rtfeldman$elm_css$Css$cursor = _rtfeldman$elm_css$Css$prop1('cursor');
var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations = function (_p14) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p14));
};
var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
var _rtfeldman$elm_css$Css$textDecorationLines = function (_p15) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration-line',
		_rtfeldman$elm_css$Css$valuesOrNone(_p15));
};
var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
var _rtfeldman$elm_css$Css$transforms = function (_p16) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'transform',
		_rtfeldman$elm_css$Css$valuesOrNone(_p16));
};
var _rtfeldman$elm_css$Css$transform = function (only) {
	return _rtfeldman$elm_css$Css$transforms(
		_elm_lang$core$Native_List.fromArray(
			[only]));
};
var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
var _rtfeldman$elm_css$Css$textJustify = _rtfeldman$elm_css$Css$prop1('text-justify');
var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
var _rtfeldman$elm_css$Css$combineLengths = F3(
	function (operation, first, second) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p17) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p17));
				},
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Basics$toString(
						A2(operation, first.numericValue, second.numericValue)),
						first.unitLabel
					])));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value});
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, mixin) {
		getOverloadedProperty:
		while (true) {
			var _p18 = mixin;
			switch (_p18.ctor) {
				case 'AppendProperty':
					return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p18._0.key);
				case 'ExtendSelector':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for selector ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for combinator ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for media query ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				default:
					if (_p18._0.ctor === '[]') {
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty mixin. '))
								]),
							desiredKey,
							'');
					} else {
						if (_p18._0._1.ctor === '[]') {
							var _v11 = functionName,
								_v12 = desiredKey,
								_v13 = _p18._0._0;
							functionName = _v11;
							desiredKey = _v12;
							mixin = _v13;
							continue getOverloadedProperty;
						} else {
							var _v14 = functionName,
								_v15 = desiredKey,
								_v16 = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(_p18._0._1);
							functionName = _v14;
							desiredKey = _v15;
							mixin = _v16;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _rtfeldman$elm_css$Css$tv = _rtfeldman$elm_css$Css_Structure$MediaQuery('tv');
var _rtfeldman$elm_css$Css$projection = _rtfeldman$elm_css$Css_Structure$MediaQuery('projection');
var _rtfeldman$elm_css$Css$print = _rtfeldman$elm_css$Css_Structure$MediaQuery('print');
var _rtfeldman$elm_css$Css$screen = _rtfeldman$elm_css$Css_Structure$MediaQuery('screen');
var _rtfeldman$elm_css$Css$NumberedWeight = F2(
	function (a, b) {
		return {value: a, fontWeight: b};
	});
var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, lengthOrNumberOrAutoOrNoneOrContent: m, fontSize: n};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$NonMixable = {};
var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return {value: a, all: b, alignItems: c, boxSizing: d, cursor: e, display: f, flexBasis: g, flexWrap: h, flexDirection: i, flexDirectionOrWrap: j, none: k, number: l, overflow: m, textDecorationLine: n, textRendering: o, textIndent: p, textDecorationStyle: q, length: r, lengthOrAuto: s, lengthOrNone: t, lengthOrNumber: u, lengthOrMinMaxDimension: v, lengthOrNoneOrMinMaxDimension: w, lengthOrNumberOrAutoOrNoneOrContent: x, fontFamily: y, fontSize: z, fontStyle: _1, fontWeight: _2, fontVariant: _3, units: _4, numericValue: _5, unitLabel: _6};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$Compatible = {ctor: 'Compatible'};
var _rtfeldman$elm_css$Css$transparent = {
	value: 'transparent',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _rtfeldman$elm_css$Css$currentColor = {
	value: 'currentColor',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', overflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.'))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue]))),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.'))))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue, alpha]))),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$hex = function (str) {
	var value = _elm_lang$core$Native_Utils.eq(
		A3(_elm_lang$core$String$slice, 0, 1, str),
		'#') ? str : A2(_elm_lang$core$Basics_ops['++'], '#', str);
	var warnings = A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^#([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$'),
		value) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				['The syntax of a hex-color is a token whose value consists of 3, 4, 6, or 8 hexadecimal digits.', value, 'is not valid.', 'Please see: https://drafts.csswg.org/css-color/#hex-notation']))
		]);
	return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: 0, green: 0, blue: 0, alpha: 1, warnings: warnings};
};
var _rtfeldman$elm_css$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, alpha) {
		var blue = 0;
		var green = 0;
		var red = 0;
		return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _rtfeldman$elm_css$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css$numberToString(hue),
				_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_rtfeldman$elm_css$Css$numericalPercentageToString(lightness)
			]);
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _rtfeldman$elm_css$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css$numberToString(hue),
				_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
				_rtfeldman$elm_css$Css$numberToString(alpha)
			]);
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lengthConverter = F3(
	function (units, unitLabel, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				unitLabel),
			numericValue: num,
			units: units,
			unitLabel: unitLabel,
			length: _rtfeldman$elm_css$Css$Compatible,
			lengthOrAuto: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNone: _rtfeldman$elm_css$Css$Compatible,
			lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			textIndent: _rtfeldman$elm_css$Css$Compatible,
			flexBasis: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
			fontSize: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				suffix),
			angle: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
var _rtfeldman$elm_css$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[a, b, c, d, tx, ty]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_rtfeldman$elm_css$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_rtfeldman$elm_css$Css$numberToString,
																			_elm_lang$core$Native_List.fromArray(
																				[a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]))),
																	transform: _rtfeldman$elm_css$Css$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$perspective = function (l) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'perspective',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(l)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate = function (_p19) {
	var _p20 = _p19;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			_elm_lang$core$Native_List.fromArray(
				[_p20.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateX = function (_p21) {
	var _p22 = _p21;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateX',
			_elm_lang$core$Native_List.fromArray(
				[_p22.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateY = function (_p23) {
	var _p24 = _p23;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateY',
			_elm_lang$core$Native_List.fromArray(
				[_p24.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateZ = function (_p25) {
	var _p26 = _p25;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p26.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate3d = F4(
	function (x, y, z, _p27) {
		var _p28 = _p27;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css$numberToString,
			_elm_lang$core$Native_List.fromArray(
				[x, y, z]));
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					_elm_lang$core$Native_List.fromArray(
						[_p28.value]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scale = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(x)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scaleX = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleX',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(x)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(y)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y, z]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skew = function (_p29) {
	var _p30 = _p29;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skew',
			_elm_lang$core$Native_List.fromArray(
				[_p30.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				_elm_lang$core$Native_List.fromArray(
					[ax.value, ay.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skewX = function (_p31) {
	var _p32 = _p31;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewX',
			_elm_lang$core$Native_List.fromArray(
				[_p32.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skewY = function (_p33) {
	var _p34 = _p33;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewY',
			_elm_lang$core$Native_List.fromArray(
				[_p34.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate = function (_p35) {
	var _p36 = _p35;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translate',
			_elm_lang$core$Native_List.fromArray(
				[_p36.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$translateX = function (_p37) {
	var _p38 = _p37;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateX',
			_elm_lang$core$Native_List.fromArray(
				[_p38.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateY = function (_p39) {
	var _p40 = _p39;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			_elm_lang$core$Native_List.fromArray(
				[_p40.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateZ = function (_p41) {
	var _p42 = _p41;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p42.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate3d',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value, tz.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$wrap,
	{value: 'wrap-reverse'});
var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'row-reverse'});
var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column'});
var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column-reverse'});
var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$none = {value: 'none', cursor: _rtfeldman$elm_css$Css$Compatible, none: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, transform: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$auto = {value: 'auto', cursor: _rtfeldman$elm_css$Css$Compatible, flexBasis: _rtfeldman$elm_css$Css$Compatible, overflow: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'max-content'});
var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'min-content'});
var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'fit-content'});
var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$normal = {
	value: 'normal',
	warnings: _elm_lang$core$Native_List.fromArray(
		[]),
	fontStyle: _rtfeldman$elm_css$Css$Compatible,
	featureTagValue: _rtfeldman$elm_css$Css$Compatible
};
var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bold = {value: 'bold', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
				{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature values cannot be negative. ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(value),
						' is invalid.'))
			}
			]);
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$snd,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$fst, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css$featureTag = function (tag) {
	return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
};
var _rtfeldman$elm_css$Css$default = {value: 'default', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$crosshair = {value: 'crosshair', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contextMenu = {value: 'context-menu', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$help = {value: 'help', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$pointer = {value: 'pointer', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$progress = {value: 'progress', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wait = {value: 'wait', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cell = {value: 'cell', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$text = {value: 'text', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$verticalText = {value: 'vertical-text', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cursorAlias = {value: 'alias', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$copy = {value: 'copy', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$move = {value: 'move', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noDrop = {value: 'no-drop', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$notAllowed = {value: 'not-allowed', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$eResize = {value: 'e-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nResize = {value: 'n-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$neResize = {value: 'ne-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nwResize = {value: 'nw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sResize = {value: 's-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$seResize = {value: 'se-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$swResize = {value: 'sw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wResize = {value: 'w-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ewResize = {value: 'ew-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nsResize = {value: 'ns-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$neswResize = {value: 'nesw-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$nwseResize = {value: 'nwse-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$colResize = {value: 'col-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rowResize = {value: 'row-resize', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allScroll = {value: 'all-scroll', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$zoomIn = {value: 'zoom-in', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$zoomOut = {value: 'zoom-out', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$grab = {value: 'grab', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$grabbing = {value: 'grabbing', cursor: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$PseudoClass = F2(
	function (a, b) {
		return {ctor: 'PseudoClass', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0};
var _rtfeldman$elm_css$Css$int = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessInteger
	};
};
var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _rtfeldman$elm_css$Css$float = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessFloat
	};
};
var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _rtfeldman$elm_css$Css$initial = {value: 'initial', overflow: _rtfeldman$elm_css$Css$Compatible, none: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, textIndent: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible, boxSizing: _rtfeldman$elm_css$Css$Compatible, cursor: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, all: _rtfeldman$elm_css$Css$Compatible, alignItems: _rtfeldman$elm_css$Css$Compatible, length: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, flexBasis: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, fontFamily: _rtfeldman$elm_css$Css$Compatible, fontSize: _rtfeldman$elm_css$Css$Compatible, fontStyle: _rtfeldman$elm_css$Css$Compatible, fontWeight: _rtfeldman$elm_css$Css$Compatible, fontVariant: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$IncompatibleUnits, numericValue: 0, unitLabel: ''};
var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
var _rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _rtfeldman$elm_css$Css_Elements$typeSelector = F2(
	function (selectorStr, mixins) {
		var sequence = A2(
			_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
			_rtfeldman$elm_css$Css_Structure$TypeSelector(selectorStr),
			_elm_lang$core$Native_List.fromArray(
				[]));
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						_elm_lang$core$Native_List.fromArray(
							[]),
						mixins))
				]));
	});
var _rtfeldman$elm_css$Css_Elements$html = _rtfeldman$elm_css$Css_Elements$typeSelector('html');
var _rtfeldman$elm_css$Css_Elements$body = _rtfeldman$elm_css$Css_Elements$typeSelector('body');
var _rtfeldman$elm_css$Css_Elements$article = _rtfeldman$elm_css$Css_Elements$typeSelector('article');
var _rtfeldman$elm_css$Css_Elements$header = _rtfeldman$elm_css$Css_Elements$typeSelector('header');
var _rtfeldman$elm_css$Css_Elements$footer = _rtfeldman$elm_css$Css_Elements$typeSelector('footer');
var _rtfeldman$elm_css$Css_Elements$h1 = _rtfeldman$elm_css$Css_Elements$typeSelector('h1');
var _rtfeldman$elm_css$Css_Elements$h2 = _rtfeldman$elm_css$Css_Elements$typeSelector('h2');
var _rtfeldman$elm_css$Css_Elements$h3 = _rtfeldman$elm_css$Css_Elements$typeSelector('h3');
var _rtfeldman$elm_css$Css_Elements$h4 = _rtfeldman$elm_css$Css_Elements$typeSelector('h4');
var _rtfeldman$elm_css$Css_Elements$h5 = _rtfeldman$elm_css$Css_Elements$typeSelector('h5');
var _rtfeldman$elm_css$Css_Elements$h6 = _rtfeldman$elm_css$Css_Elements$typeSelector('h6');
var _rtfeldman$elm_css$Css_Elements$nav = _rtfeldman$elm_css$Css_Elements$typeSelector('nav');
var _rtfeldman$elm_css$Css_Elements$section = _rtfeldman$elm_css$Css_Elements$typeSelector('section');
var _rtfeldman$elm_css$Css_Elements$div = _rtfeldman$elm_css$Css_Elements$typeSelector('div');
var _rtfeldman$elm_css$Css_Elements$hr = _rtfeldman$elm_css$Css_Elements$typeSelector('hr');
var _rtfeldman$elm_css$Css_Elements$li = _rtfeldman$elm_css$Css_Elements$typeSelector('li');
var _rtfeldman$elm_css$Css_Elements$main$ = _rtfeldman$elm_css$Css_Elements$typeSelector('main');
var _rtfeldman$elm_css$Css_Elements$ol = _rtfeldman$elm_css$Css_Elements$typeSelector('ol');
var _rtfeldman$elm_css$Css_Elements$p = _rtfeldman$elm_css$Css_Elements$typeSelector('p');
var _rtfeldman$elm_css$Css_Elements$ul = _rtfeldman$elm_css$Css_Elements$typeSelector('ul');
var _rtfeldman$elm_css$Css_Elements$pre = _rtfeldman$elm_css$Css_Elements$typeSelector('pre');
var _rtfeldman$elm_css$Css_Elements$a = _rtfeldman$elm_css$Css_Elements$typeSelector('a');
var _rtfeldman$elm_css$Css_Elements$code = _rtfeldman$elm_css$Css_Elements$typeSelector('code');
var _rtfeldman$elm_css$Css_Elements$small = _rtfeldman$elm_css$Css_Elements$typeSelector('small');
var _rtfeldman$elm_css$Css_Elements$span = _rtfeldman$elm_css$Css_Elements$typeSelector('span');
var _rtfeldman$elm_css$Css_Elements$strong = _rtfeldman$elm_css$Css_Elements$typeSelector('strong');
var _rtfeldman$elm_css$Css_Elements$img = _rtfeldman$elm_css$Css_Elements$typeSelector('img');
var _rtfeldman$elm_css$Css_Elements$audio = _rtfeldman$elm_css$Css_Elements$typeSelector('audio');
var _rtfeldman$elm_css$Css_Elements$video = _rtfeldman$elm_css$Css_Elements$typeSelector('video');
var _rtfeldman$elm_css$Css_Elements$canvas = _rtfeldman$elm_css$Css_Elements$typeSelector('canvas');
var _rtfeldman$elm_css$Css_Elements$caption = _rtfeldman$elm_css$Css_Elements$typeSelector('caption');
var _rtfeldman$elm_css$Css_Elements$col = _rtfeldman$elm_css$Css_Elements$typeSelector('col');
var _rtfeldman$elm_css$Css_Elements$colgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('colgroup');
var _rtfeldman$elm_css$Css_Elements$table = _rtfeldman$elm_css$Css_Elements$typeSelector('table');
var _rtfeldman$elm_css$Css_Elements$tbody = _rtfeldman$elm_css$Css_Elements$typeSelector('tbody');
var _rtfeldman$elm_css$Css_Elements$td = _rtfeldman$elm_css$Css_Elements$typeSelector('td');
var _rtfeldman$elm_css$Css_Elements$tfoot = _rtfeldman$elm_css$Css_Elements$typeSelector('tfoot');
var _rtfeldman$elm_css$Css_Elements$th = _rtfeldman$elm_css$Css_Elements$typeSelector('th');
var _rtfeldman$elm_css$Css_Elements$thead = _rtfeldman$elm_css$Css_Elements$typeSelector('thead');
var _rtfeldman$elm_css$Css_Elements$tr = _rtfeldman$elm_css$Css_Elements$typeSelector('tr');
var _rtfeldman$elm_css$Css_Elements$button = _rtfeldman$elm_css$Css_Elements$typeSelector('button');
var _rtfeldman$elm_css$Css_Elements$fieldset = _rtfeldman$elm_css$Css_Elements$typeSelector('fieldset');
var _rtfeldman$elm_css$Css_Elements$form = _rtfeldman$elm_css$Css_Elements$typeSelector('form');
var _rtfeldman$elm_css$Css_Elements$input = _rtfeldman$elm_css$Css_Elements$typeSelector('input');
var _rtfeldman$elm_css$Css_Elements$label = _rtfeldman$elm_css$Css_Elements$typeSelector('label');
var _rtfeldman$elm_css$Css_Elements$legend = _rtfeldman$elm_css$Css_Elements$typeSelector('legend');
var _rtfeldman$elm_css$Css_Elements$optgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('optgroup');
var _rtfeldman$elm_css$Css_Elements$option = _rtfeldman$elm_css$Css_Elements$typeSelector('option');
var _rtfeldman$elm_css$Css_Elements$progress = _rtfeldman$elm_css$Css_Elements$typeSelector('progress');
var _rtfeldman$elm_css$Css_Elements$select = _rtfeldman$elm_css$Css_Elements$typeSelector('select');

var _rtfeldman$elm_css_helpers$Html_CssHelpers$stylesheetLink = function (url) {
	return A3(
		_elm_lang$html$Html$node,
		'link',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html_Attributes$property,
				'rel',
				_elm_lang$core$Json_Encode$string('stylesheet')),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'type',
				_elm_lang$core$Json_Encode$string('text/css')),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'href',
				_elm_lang$core$Json_Encode$string(url))
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$style = function (text) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html_Attributes$property,
				'textContent',
				_elm_lang$core$Json_Encode$string(text)),
				A2(
				_elm_lang$html$Html_Attributes$property,
				'type',
				_elm_lang$core$Json_Encode$string('text/css'))
			]),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass = F2(
	function (name, list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css_util$Css_Helpers$identifierToString(name),
					list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$class = _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass('');
var _rtfeldman$elm_css_helpers$Html_CssHelpers$classList = function (list) {
	return _rtfeldman$elm_css_helpers$Html_CssHelpers$class(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList = F2(
	function (name, list) {
		return A2(
			_rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass,
			name,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$helpers = {
	$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$class,
	classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$classList,
	id: function (_p0) {
		return _elm_lang$html$Html_Attributes$id(
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p0));
	}
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace = function (name) {
	return {
		$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass(name),
		classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList(name),
		id: function (_p1) {
			return _elm_lang$html$Html_Attributes$id(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p1));
		},
		name: name
	};
};
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Helpers = F3(
	function (a, b, c) {
		return {$class: a, classList: b, id: c};
	});
var _rtfeldman$elm_css_helpers$Html_CssHelpers$Namespace = F4(
	function (a, b, c, d) {
		return {$class: a, classList: b, id: c, name: d};
	});

var _sporto$hop$Hop_Types$newQuery = _elm_lang$core$Dict$empty;
var _sporto$hop$Hop_Types$newAddress = {
	query: _sporto$hop$Hop_Types$newQuery,
	path: _elm_lang$core$Native_List.fromArray(
		[])
};
var _sporto$hop$Hop_Types$Address = F2(
	function (a, b) {
		return {path: a, query: b};
	});
var _sporto$hop$Hop_Types$Config = F2(
	function (a, b) {
		return {basePath: a, hash: b};
	});

var _sporto$hop$Hop_Address$queryKVtoTuple = function (kv) {
	var splitted = A2(_elm_lang$core$String$split, '=', kv);
	var first = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(splitted));
	var firstDecoded = _evancz$elm_http$Http$uriDecode(first);
	var second = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, splitted)));
	var secondDecoded = _evancz$elm_http$Http$uriDecode(second);
	return {ctor: '_Tuple2', _0: firstDecoded, _1: secondDecoded};
};
var _sporto$hop$Hop_Address$extractQuery = function (route) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$drop,
				1,
				A2(_elm_lang$core$String$split, '?', route))));
};
var _sporto$hop$Hop_Address$parseQuery = function (route) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			_sporto$hop$Hop_Address$queryKVtoTuple,
			A2(
				_elm_lang$core$List$filter,
				function (_p0) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p0));
				},
				A2(
					_elm_lang$core$String$split,
					'&',
					_sporto$hop$Hop_Address$extractQuery(route)))));
};
var _sporto$hop$Hop_Address$extractPath = function (route) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$String$split,
				'?',
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(
							A2(_elm_lang$core$String$split, '#', route)))))));
};
var _sporto$hop$Hop_Address$parsePath = function (route) {
	return A2(
		_elm_lang$core$List$map,
		_evancz$elm_http$Http$uriDecode,
		A2(
			_elm_lang$core$List$filter,
			function (segment) {
				return _elm_lang$core$Basics$not(
					_elm_lang$core$String$isEmpty(segment));
			},
			A2(
				_elm_lang$core$String$split,
				'/',
				_sporto$hop$Hop_Address$extractPath(route))));
};
var _sporto$hop$Hop_Address$parse = function (route) {
	return {
		path: _sporto$hop$Hop_Address$parsePath(route),
		query: _sporto$hop$Hop_Address$parseQuery(route)
	};
};
var _sporto$hop$Hop_Address$getQuery = function (address) {
	return _elm_lang$core$Dict$isEmpty(address.query) ? '' : A2(
		_elm_lang$core$String$append,
		'?',
		A2(
			_elm_lang$core$String$join,
			'&',
			A2(
				_elm_lang$core$List$map,
				function (_p1) {
					var _p2 = _p1;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p2._0,
						A2(_elm_lang$core$Basics_ops['++'], '=', _p2._1));
				},
				A2(
					_elm_lang$core$List$map,
					function (_p3) {
						var _p4 = _p3;
						return {
							ctor: '_Tuple2',
							_0: _evancz$elm_http$Http$uriEncode(_p4._0),
							_1: _evancz$elm_http$Http$uriEncode(_p4._1)
						};
					},
					_elm_lang$core$Dict$toList(address.query)))));
};
var _sporto$hop$Hop_Address$getPath = function (address) {
	return A2(
		_elm_lang$core$String$append,
		'/',
		A2(
			_elm_lang$core$String$join,
			'/',
			A2(_elm_lang$core$List$map, _evancz$elm_http$Http$uriEncode, address.path)));
};

var _sporto$hop$Hop_In$removeBase = F2(
	function (config, pathWithQuery) {
		var regex = _elm_lang$core$Regex$regex(config.basePath);
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$AtMost(1),
			regex,
			_elm_lang$core$Basics$always(''),
			pathWithQuery);
	});
var _sporto$hop$Hop_In$getRelevantPathWithQuery = F2(
	function (config, href) {
		return config.hash ? A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$drop,
					1,
					A2(_elm_lang$core$String$split, '#', href)))) : A2(
			_sporto$hop$Hop_In$removeBase,
			config,
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				_elm_lang$core$List$head(
					A2(_elm_lang$core$String$split, '#', href))));
	});
var _sporto$hop$Hop_In$removeDomain = function (href) {
	return A2(
		_elm_lang$core$String$append,
		'/',
		A2(
			_elm_lang$core$String$join,
			'/',
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$List$tail(
					A2(_elm_lang$core$String$split, '/', href)))));
};
var _sporto$hop$Hop_In$removeProtocol = function (href) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$String$split, '//', href))));
};
var _sporto$hop$Hop_In$ingest = F2(
	function (config, href) {
		return _sporto$hop$Hop_Address$parse(
			A2(
				_sporto$hop$Hop_In$getRelevantPathWithQuery,
				config,
				_sporto$hop$Hop_In$removeDomain(
					_sporto$hop$Hop_In$removeProtocol(href))));
	});

var _sporto$hop$Hop_Utils$dedupSlash = A3(
	_elm_lang$core$Regex$replace,
	_elm_lang$core$Regex$All,
	_elm_lang$core$Regex$regex('/+'),
	function (_p0) {
		return '/';
	});

var _sporto$hop$Hop_Out$output = F2(
	function (config, address) {
		var query = _sporto$hop$Hop_Address$getQuery(address);
		var path = _sporto$hop$Hop_Address$getPath(address);
		var url = config.hash ? A2(
			_elm_lang$core$Basics_ops['++'],
			'#',
			A2(_elm_lang$core$Basics_ops['++'], path, query)) : (_elm_lang$core$String$isEmpty(config.basePath) ? A2(_elm_lang$core$Basics_ops['++'], path, query) : (_elm_lang$core$Native_Utils.eq(path, '/') ? A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			A2(_elm_lang$core$Basics_ops['++'], config.basePath, query)) : A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			A2(
				_elm_lang$core$Basics_ops['++'],
				config.basePath,
				A2(_elm_lang$core$Basics_ops['++'], path, query)))));
		var realPath = _sporto$hop$Hop_Utils$dedupSlash(url);
		return _elm_lang$core$Native_Utils.eq(realPath, '') ? '/' : realPath;
	});
var _sporto$hop$Hop_Out$outputFromPath = F2(
	function (config, path) {
		return A2(
			_sporto$hop$Hop_Out$output,
			config,
			_sporto$hop$Hop_Address$parse(path));
	});

var _sporto$hop$Hop$clearQuery = function (location) {
	return _elm_lang$core$Native_Utils.update(
		location,
		{query: _elm_lang$core$Dict$empty});
};
var _sporto$hop$Hop$removeQuery = F2(
	function (key, location) {
		var updatedQuery = A2(_elm_lang$core$Dict$remove, key, location.query);
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: updatedQuery});
	});
var _sporto$hop$Hop$setQuery = F2(
	function (query, location) {
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: query});
	});
var _sporto$hop$Hop$addQuery = F2(
	function (query, location) {
		var updatedQuery = A2(_elm_lang$core$Dict$union, query, location.query);
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: updatedQuery});
	});
var _sporto$hop$Hop$queryFromAddress = _sporto$hop$Hop_Address$getQuery;
var _sporto$hop$Hop$pathFromAddress = _sporto$hop$Hop_Address$getPath;
var _sporto$hop$Hop$outputFromPath = _sporto$hop$Hop_Out$outputFromPath;
var _sporto$hop$Hop$output = _sporto$hop$Hop_Out$output;
var _sporto$hop$Hop$ingest = _sporto$hop$Hop_In$ingest;
var _sporto$hop$Hop$makeResolver = F3(
	function (config, parse, rawInput) {
		var address = A2(_sporto$hop$Hop$ingest, config, rawInput);
		var parseResult = parse(
			A2(
				_elm_lang$core$String$dropLeft,
				1,
				A2(
					_elm_lang$core$Basics_ops['++'],
					_sporto$hop$Hop$pathFromAddress(address),
					'/')));
		return {ctor: '_Tuple2', _0: parseResult, _1: address};
	});

var _tripokey$elm_fuzzy$Fuzzy$dissect = F2(
	function (separators, strings) {
		dissect:
		while (true) {
			var _p0 = separators;
			if (_p0.ctor === '[]') {
				return strings;
			} else {
				var _p4 = _p0._0;
				var dissectEntry = function (entry) {
					var separatorLength = _elm_lang$core$String$length(_p4);
					var slice = F2(
						function (index, _p1) {
							var _p2 = _p1;
							var _p3 = _p2._0;
							var separatorSlice = _elm_lang$core$Native_List.fromArray(
								[
									A3(_elm_lang$core$String$slice, index, index + separatorLength, entry)
								]);
							var precedingSlice = _elm_lang$core$Native_Utils.eq(_p3, index) ? _elm_lang$core$Native_List.fromArray(
								[]) : _elm_lang$core$Native_List.fromArray(
								[
									A3(_elm_lang$core$String$slice, _p3, index, entry)
								]);
							return {
								ctor: '_Tuple2',
								_0: index + separatorLength,
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_p2._1,
									A2(_elm_lang$core$Basics_ops['++'], precedingSlice, separatorSlice))
							};
						});
					var indexes = A2(_elm_lang$core$String$indexes, _p4, entry);
					var result = A3(
						_elm_lang$core$List$foldl,
						slice,
						{
							ctor: '_Tuple2',
							_0: 0,
							_1: _elm_lang$core$Native_List.fromArray(
								[])
						},
						indexes);
					var first = _elm_lang$core$Basics$snd(result);
					var lastIndex = _elm_lang$core$Basics$fst(result);
					var entryLength = _elm_lang$core$String$length(entry);
					var last = _elm_lang$core$Native_Utils.eq(lastIndex, entryLength) ? _elm_lang$core$Native_List.fromArray(
						[]) : _elm_lang$core$Native_List.fromArray(
						[
							A3(_elm_lang$core$String$slice, lastIndex, entryLength, entry)
						]);
					return A2(_elm_lang$core$Basics_ops['++'], first, last);
				};
				var dissected = A3(
					_elm_lang$core$List$foldl,
					F2(
						function (e, s) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								s,
								dissectEntry(e));
						}),
					_elm_lang$core$Native_List.fromArray(
						[]),
					strings);
				var _v2 = _p0._1,
					_v3 = dissected;
				separators = _v2;
				strings = _v3;
				continue dissect;
			}
		}
	});
var _tripokey$elm_fuzzy$Fuzzy$quickSort = function (entries) {
	var _p5 = entries;
	if (_p5.ctor === '[]') {
		return {
			ctor: '_Tuple2',
			_0: 0,
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var _p6 = _p5._0;
		var partition = A2(
			_elm_lang$core$List$partition,
			function (e) {
				return _elm_lang$core$Native_Utils.cmp(e, _p6) < 0;
			},
			_p5._1);
		var smaller = _tripokey$elm_fuzzy$Fuzzy$quickSort(
			_elm_lang$core$Basics$fst(partition));
		var penalty = _elm_lang$core$List$isEmpty(
			_elm_lang$core$Basics$snd(smaller)) ? 0 : 1;
		var larger = _tripokey$elm_fuzzy$Fuzzy$quickSort(
			_elm_lang$core$Basics$snd(partition));
		return {
			ctor: '_Tuple2',
			_0: (_elm_lang$core$Basics$fst(smaller) + penalty) + _elm_lang$core$Basics$fst(larger),
			_1: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$snd(smaller),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Native_List.fromArray(
						[_p6]),
					_elm_lang$core$Basics$snd(larger)))
		};
	}
};
var _tripokey$elm_fuzzy$Fuzzy$initialModel = _elm_lang$core$Native_List.fromArray(
	[]);
var _tripokey$elm_fuzzy$Fuzzy$Match = F4(
	function (a, b, c, d) {
		return {score: a, offset: b, length: c, keys: d};
	});
var _tripokey$elm_fuzzy$Fuzzy$distance = F3(
	function (config, needle, hay) {
		var accumulate = F2(
			function (c, indexList) {
				var indexes = A2(
					_elm_lang$core$String$indexes,
					_elm_lang$core$String$fromChar(c),
					hay);
				var hayIndex = _elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$filter,
						function (e) {
							return _elm_lang$core$Basics$not(
								A2(_elm_lang$core$List$member, e, indexList));
						},
						indexes));
				var _p7 = hayIndex;
				if (_p7.ctor === 'Just') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						indexList,
						_elm_lang$core$Native_List.fromArray(
							[_p7._0]));
				} else {
					return indexList;
				}
			});
		var accumulated = A3(_elm_lang$core$String$foldl, accumulate, _tripokey$elm_fuzzy$Fuzzy$initialModel, needle);
		var sorted = _tripokey$elm_fuzzy$Fuzzy$quickSort(accumulated);
		var mPenalty = _elm_lang$core$Basics$fst(sorted) * config.movePenalty;
		var hPenalty = (_elm_lang$core$String$length(hay) - _elm_lang$core$List$length(accumulated)) * config.addPenalty;
		var nPenalty = (_elm_lang$core$String$length(needle) - _elm_lang$core$List$length(accumulated)) * config.removePenalty;
		return A4(
			_tripokey$elm_fuzzy$Fuzzy$Match,
			(mPenalty + hPenalty) + nPenalty,
			0,
			_elm_lang$core$String$length(hay),
			_elm_lang$core$Basics$snd(sorted));
	});
var _tripokey$elm_fuzzy$Fuzzy$Result = F2(
	function (a, b) {
		return {score: a, matches: b};
	});
var _tripokey$elm_fuzzy$Fuzzy$ConfigModel = F3(
	function (a, b, c) {
		return {addPenalty: a, movePenalty: b, removePenalty: c};
	});
var _tripokey$elm_fuzzy$Fuzzy$defaultConfig = A3(_tripokey$elm_fuzzy$Fuzzy$ConfigModel, 1, 100, 1000);
var _tripokey$elm_fuzzy$Fuzzy$match = F4(
	function (configs, separators, needle, hay) {
		var initialResult = A2(
			_tripokey$elm_fuzzy$Fuzzy$Result,
			0,
			_elm_lang$core$Native_List.fromArray(
				[]));
		var reduceHays = F3(
			function (ns, c, hs) {
				var padHays = F2(
					function (ns, hs) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							hs,
							A2(
								_elm_lang$core$List$repeat,
								ns - _elm_lang$core$List$length(hs),
								''));
					});
				var reduceRight = F3(
					function (ns, c, hs) {
						return A2(
							_elm_lang$core$List$take,
							_elm_lang$core$List$length(hs) - ((ns - c) - 1),
							hs);
					});
				var reduceLeft = F3(
					function (ns, c, hs) {
						return {
							ctor: '_Tuple2',
							_0: A3(
								_elm_lang$core$List$foldl,
								F2(
									function (e, sum) {
										return _elm_lang$core$String$length(e) + sum;
									}),
								0,
								A2(_elm_lang$core$List$take, c, hs)),
							_1: A2(_elm_lang$core$List$drop, c, hs)
						};
					});
				return A3(
					reduceLeft,
					ns,
					c,
					A3(
						reduceRight,
						ns,
						c,
						A2(padHays, ns, hs)));
			});
		var hays = A2(
			_tripokey$elm_fuzzy$Fuzzy$dissect,
			separators,
			_elm_lang$core$Native_List.fromArray(
				[hay]));
		var needles = A2(
			_tripokey$elm_fuzzy$Fuzzy$dissect,
			separators,
			_elm_lang$core$Native_List.fromArray(
				[needle]));
		var accumulateConfig = F2(
			function (c, sum) {
				var _p8 = c;
				switch (_p8.ctor) {
					case 'AddPenalty':
						return _elm_lang$core$Native_Utils.update(
							sum,
							{addPenalty: _p8._0});
					case 'RemovePenalty':
						return _elm_lang$core$Native_Utils.update(
							sum,
							{removePenalty: _p8._0});
					default:
						return _elm_lang$core$Native_Utils.update(
							sum,
							{movePenalty: _p8._0});
				}
			});
		var config = A3(_elm_lang$core$List$foldl, accumulateConfig, _tripokey$elm_fuzzy$Fuzzy$defaultConfig, configs);
		var minScore = F2(
			function (n, _p9) {
				var _p10 = _p9;
				var _p15 = _p10._0;
				var accumulateMatch = F2(
					function (e, _p11) {
						var _p12 = _p11;
						var _p14 = _p12._1;
						var _p13 = _p12._0;
						var newOffset = _p14 + _elm_lang$core$String$length(e);
						var eDistance = A3(_tripokey$elm_fuzzy$Fuzzy$distance, config, n, e);
						var newMatch = (_elm_lang$core$Native_Utils.cmp(eDistance.score, _p13.score) < 0) ? _elm_lang$core$Native_Utils.update(
							eDistance,
							{offset: _p14}) : _p13;
						return {ctor: '_Tuple2', _0: newMatch, _1: newOffset};
					});
				var initialPenalty = ((_elm_lang$core$String$length(n) * config.removePenalty) + (_elm_lang$core$String$length(n) * config.movePenalty)) + (_elm_lang$core$String$length(hay) * config.addPenalty);
				var initialMatch = A4(
					_tripokey$elm_fuzzy$Fuzzy$Match,
					initialPenalty,
					_p15,
					0,
					_elm_lang$core$Native_List.fromArray(
						[]));
				return _elm_lang$core$Basics$fst(
					A3(
						_elm_lang$core$List$foldl,
						accumulateMatch,
						{ctor: '_Tuple2', _0: initialMatch, _1: _p15},
						_p10._1));
			});
		var accumulateResult = F2(
			function (n, _p16) {
				var _p17 = _p16;
				var _p19 = _p17._0;
				var _p18 = _p17._1;
				var matchResult = A2(
					minScore,
					n,
					A3(
						reduceHays,
						_elm_lang$core$List$length(needles),
						_p18,
						hays));
				var newResult = _elm_lang$core$Native_Utils.update(
					_p19,
					{
						score: matchResult.score + _p19.score,
						matches: A2(
							_elm_lang$core$Basics_ops['++'],
							_p19.matches,
							_elm_lang$core$Native_List.fromArray(
								[matchResult]))
					});
				return {ctor: '_Tuple2', _0: newResult, _1: _p18 + 1};
			});
		return _elm_lang$core$Basics$fst(
			A3(
				_elm_lang$core$List$foldl,
				accumulateResult,
				{ctor: '_Tuple2', _0: initialResult, _1: 0},
				needles));
	});
var _tripokey$elm_fuzzy$Fuzzy$MovePenalty = function (a) {
	return {ctor: 'MovePenalty', _0: a};
};
var _tripokey$elm_fuzzy$Fuzzy$movePenalty = function (penalty) {
	return _tripokey$elm_fuzzy$Fuzzy$MovePenalty(penalty);
};
var _tripokey$elm_fuzzy$Fuzzy$RemovePenalty = function (a) {
	return {ctor: 'RemovePenalty', _0: a};
};
var _tripokey$elm_fuzzy$Fuzzy$removePenalty = function (penalty) {
	return _tripokey$elm_fuzzy$Fuzzy$RemovePenalty(penalty);
};
var _tripokey$elm_fuzzy$Fuzzy$AddPenalty = function (a) {
	return {ctor: 'AddPenalty', _0: a};
};
var _tripokey$elm_fuzzy$Fuzzy$addPenalty = function (penalty) {
	return _tripokey$elm_fuzzy$Fuzzy$AddPenalty(penalty);
};

var _user$project$FieldSetTypes$Field = F6(
	function (a, b, c, d, e, f) {
		return {code: a, display: b, secret: c, required: d, value: e, loadedValue: f};
	});
var _user$project$FieldSetTypes$FieldPassword = function (a) {
	return {ctor: 'FieldPassword', _0: a};
};
var _user$project$FieldSetTypes$FieldString = function (a) {
	return {ctor: 'FieldString', _0: a};
};
var _user$project$FieldSetTypes$updateFieldValue = F2(
	function (stringValue, oldFieldValue) {
		var _p0 = oldFieldValue;
		if (_p0.ctor === 'FieldString') {
			return _user$project$FieldSetTypes$FieldString(stringValue);
		} else {
			return _user$project$FieldSetTypes$FieldPassword(
				_elm_lang$core$Maybe$Just(stringValue));
		}
	});

var _user$project$AccountTypes$Account = F3(
	function (a, b, c) {
		return {code: a, display: b, fields: c};
	});

var _user$project$FieldSetDecoder$fieldValueDecoder = function (fieldType) {
	var _p0 = fieldType;
	switch (_p0) {
		case 'string':
			return A2(_elm_lang$core$Json_Decode$map, _user$project$FieldSetTypes$FieldString, _elm_lang$core$Json_Decode$string);
		case 'password':
			return _elm_lang$core$Json_Decode$succeed(
				_user$project$FieldSetTypes$FieldPassword(_elm_lang$core$Maybe$Nothing));
		default:
			return _elm_lang$core$Json_Decode$fail(
				A2(_elm_lang$core$Basics_ops['++'], 'Unsupported field type: ', fieldType));
	}
};
var _user$project$FieldSetDecoder$fieldDecoder = A2(
	_elm_lang$core$Json_Decode$andThen,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldType', _elm_lang$core$Json_Decode$string),
	function (fieldType) {
		return A7(
			_elm_lang$core$Json_Decode$object6,
			_user$project$FieldSetTypes$Field,
			A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'secret', _elm_lang$core$Json_Decode$bool),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'required', _elm_lang$core$Json_Decode$bool),
			A2(
				_elm_lang$core$Json_Decode_ops[':='],
				'value',
				_user$project$FieldSetDecoder$fieldValueDecoder(fieldType)),
			A2(
				_elm_lang$core$Json_Decode_ops[':='],
				'value',
				_user$project$FieldSetDecoder$fieldValueDecoder(fieldType)));
	});

var _user$project$AccountDecoder$accountDecoder = A4(
	_elm_lang$core$Json_Decode$object3,
	_user$project$AccountTypes$Account,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'fields',
		_elm_lang$core$Json_Decode$list(_user$project$FieldSetDecoder$fieldDecoder)));
var _user$project$AccountDecoder$decodeAccount = function (string) {
	return A2(_elm_lang$core$Json_Decode$decodeString, _user$project$AccountDecoder$accountDecoder, string);
};

var _user$project$FieldSetEncoder$isDirty = function (field) {
	return !_elm_lang$core$Native_Utils.eq(field.value, field.loadedValue);
};
var _user$project$FieldSetEncoder$maybeString = function (maybeString) {
	var _p0 = maybeString;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$core$Json_Encode$null;
	} else {
		return _elm_lang$core$Json_Encode$string(_p0._0);
	}
};
var _user$project$FieldSetEncoder$encodeFieldValue = function (fieldValue) {
	var _p1 = fieldValue;
	if (_p1.ctor === 'FieldString') {
		return _elm_lang$core$Maybe$Just(_p1._0);
	} else {
		var _p2 = _p1._0;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(_p2._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _user$project$FieldSetEncoder$encodeField = function (field) {
	var fieldValue = _user$project$FieldSetEncoder$encodeFieldValue(field.value);
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'code',
				_1: _elm_lang$core$Json_Encode$string(field.code)
			},
				{
				ctor: '_Tuple2',
				_0: 'value',
				_1: _user$project$FieldSetEncoder$maybeString(fieldValue)
			}
			]));
};
var _user$project$FieldSetEncoder$encodeFieldSet = function (fields) {
	var fieldValues = A2(
		_elm_lang$core$List$map,
		_user$project$FieldSetEncoder$encodeField,
		A2(_elm_lang$core$List$filter, _user$project$FieldSetEncoder$isDirty, fields));
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'fields',
				_1: _elm_lang$core$Json_Encode$list(fieldValues)
			}
			]));
};

var _user$project$AccountEncoder$encodeAccount = function (account) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'code',
				_1: _elm_lang$core$Json_Encode$string(account.code)
			},
				{
				ctor: '_Tuple2',
				_0: 'display',
				_1: _elm_lang$core$Json_Encode$string(account.display)
			},
				{
				ctor: '_Tuple2',
				_0: 'fields',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _user$project$FieldSetEncoder$encodeField, account.fields))
			}
			]));
};

var _user$project$Css_Admin$name = 'lamassuAdmin';
var _user$project$Css_Admin$helpers = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace(_user$project$Css_Admin$name);
var _user$project$Css_Admin$class = _user$project$Css_Admin$helpers.$class;
var _user$project$Css_Admin$classList = _user$project$Css_Admin$helpers.classList;
var _user$project$Css_Admin$id = _user$project$Css_Admin$helpers.id;
var _user$project$Css_Admin$className = function ($class) {
	return A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, _user$project$Css_Admin$name, $class);
};

var _user$project$Css_Classes$TableButton = {ctor: 'TableButton'};
var _user$project$Css_Classes$FocusedComponent = {ctor: 'FocusedComponent'};
var _user$project$Css_Classes$Component = {ctor: 'Component'};
var _user$project$Css_Classes$BasicInput = {ctor: 'BasicInput'};
var _user$project$Css_Classes$Active = {ctor: 'Active'};
var _user$project$Css_Classes$ButtonRow = {ctor: 'ButtonRow'};
var _user$project$Css_Classes$Button = {ctor: 'Button'};
var _user$project$Css_Classes$FormRow = {ctor: 'FormRow'};
var _user$project$Css_Classes$ConfigContainer = {ctor: 'ConfigContainer'};
var _user$project$Css_Classes$ConfigTableGlobalRow = {ctor: 'ConfigTableGlobalRow'};
var _user$project$Css_Classes$ConfigTable = {ctor: 'ConfigTable'};
var _user$project$Css_Classes$SectionLabel = {ctor: 'SectionLabel'};
var _user$project$Css_Classes$CryptoTabsActive = {ctor: 'CryptoTabsActive'};
var _user$project$Css_Classes$CryptoTabs = {ctor: 'CryptoTabs'};
var _user$project$Css_Classes$Content = {ctor: 'Content'};
var _user$project$Css_Classes$NavBarRoute = {ctor: 'NavBarRoute'};
var _user$project$Css_Classes$NavBarCategory = {ctor: 'NavBarCategory'};
var _user$project$Css_Classes$NavBarCategoryContainer = {ctor: 'NavBarCategoryContainer'};
var _user$project$Css_Classes$NavBarItemActive = {ctor: 'NavBarItemActive'};
var _user$project$Css_Classes$MainRight = {ctor: 'MainRight'};
var _user$project$Css_Classes$MainLeft = {ctor: 'MainLeft'};
var _user$project$Css_Classes$NavBar = {ctor: 'NavBar'};

var _user$project$FieldSet$updateField = F3(
	function (fieldCode, fieldValueString, field) {
		return _elm_lang$core$Native_Utils.eq(
			function (_) {
				return _.code;
			}(field),
			fieldCode) ? _elm_lang$core$Native_Utils.update(
			field,
			{
				value: A2(_user$project$FieldSetTypes$updateFieldValue, fieldValueString, field.value)
			}) : field;
	});
var _user$project$FieldSet$updateFieldSet = F3(
	function (fieldCode, fieldValueString, fields) {
		return A2(
			_elm_lang$core$List$map,
			A2(_user$project$FieldSet$updateField, fieldCode, fieldValueString),
			fields);
	});
var _user$project$FieldSet$update = F2(
	function (msg, model) {
		var _p0 = msg;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A3(_user$project$FieldSet$updateFieldSet, _p0._0, _p0._1, model),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$FieldSet$Input = F2(
	function (a, b) {
		return {ctor: 'Input', _0: a, _1: b};
	});
var _user$project$FieldSet$fieldComponent = function (field) {
	var inputEl = function () {
		var _p1 = field.value;
		if (_p1.ctor === 'FieldString') {
			return A2(
				_elm_lang$html$Html$input,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Events$onInput(
						_user$project$FieldSet$Input(field.code)),
						_elm_lang$html$Html_Attributes$value(_p1._0)
					]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		} else {
			return A2(
				_elm_lang$html$Html$input,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Events$onInput(
						_user$project$FieldSet$Input(field.code)),
						_elm_lang$html$Html_Attributes$type$('password')
					]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		}
	}();
	return A2(
		_elm_lang$html$Html$label,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(field.display)
					])),
				inputEl
			]));
};
var _user$project$FieldSet$fieldView = function (field) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Admin$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$FormRow]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$FieldSet$fieldComponent(field)
			]));
};
var _user$project$FieldSet$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Admin$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$ConfigContainer]))
			]),
		A2(_elm_lang$core$List$map, _user$project$FieldSet$fieldView, model));
};

var _user$project$Account$init = _krisajenkins$remotedata$RemoteData$NotAsked;
var _user$project$Account$FieldSetMsg = function (a) {
	return {ctor: 'FieldSetMsg', _0: a};
};
var _user$project$Account$Submit = {ctor: 'Submit'};
var _user$project$Account$view = function (model) {
	var _p0 = model;
	switch (_p0.ctor) {
		case 'NotAsked':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		case 'Loading':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Loading...')
					]));
		case 'Failure':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p0._0))
					]));
		default:
			var _p1 = _p0._0;
			var fieldSetView = A2(
				_elm_lang$html$Html_App$map,
				_user$project$Account$FieldSetMsg,
				_user$project$FieldSet$view(_p1.fields));
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$SectionLabel]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p1.display)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								fieldSetView,
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Css_Admin$class(
										_elm_lang$core$Native_List.fromArray(
											[_user$project$Css_Classes$ButtonRow]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$div,
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html_Events$onClick(_user$project$Account$Submit),
												_user$project$Css_Admin$class(
												_elm_lang$core$Native_List.fromArray(
													[_user$project$Css_Classes$Button]))
											]),
										_elm_lang$core$Native_List.fromArray(
											[
												_elm_lang$html$Html$text('Submit')
											]))
									]))
							]))
					]));
	}
};
var _user$project$Account$Load = function (a) {
	return {ctor: 'Load', _0: a};
};
var _user$project$Account$getForm = function (code) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Account$Load,
		_krisajenkins$remotedata$RemoteData$asCmd(
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$AccountDecoder$accountDecoder),
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					A2(_elm_lang$core$Basics_ops['++'], '/api/account/', code)))));
};
var _user$project$Account$load = function (code) {
	return {
		ctor: '_Tuple2',
		_0: _krisajenkins$remotedata$RemoteData$Loading,
		_1: _user$project$Account$getForm(code)
	};
};
var _user$project$Account$postForm = function (account) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Account$Load,
		_krisajenkins$remotedata$RemoteData$asCmd(
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$AccountDecoder$accountDecoder),
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
					_user$project$AccountEncoder$encodeAccount(account),
					A3(
						_lukewestby$elm_http_builder$HttpBuilder$withHeader,
						'Content-Type',
						'application/json',
						_lukewestby$elm_http_builder$HttpBuilder$post('/api/account'))))));
};
var _user$project$Account$update = F2(
	function (msg, model) {
		var _p2 = msg;
		switch (_p2.ctor) {
			case 'Load':
				return {
					ctor: '_Tuple2',
					_0: A2(
						_krisajenkins$remotedata$RemoteData$map,
						function (_) {
							return _.data;
						},
						_p2._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Submit':
				var _p3 = model;
				if (_p3.ctor === 'Success') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_elm_lang$core$Debug$log, 'DEBUG1', model),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Account$postForm(_p3._0)
							]));
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				}
			default:
				var mapper = function (account) {
					var _p4 = A2(_user$project$FieldSet$update, _p2._0, account.fields);
					var fields = _p4._0;
					var fieldSetCmd = _p4._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							account,
							{fields: fields}),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_elm_lang$core$Platform_Cmd$map, _user$project$Account$FieldSetMsg, fieldSetCmd)
							]));
				};
				return A2(_krisajenkins$remotedata$RemoteData$update, mapper, model);
		}
	});

var _user$project$Selectize$rawOnKeyUp = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'keyup',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$keyCode));
};
var _user$project$Selectize$rawOnKeyDownNoPrevent = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'keydown',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$keyCode));
};
var _user$project$Selectize$preventSpecialDecoder = function (specialKeys) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_lang$html$Html_Events$keyCode,
		function (code) {
			return A2(_elm_lang$core$List$member, code, specialKeys) ? _elm_lang$core$Json_Decode$succeed(code) : _elm_lang$core$Json_Decode$fail('don\'t prevent');
		});
};
var _user$project$Selectize$rawOnKeyDown = F2(
	function (specialKeys, tagger) {
		var options = {stopPropagation: false, preventDefault: true};
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'keydown',
			options,
			A2(
				_elm_lang$core$Json_Decode$map,
				tagger,
				_user$project$Selectize$preventSpecialDecoder(specialKeys)));
	});
var _user$project$Selectize$deleteSpecialKeys = _elm_lang$core$Native_List.fromArray(
	[38, 40, 9, 13]);
var _user$project$Selectize$noDeleteSpecialKeys = _elm_lang$core$Native_List.fromArray(
	[8, 38, 40, 9, 13]);
var _user$project$Selectize$onMouseDown = F3(
	function (config, state, id) {
		return _elm_lang$html$Html_Events$onMouseDown(
			A2(config.onAdd, id, state));
	});
var _user$project$Selectize$mapToItem = F3(
	function (toId, available, id) {
		return _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				function (_p0) {
					return A2(
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.eq(x, y);
							}),
						id,
						toId(_p0));
				},
				available));
	});
var _user$project$Selectize$diffItems = F3(
	function (config, a, b) {
		var isEqual = F2(
			function (itemA, itemB) {
				return _elm_lang$core$Native_Utils.eq(
					config.toId(itemA),
					config.toId(itemB));
			});
		var notInB = F2(
			function (b, item) {
				return _elm_lang$core$Basics$not(
					A2(
						_elm_lang$core$List$any,
						isEqual(item),
						b));
			});
		return A2(
			_elm_lang$core$List$filter,
			notInB(b),
			a);
	});
var _user$project$Selectize$buildItems = F3(
	function (selectedItems, availableItems, boxItems) {
		return {selectedItems: selectedItems, availableItems: availableItems, boxItems: boxItems};
	});
var _user$project$Selectize$noMatches = F3(
	function (config, boxItems, state) {
		var h = config.htmlOptions;
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(boxItems),
			0) ? A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$classList(
					_elm_lang$core$Native_List.fromArray(
						[
							{ctor: '_Tuple2', _0: h.classes.info, _1: true},
							{ctor: '_Tuple2', _0: h.classes.infoNoMatches, _1: true}
						]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(h.noMatches)
				])) : A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$Selectize$editingBoxView = F3(
	function (config, items, state) {
		var h = config.htmlOptions;
		var c = h.classes;
		var boxItemHtml = F2(
			function (pos, item) {
				return A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$classList(
							_elm_lang$core$Native_List.fromArray(
								[
									{ctor: '_Tuple2', _0: c.boxItem, _1: true},
									{
									ctor: '_Tuple2',
									_0: c.boxItemActive,
									_1: _elm_lang$core$Native_Utils.eq(state.boxPosition, pos)
								}
								])),
							A3(
							_user$project$Selectize$onMouseDown,
							config,
							state,
							config.toId(item))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							config.optionDisplay(item))
						]));
			});
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class(c.boxItems)
				]),
			A2(_elm_lang$core$List$indexedMap, boxItemHtml, items.boxItems));
	});
var _user$project$Selectize$idleBoxView = F3(
	function (config, items, state) {
		var remainingItems = _elm_lang$core$List$length(items.availableItems) - _elm_lang$core$List$length(items.selectedItems);
		var h = config.htmlOptions;
		var typeForMore = (_elm_lang$core$Native_Utils.cmp(remainingItems, config.boxLength) > 0) ? A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class(h.classes.info)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(h.typeForMore)
				])) : A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[]));
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(items.selectedItems),
			config.maxItems) ? A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[])) : A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class(h.classes.boxContainer)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A3(_user$project$Selectize$editingBoxView, config, items, state),
					typeForMore
				]));
	});
var _user$project$Selectize$boxView = F3(
	function (config, items, state) {
		var h = config.htmlOptions;
		var _p1 = state.status;
		switch (_p1.ctor) {
			case 'Editing':
				return A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class(h.classes.boxContainer)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A3(_user$project$Selectize$editingBoxView, config, items, state),
							A3(_user$project$Selectize$noMatches, config, items.boxItems, state)
						]));
			case 'Initial':
				return A3(_user$project$Selectize$idleBoxView, config, items, state);
			case 'Idle':
				return A3(_user$project$Selectize$idleBoxView, config, items, state);
			case 'Cleared':
				return A3(_user$project$Selectize$idleBoxView, config, items, state);
			default:
				return A2(
					_elm_lang$html$Html$span,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]));
		}
	});
var _user$project$Selectize$itemView = F3(
	function (config, isFallback, item) {
		var c = config.htmlOptions.classes;
		return A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$classList(
					_elm_lang$core$Native_List.fromArray(
						[
							{ctor: '_Tuple2', _0: c.selectedItem, _1: true},
							{ctor: '_Tuple2', _0: c.fallbackItem, _1: isFallback}
						]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(
					config.selectedDisplay(item))
				]));
	});
var _user$project$Selectize$fallbackItemsView = F4(
	function (config, items, fallbackItems, state) {
		var selectedItems = items.selectedItems;
		var isFallback = _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(selectedItems),
			0);
		var itemsView = isFallback ? fallbackItems : items.selectedItems;
		var c = config.htmlOptions.classes;
		var classes = _elm_lang$html$Html_Attributes$classList(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: c.selectedItems, _1: true},
					{ctor: '_Tuple2', _0: c.fallbackItems, _1: isFallback}
				]));
		return A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[classes]),
			A2(
				_elm_lang$core$List$map,
				A2(_user$project$Selectize$itemView, config, isFallback),
				itemsView));
	});
var _user$project$Selectize$itemsView = F4(
	function (config, items, fallbackItems, state) {
		var _p2 = state.status;
		switch (_p2.ctor) {
			case 'Editing':
				return A4(
					_user$project$Selectize$fallbackItemsView,
					config,
					items,
					_elm_lang$core$Native_List.fromArray(
						[]),
					state);
			case 'Initial':
				return A4(
					_user$project$Selectize$fallbackItemsView,
					config,
					items,
					_elm_lang$core$Native_List.fromArray(
						[]),
					state);
			case 'Idle':
				return A4(
					_user$project$Selectize$fallbackItemsView,
					config,
					items,
					_elm_lang$core$Native_List.fromArray(
						[]),
					state);
			case 'Cleared':
				return A4(_user$project$Selectize$fallbackItemsView, config, items, fallbackItems, state);
			default:
				return A4(_user$project$Selectize$fallbackItemsView, config, items, fallbackItems, state);
		}
	});
var _user$project$Selectize$clean = function (s) {
	return _elm_lang$core$String$toLower(
		_elm_lang$core$String$trim(s));
};
var _user$project$Selectize$HtmlOptions = F6(
	function (a, b, c, d, e, f) {
		return {instructionsForBlank: a, noMatches: b, typeForMore: c, atMaxLength: d, noOptions: e, classes: f};
	});
var _user$project$Selectize$HtmlClasses = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return {container: a, noOptions: b, singleItemContainer: c, multiItemContainer: d, selectBox: e, selectedItems: f, fallbackItems: g, fallbackItem: h, selectedItem: i, boxContainer: j, boxItems: k, boxItem: l, boxItemActive: m, info: n, infoNoMatches: o, inputEditing: p};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Selectize$State = F3(
	function (a, b, c) {
		return {boxPosition: a, status: b, string: c};
	});
var _user$project$Selectize$Config = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {maxItems: a, boxLength: b, toMsg: c, onAdd: d, onRemove: e, onFocus: f, onBlur: g, toId: h, selectedDisplay: i, optionDisplay: j, match: k, htmlOptions: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Selectize$Items = F3(
	function (a, b, c) {
		return {selectedItems: a, availableItems: b, boxItems: c};
	});
var _user$project$Selectize$Blurred = {ctor: 'Blurred'};
var _user$project$Selectize$initialSelectize = {boxPosition: -1, string: '', status: _user$project$Selectize$Blurred};
var _user$project$Selectize$onBlur = F2(
	function (config, state) {
		return _elm_lang$html$Html_Events$onBlur(
			config.onBlur(
				_elm_lang$core$Native_Utils.update(
					state,
					{status: _user$project$Selectize$Blurred})));
	});
var _user$project$Selectize$Idle = {ctor: 'Idle'};
var _user$project$Selectize$Cleared = {ctor: 'Cleared'};
var _user$project$Selectize$addSelection = F3(
	function (config, items, state) {
		var maybeItem = (_elm_lang$core$Native_Utils.cmp(state.boxPosition, 0) < 0) ? _elm_lang$core$Maybe$Nothing : function (_p3) {
			return _elm_lang$core$List$head(
				A2(_elm_lang$core$List$drop, state.boxPosition, _p3));
		}(items.boxItems);
		var _p4 = maybeItem;
		if (_p4.ctor === 'Nothing') {
			return config.toMsg(state);
		} else {
			return A2(
				config.onAdd,
				config.toId(_p4._0),
				_elm_lang$core$Native_Utils.update(
					state,
					{status: _user$project$Selectize$Cleared, string: '', boxPosition: -1}));
		}
	});
var _user$project$Selectize$updateKeyDown = F4(
	function (config, items, state, keyCode) {
		if (_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(items.selectedItems),
			config.maxItems)) {
			var _p5 = keyCode;
			if (_p5 === 8) {
				return (_elm_lang$core$String$isEmpty(
					A2(_elm_lang$core$Debug$log, 'DEBUG10', state.string)) && function (_p6) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$List$isEmpty(_p6));
				}(items.selectedItems)) ? config.onRemove(state) : config.toMsg(state);
			} else {
				return config.toMsg(state);
			}
		} else {
			var _p7 = keyCode;
			switch (_p7) {
				case 38:
					return config.toMsg(
						_elm_lang$core$Native_Utils.update(
							state,
							{
								boxPosition: A2(_elm_lang$core$Basics$max, -1, state.boxPosition - 1)
							}));
				case 40:
					return config.toMsg(
						_elm_lang$core$Native_Utils.update(
							state,
							{
								boxPosition: A2(
									_elm_lang$core$Basics$min,
									_elm_lang$core$List$length(items.boxItems) - 1,
									state.boxPosition + 1)
							}));
				case 13:
					return A3(_user$project$Selectize$addSelection, config, items, state);
				case 8:
					return (_elm_lang$core$String$isEmpty(state.string) && function (_p8) {
						return _elm_lang$core$Basics$not(
							_elm_lang$core$List$isEmpty(_p8));
					}(items.selectedItems)) ? config.onRemove(state) : config.toMsg(state);
				case 9:
					return A3(_user$project$Selectize$addSelection, config, items, state);
				default:
					return config.toMsg(state);
			}
		}
	});
var _user$project$Selectize$onKeyDown = F3(
	function (config, items, state) {
		return _user$project$Selectize$rawOnKeyDownNoPrevent(
			A3(_user$project$Selectize$updateKeyDown, config, items, state));
	});
var _user$project$Selectize$onKeyDownDelete = F3(
	function (config, items, state) {
		return A2(
			_user$project$Selectize$rawOnKeyDown,
			_user$project$Selectize$deleteSpecialKeys,
			A3(_user$project$Selectize$updateKeyDown, config, items, state));
	});
var _user$project$Selectize$onKeyDownNoDelete = F3(
	function (config, items, state) {
		return A2(
			_user$project$Selectize$rawOnKeyDown,
			_user$project$Selectize$noDeleteSpecialKeys,
			A3(_user$project$Selectize$updateKeyDown, config, items, state));
	});
var _user$project$Selectize$Editing = {ctor: 'Editing'};
var _user$project$Selectize$onInput = F2(
	function (config, state) {
		var tagger = function (s) {
			return _elm_lang$core$Native_Utils.eq(
				_elm_lang$core$String$length(s),
				0) ? config.toMsg(
				_elm_lang$core$Native_Utils.update(
					state,
					{status: _user$project$Selectize$Idle, string: s})) : config.toMsg(
				_elm_lang$core$Native_Utils.update(
					state,
					{status: _user$project$Selectize$Editing, string: s}));
		};
		return _elm_lang$html$Html_Events$onInput(tagger);
	});
var _user$project$Selectize$Initial = {ctor: 'Initial'};
var _user$project$Selectize$updateKeyUp = F4(
	function (config, items, state, keyCode) {
		return (_elm_lang$core$Native_Utils.eq(keyCode, 13) || _elm_lang$core$Native_Utils.eq(keyCode, 9)) ? config.toMsg(
			_elm_lang$core$Native_Utils.update(
				state,
				{status: _user$project$Selectize$Initial})) : config.toMsg(state);
	});
var _user$project$Selectize$onKeyUp = F3(
	function (config, items, state) {
		return _user$project$Selectize$rawOnKeyUp(
			A3(_user$project$Selectize$updateKeyUp, config, items, state));
	});
var _user$project$Selectize$onFocus = F2(
	function (config, state) {
		return _elm_lang$html$Html_Events$onFocus(
			config.onFocus(
				_elm_lang$core$Native_Utils.update(
					state,
					{status: _user$project$Selectize$Initial, boxPosition: -1})));
	});
var _user$project$Selectize$view = F5(
	function (config, selectedIds, availableItems, fallbackIds, state) {
		if (_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(availableItems),
			0)) {
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class(config.htmlOptions.classes.container)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class(config.htmlOptions.classes.noOptions)
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(config.htmlOptions.noOptions)
							]))
					]));
		} else {
			var onFocusAtt = A2(_user$project$Selectize$onFocus, config, state);
			var onBlurAtt = A2(_user$project$Selectize$onBlur, config, state);
			var onInputAtt = A2(_user$project$Selectize$onInput, config, state);
			var fallbackItems = A2(
				_elm_lang$core$List$filterMap,
				A2(_user$project$Selectize$mapToItem, config.toId, availableItems),
				fallbackIds);
			var selectedItems = A2(
				_elm_lang$core$List$filterMap,
				A2(_user$project$Selectize$mapToItem, config.toId, availableItems),
				selectedIds);
			var remainingItems = A3(_user$project$Selectize$diffItems, config, availableItems, selectedItems);
			var boxItems = A2(
				_elm_lang$core$List$take,
				5,
				A2(config.match, state.string, remainingItems));
			var items = A3(_user$project$Selectize$buildItems, selectedItems, availableItems, boxItems);
			var keyDown = (_elm_lang$core$Native_Utils.cmp(config.maxItems, 1) > 0) ? (_elm_lang$core$String$isEmpty(state.string) ? A3(_user$project$Selectize$onKeyDownNoDelete, config, items, state) : A3(_user$project$Selectize$onKeyDownDelete, config, items, state)) : A3(_user$project$Selectize$onKeyDown, config, items, state);
			var h = config.htmlOptions;
			var editInput = function () {
				var _p9 = state.status;
				switch (_p9.ctor) {
					case 'Initial':
						return (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$List$length(selectedItems),
							config.maxItems) < 0) ? A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[onBlurAtt, onInputAtt]),
							_elm_lang$core$Native_List.fromArray(
								[])) : A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[
									onBlurAtt,
									onInputAtt,
									_elm_lang$html$Html_Attributes$maxlength(0)
								]),
							_elm_lang$core$Native_List.fromArray(
								[]));
					case 'Idle':
						return (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$List$length(selectedItems),
							config.maxItems) < 0) ? A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[onBlurAtt, onInputAtt]),
							_elm_lang$core$Native_List.fromArray(
								[])) : A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[
									onBlurAtt,
									onInputAtt,
									_elm_lang$html$Html_Attributes$maxlength(0)
								]),
							_elm_lang$core$Native_List.fromArray(
								[]));
					case 'Editing':
						var maxlength$ = _elm_lang$core$Native_Utils.eq(
							_elm_lang$core$List$length(boxItems),
							0) ? 0 : 524288;
						return A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$maxlength(maxlength$),
									onBlurAtt,
									onInputAtt,
									_elm_lang$html$Html_Attributes$class(h.classes.inputEditing)
								]),
							_elm_lang$core$Native_List.fromArray(
								[]));
					case 'Cleared':
						return A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[
									A3(_user$project$Selectize$onKeyUp, config, items, state),
									_elm_lang$html$Html_Attributes$value(''),
									onBlurAtt,
									onInputAtt
								]),
							_elm_lang$core$Native_List.fromArray(
								[]));
					default:
						return A2(
							_elm_lang$html$Html$input,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$maxlength(0),
									onFocusAtt,
									_elm_lang$html$Html_Attributes$value('')
								]),
							_elm_lang$core$Native_List.fromArray(
								[]));
				}
			}();
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class(h.classes.container)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$label,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$classList(
								_elm_lang$core$Native_List.fromArray(
									[
										{
										ctor: '_Tuple2',
										_0: h.classes.singleItemContainer,
										_1: _elm_lang$core$Native_Utils.eq(config.maxItems, 1)
									},
										{
										ctor: '_Tuple2',
										_0: h.classes.multiItemContainer,
										_1: _elm_lang$core$Native_Utils.cmp(config.maxItems, 1) > 0
									}
									]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$span,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$class(h.classes.selectBox),
										keyDown
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$span,
										_elm_lang$core$Native_List.fromArray(
											[]),
										_elm_lang$core$Native_List.fromArray(
											[
												A4(_user$project$Selectize$itemsView, config, items, fallbackItems, state)
											])),
										editInput
									])),
								A3(_user$project$Selectize$boxView, config, items, state)
							]))
					]));
		}
	});

var _user$project$ConfigTypes$cryptoToString = function (crypto) {
	var _p0 = crypto;
	if (_p0.ctor === 'GlobalCrypto') {
		return 'global';
	} else {
		return _p0._0;
	}
};
var _user$project$ConfigTypes$machineToString = function (machine) {
	var _p1 = machine;
	if (_p1.ctor === 'GlobalMachine') {
		return 'global';
	} else {
		return _p1._0;
	}
};
var _user$project$ConfigTypes$fieldValueToString = function (fieldValue) {
	var _p2 = fieldValue;
	switch (_p2.ctor) {
		case 'FieldStringValue':
			return _p2._0;
		case 'FieldPercentageValue':
			return _elm_lang$core$Basics$toString(_p2._0);
		case 'FieldIntegerValue':
			return _elm_lang$core$Basics$toString(_p2._0);
		case 'FieldOnOffValue':
			return _p2._0 ? 'on' : 'off';
		case 'FieldAccountValue':
			return _p2._0;
		case 'FieldCurrencyValue':
			return _p2._0;
		case 'FieldCryptoCurrencyValue':
			return _elm_lang$core$Native_Utils.crashCase(
				'ConfigTypes',
				{
					start: {line: 175, column: 5},
					end: {line: 201, column: 43}
				},
				_p2)('N/A for cryptoCurrency');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'ConfigTypes',
				{
					start: {line: 175, column: 5},
					end: {line: 201, column: 43}
				},
				_p2)('N/A for language');
	}
};
var _user$project$ConfigTypes$accountRecToDisplayRec = function (accountRec) {
	return {code: accountRec.code, display: accountRec.display};
};
var _user$project$ConfigTypes$DisplayRec = F2(
	function (a, b) {
		return {code: a, display: b};
	});
var _user$project$ConfigTypes$MachineDisplay = F2(
	function (a, b) {
		return {machine: a, display: b};
	});
var _user$project$ConfigTypes$CryptoDisplay = F2(
	function (a, b) {
		return {crypto: a, display: b};
	});
var _user$project$ConfigTypes$FieldScope = F2(
	function (a, b) {
		return {crypto: a, machine: b};
	});
var _user$project$ConfigTypes$FieldLocator = F4(
	function (a, b, c, d) {
		return {fieldScope: a, code: b, fieldType: c, fieldClass: d};
	});
var _user$project$ConfigTypes$FieldInstance = F4(
	function (a, b, c, d) {
		return {fieldLocator: a, component: b, fieldValue: c, loadedFieldValue: d};
	});
var _user$project$ConfigTypes$ResolvedFieldInstance = F2(
	function (a, b) {
		return {fieldLocator: a, fieldValue: b};
	});
var _user$project$ConfigTypes$Field = F2(
	function (a, b) {
		return {fieldLocator: a, fieldValue: b};
	});
var _user$project$ConfigTypes$FieldDescriptor = F4(
	function (a, b, c, d) {
		return {code: a, display: b, fieldType: c, fieldClass: d};
	});
var _user$project$ConfigTypes$ConfigSchema = F5(
	function (a, b, c, d, e) {
		return {code: a, display: b, cryptoScope: c, machineScope: d, entries: e};
	});
var _user$project$ConfigTypes$ConfigGroup = F3(
	function (a, b, c) {
		return {schema: a, values: b, data: c};
	});
var _user$project$ConfigTypes$AccountRec = F4(
	function (a, b, c, d) {
		return {code: a, display: b, $class: c, cryptos: d};
	});
var _user$project$ConfigTypes$ConfigData = F5(
	function (a, b, c, d, e) {
		return {cryptoCurrencies: a, currencies: b, languages: c, accounts: d, machines: e};
	});
var _user$project$ConfigTypes$GlobalCrypto = {ctor: 'GlobalCrypto'};
var _user$project$ConfigTypes$globalCryptoDisplay = {crypto: _user$project$ConfigTypes$GlobalCrypto, display: 'Global'};
var _user$project$ConfigTypes$listCryptos = function (configGroup) {
	var _p5 = configGroup.schema.cryptoScope;
	switch (_p5.ctor) {
		case 'Specific':
			return configGroup.data.cryptoCurrencies;
		case 'Global':
			return _elm_lang$core$Native_List.fromArray(
				[_user$project$ConfigTypes$globalCryptoDisplay]);
		default:
			return A2(_elm_lang$core$List_ops['::'], _user$project$ConfigTypes$globalCryptoDisplay, configGroup.data.cryptoCurrencies);
	}
};
var _user$project$ConfigTypes$CryptoCode = function (a) {
	return {ctor: 'CryptoCode', _0: a};
};
var _user$project$ConfigTypes$stringToCrypto = function (string) {
	var _p6 = string;
	if (_p6 === 'global') {
		return _user$project$ConfigTypes$GlobalCrypto;
	} else {
		return _user$project$ConfigTypes$CryptoCode(string);
	}
};
var _user$project$ConfigTypes$GlobalMachine = {ctor: 'GlobalMachine'};
var _user$project$ConfigTypes$globalMachineDisplay = {machine: _user$project$ConfigTypes$GlobalMachine, display: 'Global'};
var _user$project$ConfigTypes$listMachines = function (configGroup) {
	var _p7 = configGroup.schema.machineScope;
	switch (_p7.ctor) {
		case 'Specific':
			return configGroup.data.machines;
		case 'Global':
			return _elm_lang$core$Native_List.fromArray(
				[_user$project$ConfigTypes$globalMachineDisplay]);
		default:
			return A2(_elm_lang$core$List_ops['::'], _user$project$ConfigTypes$globalMachineDisplay, configGroup.data.machines);
	}
};
var _user$project$ConfigTypes$fieldScopes = function (configGroup) {
	var cryptos = A2(
		_elm_lang$core$List$map,
		function (_) {
			return _.crypto;
		},
		_user$project$ConfigTypes$listCryptos(configGroup));
	var machines = A2(
		_elm_lang$core$List$map,
		function (_) {
			return _.machine;
		},
		_user$project$ConfigTypes$listMachines(configGroup));
	var cryptoScopes = function (crypto) {
		return A2(
			_elm_lang$core$List$map,
			function (machine) {
				return {machine: machine, crypto: crypto};
			},
			machines);
	};
	return A2(_elm_lang$core$List$concatMap, cryptoScopes, cryptos);
};
var _user$project$ConfigTypes$MachineId = function (a) {
	return {ctor: 'MachineId', _0: a};
};
var _user$project$ConfigTypes$Both = {ctor: 'Both'};
var _user$project$ConfigTypes$Specific = {ctor: 'Specific'};
var _user$project$ConfigTypes$Global = {ctor: 'Global'};
var _user$project$ConfigTypes$FieldValidationError = function (a) {
	return {ctor: 'FieldValidationError', _0: a};
};
var _user$project$ConfigTypes$FieldParsingError = function (a) {
	return {ctor: 'FieldParsingError', _0: a};
};
var _user$project$ConfigTypes$SelectizeComponent = function (a) {
	return {ctor: 'SelectizeComponent', _0: a};
};
var _user$project$ConfigTypes$InputBoxComponent = {ctor: 'InputBoxComponent'};
var _user$project$ConfigTypes$FieldLanguageType = {ctor: 'FieldLanguageType'};
var _user$project$ConfigTypes$FieldCryptoCurrencyType = {ctor: 'FieldCryptoCurrencyType'};
var _user$project$ConfigTypes$FieldCurrencyType = {ctor: 'FieldCurrencyType'};
var _user$project$ConfigTypes$FieldAccountType = {ctor: 'FieldAccountType'};
var _user$project$ConfigTypes$FieldOnOffType = {ctor: 'FieldOnOffType'};
var _user$project$ConfigTypes$FieldIntegerType = {ctor: 'FieldIntegerType'};
var _user$project$ConfigTypes$FieldPercentageType = {ctor: 'FieldPercentageType'};
var _user$project$ConfigTypes$FieldStringType = {ctor: 'FieldStringType'};
var _user$project$ConfigTypes$FieldLanguageValue = function (a) {
	return {ctor: 'FieldLanguageValue', _0: a};
};
var _user$project$ConfigTypes$FieldCryptoCurrencyValue = function (a) {
	return {ctor: 'FieldCryptoCurrencyValue', _0: a};
};
var _user$project$ConfigTypes$FieldCurrencyValue = function (a) {
	return {ctor: 'FieldCurrencyValue', _0: a};
};
var _user$project$ConfigTypes$FieldAccountValue = function (a) {
	return {ctor: 'FieldAccountValue', _0: a};
};
var _user$project$ConfigTypes$FieldOnOffValue = function (a) {
	return {ctor: 'FieldOnOffValue', _0: a};
};
var _user$project$ConfigTypes$FieldIntegerValue = function (a) {
	return {ctor: 'FieldIntegerValue', _0: a};
};
var _user$project$ConfigTypes$FieldPercentageValue = function (a) {
	return {ctor: 'FieldPercentageValue', _0: a};
};
var _user$project$ConfigTypes$FieldStringValue = function (a) {
	return {ctor: 'FieldStringValue', _0: a};
};
var _user$project$ConfigTypes$stringToFieldHolder = F2(
	function (fieldType, s) {
		if (_elm_lang$core$String$isEmpty(s)) {
			return _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing);
		} else {
			var _p8 = fieldType;
			switch (_p8.ctor) {
				case 'FieldStringType':
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(
							_user$project$ConfigTypes$FieldStringValue(s)));
				case 'FieldPercentageType':
					return A2(
						_elm_lang$core$Result$formatError,
						_user$project$ConfigTypes$FieldParsingError,
						A2(
							_elm_lang$core$Result$map,
							_elm_lang$core$Maybe$Just,
							A2(
								_elm_lang$core$Result$map,
								_user$project$ConfigTypes$FieldPercentageValue,
								_elm_lang$core$String$toFloat(s))));
				case 'FieldIntegerType':
					return A2(
						_elm_lang$core$Result$formatError,
						_user$project$ConfigTypes$FieldParsingError,
						A2(
							_elm_lang$core$Result$map,
							_elm_lang$core$Maybe$Just,
							A2(
								_elm_lang$core$Result$map,
								_user$project$ConfigTypes$FieldIntegerValue,
								_elm_lang$core$String$toInt(s))));
				case 'FieldOnOffType':
					var _p9 = s;
					switch (_p9) {
						case 'on':
							return _elm_lang$core$Result$Ok(
								_elm_lang$core$Maybe$Just(
									_user$project$ConfigTypes$FieldOnOffValue(true)));
						case 'off':
							return _elm_lang$core$Result$Ok(
								_elm_lang$core$Maybe$Just(
									_user$project$ConfigTypes$FieldOnOffValue(false)));
						default:
							return _elm_lang$core$Result$Err(
								_user$project$ConfigTypes$FieldParsingError(
									A2(_elm_lang$core$Basics_ops['++'], 'Unsupported value for OnOff: ', s)));
					}
				case 'FieldAccountType':
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(
							_user$project$ConfigTypes$FieldAccountValue(s)));
				case 'FieldCurrencyType':
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(
							_user$project$ConfigTypes$FieldCurrencyValue(s)));
				case 'FieldCryptoCurrencyType':
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(
							_user$project$ConfigTypes$FieldCryptoCurrencyValue(
								_elm_lang$core$Native_List.fromArray(
									[s]))));
				default:
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(
							_user$project$ConfigTypes$FieldLanguageValue(
								_elm_lang$core$Native_List.fromArray(
									[s]))));
			}
		}
	});

var _user$project$ConfigDecoder$basicFieldTypeDecoder = function (s) {
	var _p0 = s;
	switch (_p0) {
		case 'string':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldStringType);
		case 'percentage':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldPercentageType);
		case 'integer':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldIntegerType);
		case 'onOff':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldOnOffType);
		case 'account':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldAccountType);
		case 'currency':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldCurrencyType);
		case 'cryptoCurrency':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldCryptoCurrencyType);
		case 'language':
			return _elm_lang$core$Json_Decode$succeed(_user$project$ConfigTypes$FieldLanguageType);
		default:
			return _elm_lang$core$Json_Decode$fail(
				A2(_elm_lang$core$Basics_ops['++'], 'No such FieldType ', s));
	}
};
var _user$project$ConfigDecoder$fieldTypeDecoder = function (fieldType) {
	return _user$project$ConfigDecoder$basicFieldTypeDecoder(fieldType);
};
var _user$project$ConfigDecoder$string2ConfigScope = function (s) {
	var _p1 = s;
	switch (_p1) {
		case 'global':
			return _elm_lang$core$Result$Ok(_user$project$ConfigTypes$Global);
		case 'specific':
			return _elm_lang$core$Result$Ok(_user$project$ConfigTypes$Specific);
		case 'both':
			return _elm_lang$core$Result$Ok(_user$project$ConfigTypes$Both);
		default:
			return _elm_lang$core$Result$Err(
				A2(_elm_lang$core$Basics_ops['++'], 'No such ConfigScope ', s));
	}
};
var _user$project$ConfigDecoder$configScopeDecoder = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _user$project$ConfigDecoder$string2ConfigScope);
var _user$project$ConfigDecoder$displayRecDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$ConfigTypes$DisplayRec,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string));
var _user$project$ConfigDecoder$cryptoDecoder = A2(_elm_lang$core$Json_Decode$map, _user$project$ConfigTypes$stringToCrypto, _elm_lang$core$Json_Decode$string);
var _user$project$ConfigDecoder$cryptoDisplayDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$ConfigTypes$CryptoDisplay,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'crypto', _user$project$ConfigDecoder$cryptoDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string));
var _user$project$ConfigDecoder$accountRecDecoder = _elm_lang$core$Json_Decode$oneOf(
	_elm_lang$core$Native_List.fromArray(
		[
			A5(
			_elm_lang$core$Json_Decode$object4,
			_user$project$ConfigTypes$AccountRec,
			A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'class', _elm_lang$core$Json_Decode$string),
			A2(
				_elm_lang$core$Json_Decode_ops[':='],
				'cryptos',
				A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$cryptoDecoder)))),
			A5(
			_elm_lang$core$Json_Decode$object4,
			_user$project$ConfigTypes$AccountRec,
			A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'class', _elm_lang$core$Json_Decode$string),
			_elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing))
		]));
var _user$project$ConfigDecoder$string2machine = function (s) {
	return _elm_lang$core$Native_Utils.eq(s, 'global') ? _user$project$ConfigTypes$GlobalMachine : _user$project$ConfigTypes$MachineId(s);
};
var _user$project$ConfigDecoder$machineDecoder = A2(_elm_lang$core$Json_Decode$map, _user$project$ConfigDecoder$string2machine, _elm_lang$core$Json_Decode$string);
var _user$project$ConfigDecoder$machineDisplayDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$ConfigTypes$MachineDisplay,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'machine', _user$project$ConfigDecoder$machineDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string));
var _user$project$ConfigDecoder$configDataDecoder = A6(
	_elm_lang$core$Json_Decode$object5,
	_user$project$ConfigTypes$ConfigData,
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'cryptoCurrencies',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$cryptoDisplayDecoder)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'currencies',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$displayRecDecoder)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'languages',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$displayRecDecoder)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'accounts',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$accountRecDecoder)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'machines',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$machineDisplayDecoder)));
var _user$project$ConfigDecoder$nullOr = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder)
			]));
};
var _user$project$ConfigDecoder$fieldDescriptorDecoder = A5(
	_elm_lang$core$Json_Decode$object4,
	_user$project$ConfigTypes$FieldDescriptor,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$andThen,
		A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldType', _elm_lang$core$Json_Decode$string),
		_user$project$ConfigDecoder$fieldTypeDecoder),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'fieldClass',
		_user$project$ConfigDecoder$nullOr(_elm_lang$core$Json_Decode$string)));
var _user$project$ConfigDecoder$configSchemaDecoder = A6(
	_elm_lang$core$Json_Decode$object5,
	_user$project$ConfigTypes$ConfigSchema,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'display', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'cryptoScope', _user$project$ConfigDecoder$configScopeDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'machineScope', _user$project$ConfigDecoder$configScopeDecoder),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'entries',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$fieldDescriptorDecoder)));
var _user$project$ConfigDecoder$fieldScopeDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$ConfigTypes$FieldScope,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'crypto', _user$project$ConfigDecoder$cryptoDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'machine', _user$project$ConfigDecoder$machineDecoder));
var _user$project$ConfigDecoder$fieldLocatorDecoder = A5(
	_elm_lang$core$Json_Decode$object4,
	_user$project$ConfigTypes$FieldLocator,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldScope', _user$project$ConfigDecoder$fieldScopeDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'code', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$andThen,
		A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldType', _elm_lang$core$Json_Decode$string),
		_user$project$ConfigDecoder$fieldTypeDecoder),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'fieldClass',
		_user$project$ConfigDecoder$nullOr(_elm_lang$core$Json_Decode$string)));
var _user$project$ConfigDecoder$fieldValueTypeDecoder = function (fieldType) {
	var _p2 = fieldType;
	switch (_p2) {
		case 'string':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldStringValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$string));
		case 'percentage':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldPercentageValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$float));
		case 'integer':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldIntegerValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$int));
		case 'onOff':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldOnOffValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$bool));
		case 'account':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldCurrencyValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$string));
		case 'currency':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldCurrencyValue,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'value', _elm_lang$core$Json_Decode$string));
		case 'cryptoCurrency':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldCryptoCurrencyValue,
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'value',
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)));
		case 'language':
			return A2(
				_elm_lang$core$Json_Decode$map,
				_user$project$ConfigTypes$FieldLanguageValue,
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'value',
					_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)));
		default:
			return _elm_lang$core$Json_Decode$fail(
				A2(_elm_lang$core$Basics_ops['++'], 'Unsupported field type: ', fieldType));
	}
};
var _user$project$ConfigDecoder$fieldValueDecoder = A2(
	_elm_lang$core$Json_Decode$andThen,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldType', _elm_lang$core$Json_Decode$string),
	_user$project$ConfigDecoder$fieldValueTypeDecoder);
var _user$project$ConfigDecoder$fieldDecoder = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$ConfigTypes$Field,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldLocator', _user$project$ConfigDecoder$fieldLocatorDecoder),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'fieldValue', _user$project$ConfigDecoder$fieldValueDecoder));
var _user$project$ConfigDecoder$configGroupDecoder = A4(
	_elm_lang$core$Json_Decode$object3,
	_user$project$ConfigTypes$ConfigGroup,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'schema', _user$project$ConfigDecoder$configSchemaDecoder),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'values',
		_elm_lang$core$Json_Decode$list(_user$project$ConfigDecoder$fieldDecoder)),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'data', _user$project$ConfigDecoder$configDataDecoder));

var _user$project$ConfigEncoder$maybeString = function (maybeString) {
	var _p0 = maybeString;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$core$Json_Encode$null;
	} else {
		return _elm_lang$core$Json_Encode$string(_p0._0);
	}
};
var _user$project$ConfigEncoder$fieldTypeEncoder = function (fieldType) {
	var _p1 = fieldType;
	switch (_p1.ctor) {
		case 'FieldStringType':
			return _elm_lang$core$Json_Encode$string('string');
		case 'FieldPercentageType':
			return _elm_lang$core$Json_Encode$string('percentage');
		case 'FieldIntegerType':
			return _elm_lang$core$Json_Encode$string('integer');
		case 'FieldOnOffType':
			return _elm_lang$core$Json_Encode$string('onOff');
		case 'FieldAccountType':
			return _elm_lang$core$Json_Encode$string('account');
		case 'FieldCurrencyType':
			return _elm_lang$core$Json_Encode$string('currency');
		case 'FieldCryptoCurrencyType':
			return _elm_lang$core$Json_Encode$string('cryptoCurrency');
		default:
			return _elm_lang$core$Json_Encode$string('language');
	}
};
var _user$project$ConfigEncoder$encodeMachine = function (machine) {
	var _p2 = machine;
	if (_p2.ctor === 'MachineId') {
		return _elm_lang$core$Json_Encode$string(_p2._0);
	} else {
		return _elm_lang$core$Json_Encode$string('global');
	}
};
var _user$project$ConfigEncoder$encodeCrypto = function (crypto) {
	var _p3 = crypto;
	if (_p3.ctor === 'CryptoCode') {
		return _elm_lang$core$Json_Encode$string(_p3._0);
	} else {
		return _elm_lang$core$Json_Encode$string('global');
	}
};
var _user$project$ConfigEncoder$encodeFieldScope = function (fieldScope) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'crypto',
				_1: _user$project$ConfigEncoder$encodeCrypto(fieldScope.crypto)
			},
				{
				ctor: '_Tuple2',
				_0: 'machine',
				_1: _user$project$ConfigEncoder$encodeMachine(fieldScope.machine)
			}
			]));
};
var _user$project$ConfigEncoder$encodeFieldLocator = function (fieldLocator) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'fieldScope',
				_1: _user$project$ConfigEncoder$encodeFieldScope(fieldLocator.fieldScope)
			},
				{
				ctor: '_Tuple2',
				_0: 'code',
				_1: _elm_lang$core$Json_Encode$string(fieldLocator.code)
			},
				{
				ctor: '_Tuple2',
				_0: 'fieldType',
				_1: _user$project$ConfigEncoder$fieldTypeEncoder(fieldLocator.fieldType)
			},
				{
				ctor: '_Tuple2',
				_0: 'fieldClass',
				_1: _user$project$ConfigEncoder$maybeString(fieldLocator.fieldClass)
			}
			]));
};
var _user$project$ConfigEncoder$encodeFieldValueObject = F2(
	function (fieldTypeStr, value) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'fieldType',
					_1: _elm_lang$core$Json_Encode$string(fieldTypeStr)
				},
					{ctor: '_Tuple2', _0: 'value', _1: value}
				]));
	});
var _user$project$ConfigEncoder$encodeFieldValue = function (maybeFieldValue) {
	var _p4 = maybeFieldValue;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Json_Encode$null;
	} else {
		var _p5 = _p4._0;
		switch (_p5.ctor) {
			case 'FieldStringValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'string',
					_elm_lang$core$Json_Encode$string(_p5._0));
			case 'FieldPercentageValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'percentage',
					_elm_lang$core$Json_Encode$float(_p5._0));
			case 'FieldIntegerValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'integer',
					_elm_lang$core$Json_Encode$int(_p5._0));
			case 'FieldOnOffValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'onOff',
					_elm_lang$core$Json_Encode$bool(_p5._0));
			case 'FieldAccountValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'account',
					_elm_lang$core$Json_Encode$string(_p5._0));
			case 'FieldCurrencyValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'currency',
					_elm_lang$core$Json_Encode$string(_p5._0));
			case 'FieldCryptoCurrencyValue':
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'cryptoCurrency',
					_elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p5._0)));
			default:
				return A2(
					_user$project$ConfigEncoder$encodeFieldValueObject,
					'language',
					_elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p5._0)));
		}
	}
};
var _user$project$ConfigEncoder$encodeFieldResult = function (fieldInstance) {
	var encode = function (maybeFieldValue) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'fieldLocator',
					_1: _user$project$ConfigEncoder$encodeFieldLocator(fieldInstance.fieldLocator)
				},
					{
					ctor: '_Tuple2',
					_0: 'fieldValue',
					_1: _user$project$ConfigEncoder$encodeFieldValue(maybeFieldValue)
				}
				]));
	};
	var onlyDirty = function (maybeFieldValue) {
		return _elm_lang$core$Native_Utils.eq(fieldInstance.loadedFieldValue, maybeFieldValue) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			encode(maybeFieldValue));
	};
	return A2(
		_elm_lang$core$Maybe$andThen,
		_elm_lang$core$Result$toMaybe(fieldInstance.fieldValue),
		onlyDirty);
};
var _user$project$ConfigEncoder$encodeResults = F2(
	function (configGroupCode, fieldInstances) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'groupCode',
					_1: _elm_lang$core$Json_Encode$string(configGroupCode)
				},
					{
					ctor: '_Tuple2',
					_0: 'values',
					_1: _elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$filterMap, _user$project$ConfigEncoder$encodeFieldResult, fieldInstances))
				}
				]));
	});

var _user$project$FuzzyMatch$score = F2(
	function (needle, hay) {
		var match = function (keyword) {
			return function (_) {
				return _.score;
			}(
				A4(
					_tripokey$elm_fuzzy$Fuzzy$match,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]),
					needle,
					keyword));
		};
		var score = A2(
			_elm_lang$core$Maybe$withDefault,
			10000,
			_elm_lang$core$List$minimum(
				A2(
					_elm_lang$core$List$map,
					match,
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$String$split, ' ', hay.display),
						_elm_lang$core$Native_List.fromArray(
							[hay.code])))));
		return {ctor: '_Tuple2', _0: score, _1: hay};
	});
var _user$project$FuzzyMatch$clean = function (s) {
	return _elm_lang$core$String$toLower(
		_elm_lang$core$String$trim(s));
};
var _user$project$FuzzyMatch$match = F2(
	function (rawString, list) {
		var s = _user$project$FuzzyMatch$clean(rawString);
		return _elm_lang$core$String$isEmpty(s) ? list : A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$snd,
			A2(
				_elm_lang$core$List$filter,
				function (_p0) {
					return A2(
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.cmp(x, y) > 0;
							}),
						1100,
						_elm_lang$core$Basics$fst(_p0));
				},
				A2(
					_elm_lang$core$List$sortBy,
					_elm_lang$core$Basics$fst,
					A2(
						_elm_lang$core$List$map,
						_user$project$FuzzyMatch$score(s),
						list))));
	});
var _user$project$FuzzyMatch$DisplayRec = F2(
	function (a, b) {
		return {code: a, display: b};
	});

var _user$project$Css_Colors$darkerGrey = _rtfeldman$elm_css$Css$hex('282828');
var _user$project$Css_Colors$darkGrey = _rtfeldman$elm_css$Css$hex('2d2d2d');
var _user$project$Css_Colors$darkerLightGrey = _rtfeldman$elm_css$Css$hex('E6E6E3');
var _user$project$Css_Colors$lighterLightGrey = _rtfeldman$elm_css$Css$hex('fcfcfa');
var _user$project$Css_Colors$lightGrey = _rtfeldman$elm_css$Css$hex('f6f6f4');
var _user$project$Css_Colors$sandstone = _rtfeldman$elm_css$Css$hex('5f5f56');
var _user$project$Css_Colors$white = _rtfeldman$elm_css$Css$hex('ffffff');
var _user$project$Css_Colors$amazonite = _rtfeldman$elm_css$Css$hex('37e8d7');
var _user$project$Css_Colors$darkCobalt = _rtfeldman$elm_css$Css$hex('042c47');
var _user$project$Css_Colors$cobalt = _rtfeldman$elm_css$Css$hex('004062');

var _user$project$Css_Selectize$NoOptions = {ctor: 'NoOptions'};
var _user$project$Css_Selectize$InfoNoMatches = {ctor: 'InfoNoMatches'};
var _user$project$Css_Selectize$Info = {ctor: 'Info'};
var _user$project$Css_Selectize$BoxContainer = {ctor: 'BoxContainer'};
var _user$project$Css_Selectize$MultiItemContainer = {ctor: 'MultiItemContainer'};
var _user$project$Css_Selectize$SingleItemContainer = {ctor: 'SingleItemContainer'};
var _user$project$Css_Selectize$InputEditing = {ctor: 'InputEditing'};
var _user$project$Css_Selectize$SelectedItem = {ctor: 'SelectedItem'};
var _user$project$Css_Selectize$FallbackItem = {ctor: 'FallbackItem'};
var _user$project$Css_Selectize$FallbackItems = {ctor: 'FallbackItems'};
var _user$project$Css_Selectize$SelectedItems = {ctor: 'SelectedItems'};
var _user$project$Css_Selectize$BoxItemActive = {ctor: 'BoxItemActive'};
var _user$project$Css_Selectize$BoxItem = {ctor: 'BoxItem'};
var _user$project$Css_Selectize$BoxItems = {ctor: 'BoxItems'};
var _user$project$Css_Selectize$SelectBox = {ctor: 'SelectBox'};
var _user$project$Css_Selectize$component = _rtfeldman$elm_css$Css$mixin(
	_elm_lang$core$Native_List.fromArray(
		[
			_rtfeldman$elm_css$Css$borderRadius(
			_rtfeldman$elm_css$Css$px(3)),
			_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
			_rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
			_rtfeldman$elm_css$Css$descendants(
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$NoOptions,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$backgroundColor(_user$project$Css_Colors$lighterLightGrey),
							_rtfeldman$elm_css$Css$fontSize(
							_rtfeldman$elm_css$Css$px(11)),
							_rtfeldman$elm_css$Css$fontWeight(
							_rtfeldman$elm_css$Css$int(500)),
							_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$sandstone),
							_rtfeldman$elm_css$Css$padding(
							_rtfeldman$elm_css$Css$px(5)),
							_rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
							_rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$default),
							A2(_rtfeldman$elm_css$Css$property, '-webkit-user-select', 'none')
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$SelectBox,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$displayFlex,
							_rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
							A2(
							_rtfeldman$elm_css$Css$padding2,
							_rtfeldman$elm_css$Css$zero,
							_rtfeldman$elm_css$Css$px(5)),
							A2(_rtfeldman$elm_css$Css$property, 'background-color', 'inherit'),
							_rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$px(60))
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$BoxContainer,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
							A2(_rtfeldman$elm_css$Css$property, 'z-index', '100'),
							_rtfeldman$elm_css$Css$left(
							_rtfeldman$elm_css$Css$px(-3)),
							_rtfeldman$elm_css$Css$backgroundColor(_user$project$Css_Colors$white),
							_rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
							_rtfeldman$elm_css$Css$fontWeight(
							_rtfeldman$elm_css$Css$int(500)),
							_rtfeldman$elm_css$Css$fontSize(
							_rtfeldman$elm_css$Css$pct(80)),
							_rtfeldman$elm_css$Css$borderRadius(
							_rtfeldman$elm_css$Css$px(3)),
							_rtfeldman$elm_css$Css$backgroundColor(_user$project$Css_Colors$white),
							A3(
							_rtfeldman$elm_css$Css$border3,
							_rtfeldman$elm_css$Css$px(3),
							_rtfeldman$elm_css$Css$solid,
							_user$project$Css_Colors$lightGrey),
							_rtfeldman$elm_css$Css$borderTop(_rtfeldman$elm_css$Css$zero),
							_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$sandstone),
							_rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$em(15)),
							_rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
							_rtfeldman$elm_css$Css$padding(
							_rtfeldman$elm_css$Css$px(5))
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$BoxItems,
					_elm_lang$core$Native_List.fromArray(
						[])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$BoxItemActive,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$cobalt),
							_rtfeldman$elm_css$Css$fontWeight(
							_rtfeldman$elm_css$Css$int(900))
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$BoxItem,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_rtfeldman$elm_css$Css$padding2,
							_rtfeldman$elm_css$Css$px(3),
							_rtfeldman$elm_css$Css$px(6))
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$Info,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_rtfeldman$elm_css$Css$padding2,
							_rtfeldman$elm_css$Css$px(3),
							_rtfeldman$elm_css$Css$px(6)),
							_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$darkGrey)
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$MultiItemContainer,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$descendants(
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									F2(
										function (x, y) {
											return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
										}),
									_user$project$Css_Selectize$SelectedItem,
									_elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css$backgroundColor(_user$project$Css_Colors$cobalt),
											_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$white),
											A2(
											_rtfeldman$elm_css$Css$padding2,
											_rtfeldman$elm_css$Css$px(3),
											_rtfeldman$elm_css$Css$px(4)),
											A2(
											_rtfeldman$elm_css$Css$margin2,
											_rtfeldman$elm_css$Css$zero,
											_rtfeldman$elm_css$Css$px(1)),
											_rtfeldman$elm_css$Css$fontFamilies(
											_elm_lang$core$Native_List.fromArray(
												['Inconsolata'])),
											_rtfeldman$elm_css$Css$fontSize(
											_rtfeldman$elm_css$Css$pct(70)),
											_rtfeldman$elm_css$Css$fontWeight(_rtfeldman$elm_css$Css$bold),
											_rtfeldman$elm_css$Css$borderRadius(
											_rtfeldman$elm_css$Css$px(3))
										])),
									A2(
									F2(
										function (x, y) {
											return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
										}),
									_user$project$Css_Selectize$FallbackItem,
									_elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css$backgroundColor(_user$project$Css_Colors$sandstone)
										]))
								]))
						])),
					A2(
					F2(
						function (x, y) {
							return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
						}),
					_user$project$Css_Selectize$SingleItemContainer,
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$descendants(
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									F2(
										function (x, y) {
											return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
										}),
									_user$project$Css_Selectize$SelectedItem,
									_elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css$fontFamilies(
											_elm_lang$core$Native_List.fromArray(
												['Fira Code'])),
											_rtfeldman$elm_css$Css$fontSize(
											_rtfeldman$elm_css$Css$px(11)),
											_rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero),
											_rtfeldman$elm_css$Css$borderRadius(_rtfeldman$elm_css$Css$zero)
										])),
									A2(
									F2(
										function (x, y) {
											return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
										}),
									_user$project$Css_Selectize$FallbackItem,
									_elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css$color(_user$project$Css_Colors$sandstone)
										]))
								]))
						])),
					_rtfeldman$elm_css$Css_Elements$input(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
							A2(_rtfeldman$elm_css$Css$property, 'background-color', 'inherit'),
							A2(
							_rtfeldman$elm_css$Css$padding2,
							_rtfeldman$elm_css$Css$px(6),
							_rtfeldman$elm_css$Css$px(2)),
							_rtfeldman$elm_css$Css$width(
							_rtfeldman$elm_css$Css$em(6))
						]))
				]))
		]));
var _user$project$Css_Selectize$SelectizeContainer = {ctor: 'SelectizeContainer'};
var _user$project$Css_Selectize$classes = {
	container: _user$project$Css_Admin$className(_user$project$Css_Selectize$SelectizeContainer),
	singleItemContainer: _user$project$Css_Admin$className(_user$project$Css_Selectize$SingleItemContainer),
	multiItemContainer: _user$project$Css_Admin$className(_user$project$Css_Selectize$MultiItemContainer),
	selectBox: _user$project$Css_Admin$className(_user$project$Css_Selectize$SelectBox),
	selectedItems: _user$project$Css_Admin$className(_user$project$Css_Selectize$SelectedItems),
	fallbackItems: _user$project$Css_Admin$className(_user$project$Css_Selectize$FallbackItems),
	fallbackItem: _user$project$Css_Admin$className(_user$project$Css_Selectize$FallbackItem),
	selectedItem: _user$project$Css_Admin$className(_user$project$Css_Selectize$SelectedItem),
	boxContainer: _user$project$Css_Admin$className(_user$project$Css_Selectize$BoxContainer),
	boxItems: _user$project$Css_Admin$className(_user$project$Css_Selectize$BoxItems),
	boxItem: _user$project$Css_Admin$className(_user$project$Css_Selectize$BoxItem),
	boxItemActive: _user$project$Css_Admin$className(_user$project$Css_Selectize$BoxItemActive),
	info: _user$project$Css_Admin$className(_user$project$Css_Selectize$Info),
	infoNoMatches: _user$project$Css_Admin$className(_user$project$Css_Selectize$InfoNoMatches),
	inputEditing: _user$project$Css_Admin$className(_user$project$Css_Selectize$InputEditing),
	noOptions: _user$project$Css_Admin$className(_user$project$Css_Selectize$NoOptions)
};

var _user$project$SelectizeHelper$buildConfig = F2(
	function (localConfig, specificConfig) {
		return {
			maxItems: specificConfig.maxItems,
			boxLength: 5,
			toMsg: localConfig.toMsg,
			onAdd: localConfig.onAdd,
			onRemove: localConfig.onRemove,
			onFocus: localConfig.onFocus,
			onBlur: localConfig.onBlur,
			toId: localConfig.toId,
			selectedDisplay: specificConfig.selectedDisplay,
			optionDisplay: specificConfig.optionDisplay,
			match: specificConfig.match,
			htmlOptions: {instructionsForBlank: 'Start typing for options', noMatches: 'No matches', atMaxLength: 'Type backspace to edit', typeForMore: 'Type for more options', noOptions: 'No options', classes: _user$project$Css_Selectize$classes}
		};
	});
var _user$project$SelectizeHelper$LocalConfig = F6(
	function (a, b, c, d, e, f) {
		return {toMsg: a, onAdd: b, onRemove: c, onFocus: d, onBlur: e, toId: f};
	});
var _user$project$SelectizeHelper$SpecificConfig = F4(
	function (a, b, c, d) {
		return {selectedDisplay: a, optionDisplay: b, maxItems: c, match: d};
	});

var _user$project$Config$updateSelectize = F3(
	function (fieldLocator, state, model) {
		var updateInstance = function (fieldInstance) {
			if (_elm_lang$core$Native_Utils.eq(fieldInstance.fieldLocator, fieldLocator)) {
				var _p0 = fieldInstance.component;
				if (_p0.ctor === 'SelectizeComponent') {
					return _elm_lang$core$Native_Utils.update(
						fieldInstance,
						{
							component: _user$project$ConfigTypes$SelectizeComponent(state)
						});
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Config',
						{
							start: {line: 866, column: 17},
							end: {line: 871, column: 56}
						},
						_p0)('Shouldn\'t be here');
				}
			} else {
				return fieldInstance;
			}
		};
		var fieldInstances = model.fieldInstances;
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				fieldInstances: A2(_elm_lang$core$List$map, updateInstance, fieldInstances)
			});
	});
var _user$project$Config$updateFocus = F3(
	function (fieldLocator, focused, model) {
		return focused ? _elm_lang$core$Native_Utils.update(
			model,
			{
				focused: _elm_lang$core$Maybe$Just(fieldLocator)
			}) : (_elm_lang$core$Native_Utils.eq(
			model.focused,
			_elm_lang$core$Maybe$Just(fieldLocator)) ? _elm_lang$core$Native_Utils.update(
			model,
			{focused: _elm_lang$core$Maybe$Nothing}) : model);
	});
var _user$project$Config$fieldInstanceToMaybeFieldValue = function (fieldInstance) {
	var _p2 = fieldInstance.fieldValue;
	if (_p2.ctor === 'Ok') {
		return _p2._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Config$pickFieldInstance = F2(
	function (fieldLocator, fieldInstances) {
		var sameLocation = F2(
			function (targetFieldLocator, fieldInstance) {
				return _elm_lang$core$Native_Utils.eq(fieldInstance.fieldLocator, targetFieldLocator);
			});
		return _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				sameLocation(fieldLocator),
				fieldInstances));
	});
var _user$project$Config$pickFieldInstanceValue = F6(
	function (fieldType, fieldCode, fieldClass, fieldInstances, crypto, machine) {
		var fieldScope = {crypto: crypto, machine: machine};
		var fieldLocator = {fieldScope: fieldScope, code: fieldCode, fieldType: fieldType, fieldClass: fieldClass};
		return A2(
			_elm_lang$core$Maybe$andThen,
			A2(_user$project$Config$pickFieldInstance, fieldLocator, fieldInstances),
			_user$project$Config$fieldInstanceToMaybeFieldValue);
	});
var _user$project$Config$buildFieldComponent = F4(
	function (configGroup, fieldType, fieldScope, fieldValue) {
		var _p3 = fieldType;
		switch (_p3.ctor) {
			case 'FieldStringType':
				return _user$project$ConfigTypes$InputBoxComponent;
			case 'FieldPercentageType':
				return _user$project$ConfigTypes$InputBoxComponent;
			case 'FieldIntegerType':
				return _user$project$ConfigTypes$InputBoxComponent;
			case 'FieldOnOffType':
				return _user$project$ConfigTypes$SelectizeComponent(_user$project$Selectize$initialSelectize);
			case 'FieldAccountType':
				return _user$project$ConfigTypes$SelectizeComponent(_user$project$Selectize$initialSelectize);
			case 'FieldCurrencyType':
				return _user$project$ConfigTypes$SelectizeComponent(_user$project$Selectize$initialSelectize);
			case 'FieldCryptoCurrencyType':
				return _user$project$ConfigTypes$SelectizeComponent(_user$project$Selectize$initialSelectize);
			default:
				return _user$project$ConfigTypes$SelectizeComponent(_user$project$Selectize$initialSelectize);
		}
	});
var _user$project$Config$initFieldInstance = F3(
	function (configGroup, fieldDescriptor, fieldScope) {
		var fieldLocator = {fieldScope: fieldScope, code: fieldDescriptor.code, fieldType: fieldDescriptor.fieldType, fieldClass: fieldDescriptor.fieldClass};
		var value = A2(
			_elm_lang$core$Maybe$map,
			function (_) {
				return _.fieldValue;
			},
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (_p4) {
						return A2(
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								}),
							fieldLocator,
							function (_) {
								return _.fieldLocator;
							}(_p4));
					},
					configGroup.values)));
		var component = A4(_user$project$Config$buildFieldComponent, configGroup, fieldDescriptor.fieldType, fieldScope, value);
		return {
			fieldLocator: fieldLocator,
			component: component,
			fieldValue: _elm_lang$core$Result$Ok(value),
			loadedFieldValue: value
		};
	});
var _user$project$Config$initFieldInstancesPerEntry = F2(
	function (configGroup, fieldDescriptor) {
		return A2(
			_elm_lang$core$List$map,
			A2(_user$project$Config$initFieldInstance, configGroup, fieldDescriptor),
			_user$project$ConfigTypes$fieldScopes(configGroup));
	});
var _user$project$Config$initFieldInstances = function (configGroup) {
	return A2(
		_elm_lang$core$List$concatMap,
		_user$project$Config$initFieldInstancesPerEntry(configGroup),
		configGroup.schema.entries);
};
var _user$project$Config$maybeToList = function (maybe) {
	var _p5 = maybe;
	if (_p5.ctor === 'Nothing') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		return _elm_lang$core$Native_List.fromArray(
			[_p5._0]);
	}
};
var _user$project$Config$isField = F2(
	function (fieldCode, field) {
		return _elm_lang$core$Native_Utils.eq(field.fieldLocator.code, fieldCode);
	});
var _user$project$Config$headerCellView = function (fieldDescriptor) {
	return A2(
		_elm_lang$html$Html$td,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(fieldDescriptor.display)
			]));
};
var _user$project$Config$headerRowView = F2(
	function (configGroup, crypto) {
		return A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[]),
			A2(
				_elm_lang$core$List_ops['::'],
				A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[])),
				A2(_elm_lang$core$List$map, _user$project$Config$headerCellView, configGroup.schema.entries)));
	});
var _user$project$Config$onOffSelectizeView = F6(
	function (model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var fallbackIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFallbackFieldValue));
		var selectedIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFieldValue));
		var availableItems = _elm_lang$core$Native_List.fromArray(
			[
				{display: 'On', code: 'on'},
				{display: 'Off', code: 'off'}
			]);
		var specificConfig = {
			maxItems: 1,
			selectedDisplay: function (_) {
				return _.display;
			},
			optionDisplay: function (_) {
				return _.display;
			},
			match: _user$project$FuzzyMatch$match
		};
		return A5(
			_user$project$Selectize$view,
			A2(_user$project$SelectizeHelper$buildConfig, localConfig, specificConfig),
			selectedIds,
			availableItems,
			fallbackIds,
			selectizeState);
	});
var _user$project$Config$languageSelectizeView = F6(
	function (model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var toList = function (maybeValue) {
			var _p6 = maybeValue;
			if (_p6.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p7 = _p6._0;
				if (_p7.ctor === 'FieldLanguageValue') {
					return _p7._0;
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Config',
						{
							start: {line: 426, column: 21},
							end: {line: 431, column: 60}
						},
						_p7)('Shouldn\'t be here');
				}
			}
		};
		var selectedIds = toList(maybeFieldValue);
		var fallbackIds = toList(maybeFallbackFieldValue);
		var availableItems = model.configGroup.data.languages;
		var specificConfig = {
			maxItems: 5,
			selectedDisplay: function (_) {
				return _.code;
			},
			optionDisplay: function (_) {
				return _.display;
			},
			match: _user$project$FuzzyMatch$match
		};
		return A5(
			_user$project$Selectize$view,
			A2(_user$project$SelectizeHelper$buildConfig, localConfig, specificConfig),
			selectedIds,
			availableItems,
			fallbackIds,
			selectizeState);
	});
var _user$project$Config$cryptoCurrencySelectizeView = F6(
	function (model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var toList = function (maybeValue) {
			var _p9 = maybeValue;
			if (_p9.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p10 = _p9._0;
				if (_p10.ctor === 'FieldCryptoCurrencyValue') {
					return _p10._0;
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Config',
						{
							start: {line: 380, column: 21},
							end: {line: 385, column: 60}
						},
						_p10)('Shouldn\'t be here');
				}
			}
		};
		var selectedIds = toList(maybeFieldValue);
		var fallbackIds = toList(maybeFallbackFieldValue);
		var toDisplay = function (crypto) {
			return {
				code: _user$project$ConfigTypes$cryptoToString(crypto.crypto),
				display: crypto.display
			};
		};
		var availableItems = A2(_elm_lang$core$List$map, toDisplay, model.configGroup.data.cryptoCurrencies);
		var specificConfig = {
			maxItems: 5,
			selectedDisplay: function (_) {
				return _.code;
			},
			optionDisplay: function (_) {
				return _.display;
			},
			match: _user$project$FuzzyMatch$match
		};
		return A5(
			_user$project$Selectize$view,
			A2(_user$project$SelectizeHelper$buildConfig, localConfig, specificConfig),
			selectedIds,
			availableItems,
			fallbackIds,
			selectizeState);
	});
var _user$project$Config$currencySelectizeView = F6(
	function (model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var fallbackIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFallbackFieldValue));
		var selectedIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFieldValue));
		var availableItems = model.configGroup.data.currencies;
		var specificConfig = {
			maxItems: 1,
			selectedDisplay: function (_) {
				return _.code;
			},
			optionDisplay: function (_) {
				return _.display;
			},
			match: _user$project$FuzzyMatch$match
		};
		return A5(
			_user$project$Selectize$view,
			A2(_user$project$SelectizeHelper$buildConfig, localConfig, specificConfig),
			selectedIds,
			availableItems,
			fallbackIds,
			selectizeState);
	});
var _user$project$Config$accountSelectizeView = F6(
	function (model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var fallbackIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFallbackFieldValue));
		var _p12 = A2(
			_elm_lang$core$Debug$log,
			'DEBUG26',
			{ctor: '_Tuple2', _0: fieldInstance.fieldLocator.fieldScope.machine, _1: fallbackIds});
		var selectedIds = _user$project$Config$maybeToList(
			A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFieldValue));
		var matchAccount = function (accountRec) {
			var _p13 = fieldInstance.fieldLocator.fieldClass;
			if (_p13.ctor === 'Nothing') {
				return true;
			} else {
				return _elm_lang$core$Native_Utils.eq(accountRec.$class, _p13._0) && function () {
					var _p14 = accountRec.cryptos;
					if (_p14.ctor === 'Nothing') {
						return true;
					} else {
						return A2(_elm_lang$core$List$member, model.crypto, _p14._0);
					}
				}();
			}
		};
		var availableItems = A2(
			_elm_lang$core$List$map,
			_user$project$ConfigTypes$accountRecToDisplayRec,
			A2(_elm_lang$core$List$filter, matchAccount, model.configGroup.data.accounts));
		var specificConfig = {
			maxItems: 1,
			selectedDisplay: function (_) {
				return _.display;
			},
			optionDisplay: function (_) {
				return _.display;
			},
			match: _user$project$FuzzyMatch$match
		};
		return A5(
			_user$project$Selectize$view,
			A2(_user$project$SelectizeHelper$buildConfig, localConfig, specificConfig),
			selectedIds,
			availableItems,
			fallbackIds,
			selectizeState);
	});
var _user$project$Config$emptyToNothing = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(list);
};
var _user$project$Config$fieldHolderToList = function (fieldHolder) {
	var _p15 = fieldHolder;
	if (_p15.ctor === 'Err') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p16 = _p15._0;
		if (_p16.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p17 = _p16._0;
			switch (_p17.ctor) {
				case 'FieldLanguageValue':
					return _p17._0;
				case 'FieldCryptoCurrencyValue':
					return _p17._0;
				default:
					return _elm_lang$core$Native_Utils.crashCase(
						'Config',
						{
							start: {line: 149, column: 21},
							end: {line: 157, column: 58}
						},
						_p17)('Not a list type');
			}
		}
	}
};
var _user$project$Config$updateStringFieldInstance = F3(
	function (fieldLocator, maybeString, fieldInstance) {
		if (_elm_lang$core$Native_Utils.eq(fieldInstance.fieldLocator, fieldLocator)) {
			var _p19 = fieldLocator.fieldType;
			switch (_p19.ctor) {
				case 'FieldLanguageType':
					var list = _user$project$Config$fieldHolderToList(fieldInstance.fieldValue);
					var newList = function () {
						var _p20 = maybeString;
						if (_p20.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$List$take,
								_elm_lang$core$List$length(list) - 1,
								list);
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								list,
								_elm_lang$core$Native_List.fromArray(
									[_p20._0]));
						}
					}();
					return _elm_lang$core$Native_Utils.update(
						fieldInstance,
						{
							fieldValue: _elm_lang$core$Result$Ok(
								A2(
									_elm_lang$core$Maybe$map,
									_user$project$ConfigTypes$FieldLanguageValue,
									_user$project$Config$emptyToNothing(newList)))
						});
				case 'FieldCryptoCurrencyType':
					var list = _user$project$Config$fieldHolderToList(fieldInstance.fieldValue);
					var newList = function () {
						var _p21 = maybeString;
						if (_p21.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$List$take,
								_elm_lang$core$List$length(list) - 1,
								list);
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								list,
								_elm_lang$core$Native_List.fromArray(
									[_p21._0]));
						}
					}();
					return _elm_lang$core$Native_Utils.update(
						fieldInstance,
						{
							fieldValue: _elm_lang$core$Result$Ok(
								A2(
									_elm_lang$core$Maybe$map,
									_user$project$ConfigTypes$FieldCryptoCurrencyValue,
									_user$project$Config$emptyToNothing(newList)))
						});
				default:
					var fieldHolder = function () {
						var _p22 = maybeString;
						if (_p22.ctor === 'Nothing') {
							return _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing);
						} else {
							return A2(_user$project$ConfigTypes$stringToFieldHolder, fieldLocator.fieldType, _p22._0);
						}
					}();
					return _elm_lang$core$Native_Utils.update(
						fieldInstance,
						{fieldValue: fieldHolder});
			}
		} else {
			return fieldInstance;
		}
	});
var _user$project$Config$updateInput = F3(
	function (fieldLocator, maybeValueString, model) {
		var fieldInstances = A2(
			_elm_lang$core$List$map,
			A2(_user$project$Config$updateStringFieldInstance, fieldLocator, maybeValueString),
			model.fieldInstances);
		return _elm_lang$core$Native_Utils.update(
			model,
			{fieldInstances: fieldInstances});
	});
var _user$project$Config$similar = F3(
	function (mapper, a, b) {
		return A2(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				}),
			mapper(a),
			mapper(b));
	});
var _user$project$Config$placeField = F2(
	function (fieldList, field) {
		var maybeOldField = _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				A2(
					_user$project$Config$similar,
					function (_) {
						return _.fieldLocator;
					},
					field),
				fieldList));
		var newField = function () {
			var _p23 = maybeOldField;
			if (_p23.ctor === 'Nothing') {
				return field;
			} else {
				return _elm_lang$core$Native_Utils.update(
					_p23._0,
					{fieldValue: field.fieldValue});
			}
		}();
		return A2(
			_elm_lang$core$List_ops['::'],
			newField,
			A2(
				_elm_lang$core$List$filter,
				function (_p24) {
					return _elm_lang$core$Basics$not(
						A3(
							_user$project$Config$similar,
							function (_) {
								return _.fieldLocator;
							},
							field,
							_p24));
				},
				fieldList));
	});
var _user$project$Config$toResolvedModel = F2(
	function (model, configGroup) {
		return {
			configGroup: configGroup,
			fieldInstances: model.fieldInstances,
			crypto: A2(_elm_lang$core$Maybe$withDefault, _user$project$ConfigTypes$GlobalCrypto, model.crypto),
			status: model.status,
			focused: model.focused
		};
	});
var _user$project$Config$hopConfig = {hash: true, basePath: ''};
var _user$project$Config$Model = F5(
	function (a, b, c, d, e) {
		return {webConfigGroup: a, fieldInstances: b, crypto: c, status: d, focused: e};
	});
var _user$project$Config$ResolvedModel = F5(
	function (a, b, c, d, e) {
		return {configGroup: a, fieldInstances: b, crypto: c, status: d, focused: e};
	});
var _user$project$Config$NotSaving = {ctor: 'NotSaving'};
var _user$project$Config$init = {
	webConfigGroup: _krisajenkins$remotedata$RemoteData$NotAsked,
	fieldInstances: _elm_lang$core$Native_List.fromArray(
		[]),
	crypto: _elm_lang$core$Maybe$Nothing,
	status: _user$project$Config$NotSaving,
	focused: _elm_lang$core$Maybe$Nothing
};
var _user$project$Config$Editing = {ctor: 'Editing'};
var _user$project$Config$Saved = {ctor: 'Saved'};
var _user$project$Config$Saving = {ctor: 'Saving'};
var _user$project$Config$Remove = F2(
	function (a, b) {
		return {ctor: 'Remove', _0: a, _1: b};
	});
var _user$project$Config$Add = F3(
	function (a, b, c) {
		return {ctor: 'Add', _0: a, _1: b, _2: c};
	});
var _user$project$Config$FocusSelectize = F2(
	function (a, b) {
		return {ctor: 'FocusSelectize', _0: a, _1: b};
	});
var _user$project$Config$BlurSelectize = F2(
	function (a, b) {
		return {ctor: 'BlurSelectize', _0: a, _1: b};
	});
var _user$project$Config$Focus = function (a) {
	return {ctor: 'Focus', _0: a};
};
var _user$project$Config$Blur = function (a) {
	return {ctor: 'Blur', _0: a};
};
var _user$project$Config$SelectizeMsg = F2(
	function (a, b) {
		return {ctor: 'SelectizeMsg', _0: a, _1: b};
	});
var _user$project$Config$selectizeView = F5(
	function (model, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue) {
		var fieldLocator = fieldInstance.fieldLocator;
		var localConfig = {
			toMsg: _user$project$Config$SelectizeMsg(fieldLocator),
			onAdd: _user$project$Config$Add(fieldLocator),
			onRemove: _user$project$Config$Remove(fieldLocator),
			onFocus: _user$project$Config$FocusSelectize(fieldLocator),
			onBlur: _user$project$Config$BlurSelectize(fieldLocator),
			toId: function (_) {
				return _.code;
			}
		};
		var _p25 = fieldLocator.fieldType;
		switch (_p25.ctor) {
			case 'FieldAccountType':
				return A6(_user$project$Config$accountSelectizeView, model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue);
			case 'FieldCurrencyType':
				return A6(_user$project$Config$currencySelectizeView, model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue);
			case 'FieldCryptoCurrencyType':
				return A6(_user$project$Config$cryptoCurrencySelectizeView, model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue);
			case 'FieldLanguageType':
				return A6(_user$project$Config$languageSelectizeView, model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue);
			case 'FieldOnOffType':
				return A6(_user$project$Config$onOffSelectizeView, model, localConfig, fieldInstance, selectizeState, maybeFieldValue, maybeFallbackFieldValue);
			default:
				return _elm_lang$core$Native_Utils.crashCase(
					'Config',
					{
						start: {line: 467, column: 9},
						end: {line: 509, column: 52}
					},
					_p25)('Not a Selectize field');
		}
	});
var _user$project$Config$CryptoSwitch = function (a) {
	return {ctor: 'CryptoSwitch', _0: a};
};
var _user$project$Config$cryptoView = F2(
	function (maybeActiveCrypto, cryptoDisplay) {
		var activeClass = function () {
			var _p27 = maybeActiveCrypto;
			if (_p27.ctor === 'Nothing') {
				return _user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[]));
			} else {
				return _elm_lang$core$Native_Utils.eq(_p27._0, cryptoDisplay.crypto) ? _user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$Active])) : _user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[]));
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					activeClass,
					_elm_lang$html$Html_Events$onClick(
					_user$project$Config$CryptoSwitch(cryptoDisplay.crypto))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(cryptoDisplay.display)
				]));
	});
var _user$project$Config$cryptosView = F2(
	function (activeCrypto, configGroup) {
		var cryptos = _user$project$ConfigTypes$listCryptos(configGroup);
		return A2(
			_elm_lang$html$Html$nav,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$CryptoTabs]))
				]),
			A2(
				_elm_lang$core$List$map,
				_user$project$Config$cryptoView(activeCrypto),
				cryptos));
	});
var _user$project$Config$Input = F2(
	function (a, b) {
		return {ctor: 'Input', _0: a, _1: b};
	});
var _user$project$Config$textInput = F3(
	function (fieldLocator, maybeFieldValue, maybeFallbackFieldValue) {
		var maybeFallbackString = A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFallbackFieldValue);
		var fallbackString = A2(_elm_lang$core$Maybe$withDefault, '', maybeFallbackString);
		var maybeSpecificString = A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$fieldValueToString, maybeFieldValue);
		var defaultString = A2(_elm_lang$core$Maybe$withDefault, '', maybeSpecificString);
		return A2(
			_elm_lang$html$Html$input,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Events$onInput(
					_user$project$Config$Input(fieldLocator)),
					_elm_lang$html$Html_Events$onFocus(
					_user$project$Config$Focus(fieldLocator)),
					_elm_lang$html$Html_Events$onBlur(
					_user$project$Config$Blur(fieldLocator)),
					_elm_lang$html$Html_Attributes$defaultValue(defaultString),
					_elm_lang$html$Html_Attributes$placeholder(fallbackString),
					_user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$BasicInput]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$Config$fieldInput = F4(
	function (model, fieldInstance, maybeFieldValue, maybeFallbackFieldValue) {
		var _p28 = fieldInstance.component;
		if (_p28.ctor === 'InputBoxComponent') {
			return A3(_user$project$Config$textInput, fieldInstance.fieldLocator, maybeFieldValue, maybeFallbackFieldValue);
		} else {
			return A5(_user$project$Config$selectizeView, model, fieldInstance, _p28._0, maybeFieldValue, maybeFallbackFieldValue);
		}
	});
var _user$project$Config$fieldComponent = F2(
	function (model, fieldInstance) {
		var maybeSpecific = function () {
			var _p29 = fieldInstance.fieldValue;
			if (_p29.ctor === 'Ok') {
				return _p29._0;
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}();
		var instances = model.fieldInstances;
		var fieldLocator = fieldInstance.fieldLocator;
		var fieldScope = fieldLocator.fieldScope;
		var fieldCode = fieldLocator.code;
		var fieldClass = fieldLocator.fieldClass;
		var fieldType = fieldLocator.fieldType;
		var pick = A4(_user$project$Config$pickFieldInstanceValue, fieldType, fieldCode, fieldClass, instances);
		var maybeGlobal = A2(pick, _user$project$ConfigTypes$GlobalCrypto, _user$project$ConfigTypes$GlobalMachine);
		var maybeGlobalCrypto = A2(pick, _user$project$ConfigTypes$GlobalCrypto, fieldScope.machine);
		var maybeGlobalMachine = A2(pick, fieldScope.crypto, _user$project$ConfigTypes$GlobalMachine);
		var maybeFallbackFieldValue = _elm_lang$core$Maybe$oneOf(
			_elm_lang$core$Native_List.fromArray(
				[maybeSpecific, maybeGlobalMachine, maybeGlobalCrypto, maybeGlobal]));
		return A4(_user$project$Config$fieldInput, model, fieldInstance, maybeSpecific, maybeFallbackFieldValue);
	});
var _user$project$Config$cellView = F2(
	function (model, fieldInstance) {
		var fieldLocator = fieldInstance.fieldLocator;
		var fieldScope = fieldLocator.fieldScope;
		var machine = fieldScope.machine;
		var crypto = fieldScope.crypto;
		var focused = _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Maybe$Just(fieldLocator),
			model.focused);
		return A3(
			_elm_lang$html$Html_Keyed$node,
			'td',
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_user$project$ConfigTypes$cryptoToString(crypto),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_user$project$ConfigTypes$machineToString(machine),
								A2(_elm_lang$core$Basics_ops['++'], '-', fieldLocator.code)))),
					_1: A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$classList(
								_elm_lang$core$Native_List.fromArray(
									[
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$Component, _1: true},
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$FocusedComponent, _1: focused}
									]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$Config$fieldComponent, model, fieldInstance)
							]))
				}
				]));
	});
var _user$project$Config$rowView = F3(
	function (model, fieldInstances, machineDisplay) {
		var fieldScope = {crypto: model.crypto, machine: machineDisplay.machine};
		var toFieldLocator = function (entry) {
			return {fieldScope: fieldScope, code: entry.code};
		};
		var machine = machineDisplay.machine;
		var globalRowClass = function () {
			var _p30 = machine;
			if (_p30.ctor === 'GlobalMachine') {
				return _user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$ConfigTableGlobalRow]));
			} else {
				return _user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[]));
			}
		}();
		var machineScoped = function (fieldInstance) {
			return _elm_lang$core$Native_Utils.eq(fieldInstance.fieldLocator.fieldScope.machine, machine);
		};
		var filteredFieldInstances = A2(_elm_lang$core$List$filter, machineScoped, fieldInstances);
		return A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[globalRowClass]),
			A2(
				_elm_lang$core$List_ops['::'],
				A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(machineDisplay.display)
						])),
				A2(
					_elm_lang$core$List$map,
					_user$project$Config$cellView(model),
					filteredFieldInstances)));
	});
var _user$project$Config$tableView = function (model) {
	var crypto = model.crypto;
	var cryptoScoped = function (fieldInstance) {
		return _elm_lang$core$Native_Utils.eq(fieldInstance.fieldLocator.fieldScope.crypto, crypto);
	};
	var instances = A2(_elm_lang$core$List$filter, cryptoScoped, model.fieldInstances);
	var configGroup = model.configGroup;
	var headerRow = A2(_user$project$Config$headerRowView, configGroup, crypto);
	var machines = _user$project$ConfigTypes$listMachines(configGroup);
	var rows = A2(
		_elm_lang$core$List$map,
		A2(_user$project$Config$rowView, model, instances),
		machines);
	return A2(
		_elm_lang$html$Html$table,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Css_Admin$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$ConfigTable]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$thead,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[headerRow])),
				A2(
				_elm_lang$html$Html$tbody,
				_elm_lang$core$Native_List.fromArray(
					[]),
				rows)
			]));
};
var _user$project$Config$Submit = {ctor: 'Submit'};
var _user$project$Config$view = function (model) {
	var _p31 = model.webConfigGroup;
	switch (_p31.ctor) {
		case 'NotAsked':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		case 'Loading':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Loading...')
					]));
		case 'Failure':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p31._0))
					]));
		default:
			var _p33 = _p31._0;
			var statusString = function () {
				var _p32 = model.status;
				if (_p32.ctor === 'Saved') {
					return 'Saved';
				} else {
					return '';
				}
			}();
			var resolvedModel = A2(_user$project$Config$toResolvedModel, model, _p33);
			var configGroupView = A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Css_Admin$class(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Css_Classes$ConfigContainer]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Config$tableView(resolvedModel)
					]));
			var form = A2(
				_elm_lang$html$Html$form,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[configGroupView])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$ButtonRow]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Events$onClick(_user$project$Config$Submit),
										_user$project$Css_Admin$class(
										_elm_lang$core$Native_List.fromArray(
											[_user$project$Css_Classes$Button]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Submit')
									])),
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text(statusString)
									]))
							]))
					]));
			return _elm_lang$core$Native_Utils.eq(_p33.schema.cryptoScope, _user$project$ConfigTypes$Global) ? A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$SectionLabel]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p33.schema.display)
							])),
						form
					])) : A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$SectionLabel]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p33.schema.display)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$Config$cryptosView, model.crypto, _p33)
							])),
						form
					]));
	}
};
var _user$project$Config$Load = function (a) {
	return {ctor: 'Load', _0: a};
};
var _user$project$Config$getForm = function (code) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Config$Load,
		_krisajenkins$remotedata$RemoteData$asCmd(
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$ConfigDecoder$configGroupDecoder),
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get(
					A2(_elm_lang$core$Basics_ops['++'], '/api/config/', code)))));
};
var _user$project$Config$load = F3(
	function (model, code, maybeCryptoCodeString) {
		var crypto = A2(_elm_lang$core$Maybe$map, _user$project$ConfigTypes$stringToCrypto, maybeCryptoCodeString);
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{crypto: crypto}),
			_1: _user$project$Config$getForm(code)
		};
	});
var _user$project$Config$postForm = F2(
	function (configGroupCode, fieldInstances) {
		return A2(
			_elm_lang$core$Platform_Cmd$map,
			_user$project$Config$Load,
			_krisajenkins$remotedata$RemoteData$asCmd(
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$ConfigDecoder$configGroupDecoder),
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					A2(
						_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
						A2(_user$project$ConfigEncoder$encodeResults, configGroupCode, fieldInstances),
						A3(
							_lukewestby$elm_http_builder$HttpBuilder$withHeader,
							'Content-Type',
							'application/json',
							_lukewestby$elm_http_builder$HttpBuilder$post('/api/config'))))));
	});
var _user$project$Config$update = F2(
	function (msg, model) {
		var _p34 = msg;
		switch (_p34.ctor) {
			case 'Load':
				var webConfigGroup = A2(
					_krisajenkins$remotedata$RemoteData$map,
					function (_) {
						return _.data;
					},
					_p34._0);
				var fieldInstances = function () {
					var _p35 = webConfigGroup;
					if (_p35.ctor === 'Success') {
						return _user$project$Config$initFieldInstances(_p35._0);
					} else {
						return _elm_lang$core$Native_List.fromArray(
							[]);
					}
				}();
				var defaultCrypto = function () {
					var _p36 = webConfigGroup;
					if (_p36.ctor === 'Success') {
						return A2(
							_elm_lang$core$Maybe$map,
							function (_) {
								return _.crypto;
							},
							_elm_lang$core$List$head(
								_user$project$ConfigTypes$listCryptos(_p36._0)));
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				}();
				var crypto = function () {
					var _p37 = model.crypto;
					if (_p37.ctor === 'Nothing') {
						return A2(_elm_lang$core$Debug$log, 'DEBUG27', defaultCrypto);
					} else {
						return _elm_lang$core$Maybe$Just(_p37._0);
					}
				}();
				var status = _elm_lang$core$Native_Utils.eq(model.status, _user$project$Config$Saving) ? _user$project$Config$Saved : model.status;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{webConfigGroup: webConfigGroup, fieldInstances: fieldInstances, status: status, crypto: crypto}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Submit':
				var _p38 = model.webConfigGroup;
				if (_p38.ctor === 'Success') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{status: _user$project$Config$Saving}),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$Config$postForm, _p38._0.schema.code, model.fieldInstances)
							]));
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				}
			case 'Input':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(
						_user$project$Config$updateInput,
						_p34._0,
						_elm_lang$core$Maybe$Just(_p34._1),
						model),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'CryptoSwitch':
				var _p40 = _p34._0;
				var _p39 = model.webConfigGroup;
				if (_p39.ctor === 'Success') {
					var cryptoCode = _user$project$ConfigTypes$cryptoToString(_p40);
					var path = A2(
						_elm_lang$core$Basics_ops['++'],
						'config/',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p39._0.schema.code,
							A2(_elm_lang$core$Basics_ops['++'], '/', cryptoCode)));
					var command = _elm_lang$navigation$Navigation$newUrl(
						A2(
							_sporto$hop$Hop$outputFromPath,
							_user$project$Config$hopConfig,
							A2(_elm_lang$core$Debug$log, 'DEBUG26', path)));
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								crypto: _elm_lang$core$Maybe$Just(_p40)
							}),
						_elm_lang$core$Native_List.fromArray(
							[command]));
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				}
			case 'Focus':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(_user$project$Config$updateFocus, _p34._0, true, model),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'Blur':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(_user$project$Config$updateFocus, _p34._0, false, model),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'SelectizeMsg':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(_user$project$Config$updateSelectize, _p34._0, _p34._1, model),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'BlurSelectize':
				var _p41 = _p34._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(
						_user$project$Config$updateFocus,
						_p41,
						false,
						A3(_user$project$Config$updateSelectize, _p41, _p34._1, model)),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'FocusSelectize':
				var _p42 = _p34._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(
						_user$project$Config$updateFocus,
						_p42,
						true,
						A3(_user$project$Config$updateSelectize, _p42, _p34._1, model)),
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'Add':
				var _p43 = _p34._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(
						_user$project$Config$updateInput,
						_p43,
						_elm_lang$core$Maybe$Just(_p34._1),
						A3(_user$project$Config$updateSelectize, _p43, _p34._2, model)),
					_elm_lang$core$Native_List.fromArray(
						[]));
			default:
				var _p44 = _p34._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					A3(
						_user$project$Config$updateInput,
						_p44,
						_elm_lang$core$Maybe$Nothing,
						A3(_user$project$Config$updateSelectize, _p44, _p34._1, model)),
					_elm_lang$core$Native_List.fromArray(
						[]));
		}
	});

var _user$project$Pair$view = function (model) {
	var _p0 = A2(_elm_lang$core$Debug$log, 'DEBUG3', model);
	switch (_p0.ctor) {
		case 'NotAsked':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		case 'Loading':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('...')
							]))
					]));
		case 'Failure':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p0._0))
					]));
		default:
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A3(
						_elm_lang$html$Html$node,
						'qr-code',
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_elm_lang$html$Html_Attributes$attribute, 'data', _p0._0)
							]),
						_elm_lang$core$Native_List.fromArray(
							[]))
					]));
	}
};
var _user$project$Pair$update = F2(
	function (msg, model) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A2(_elm_lang$core$Debug$log, 'DEBUG21', msg),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$Pair$init = _krisajenkins$remotedata$RemoteData$NotAsked;
var _user$project$Pair$getTotem = _krisajenkins$remotedata$RemoteData$asCmd(
	_evancz$elm_http$Http$getString('/api/totem'));
var _user$project$Pair$load = {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _user$project$Pair$getTotem};

var _user$project$MachineTypes$Machine = F6(
	function (a, b, c, d, e, f) {
		return {deviceId: a, name: b, cashbox: c, cassette1: d, cassette2: e, paired: f};
	});
var _user$project$MachineTypes$ResetCashOutBills = function (a) {
	return {ctor: 'ResetCashOutBills', _0: a};
};

var _user$project$MachinesDecoder$machineDecoder = A7(
	_elm_lang$core$Json_Decode$object6,
	_user$project$MachineTypes$Machine,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'deviceId', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'name', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'cashbox', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'cassette1', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'cassette2', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'paired', _elm_lang$core$Json_Decode$bool));
var _user$project$MachinesDecoder$machinesDecoder = A2(
	_elm_lang$core$Json_Decode$object1,
	_elm_lang$core$Basics$identity,
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'machines',
		_elm_lang$core$Json_Decode$list(_user$project$MachinesDecoder$machineDecoder)));

var _user$project$MachinesEncoder$encodeAction = function (action) {
	var _p0 = action;
	var _p1 = _p0._0;
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'action',
				_1: _elm_lang$core$Json_Encode$string('resetCashOutBills')
			},
				{
				ctor: '_Tuple2',
				_0: 'deviceId',
				_1: _elm_lang$core$Json_Encode$string(_p1.deviceId)
			},
				{
				ctor: '_Tuple2',
				_0: 'cassettes',
				_1: _elm_lang$core$Json_Encode$list(
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$core$Json_Encode$int(_p1.cassette1),
							_elm_lang$core$Json_Encode$int(_p1.cassette2)
						]))
			}
			]));
};

var _user$project$Machine$updateMachine = F2(
	function (machine, oldMachine) {
		return _elm_lang$core$Native_Utils.eq(machine.deviceId, oldMachine.deviceId) ? machine : oldMachine;
	});
var _user$project$Machine$updateCassette = F4(
	function (machine, position, str, machines) {
		var countResult = _elm_lang$core$String$toInt(str);
		var updatedMachine = function () {
			var _p0 = countResult;
			if (_p0.ctor === 'Ok') {
				var _p2 = _p0._0;
				var _p1 = position;
				if (_p1.ctor === 'Top') {
					return _elm_lang$core$Native_Utils.update(
						machine,
						{cassette1: _p2});
				} else {
					return _elm_lang$core$Native_Utils.update(
						machine,
						{cassette2: _p2});
				}
			} else {
				return machine;
			}
		}();
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			A2(
				_elm_lang$core$List$map,
				_user$project$Machine$updateMachine(updatedMachine),
				machines),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$Machine$init = _krisajenkins$remotedata$RemoteData$NotAsked;
var _user$project$Machine$SubmitResetBills = function (a) {
	return {ctor: 'SubmitResetBills', _0: a};
};
var _user$project$Machine$InputCassette = F3(
	function (a, b, c) {
		return {ctor: 'InputCassette', _0: a, _1: b, _2: c};
	});
var _user$project$Machine$inputCassetteView = F3(
	function (machine, position, count) {
		return A2(
			_elm_lang$html$Html$input,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Css_Admin$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$BasicInput])),
					_elm_lang$html$Html_Events$onInput(
					A2(_user$project$Machine$InputCassette, machine, position)),
					_elm_lang$html$Html_Attributes$defaultValue(
					_elm_lang$core$Basics$toString(count))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _user$project$Machine$Load = function (a) {
	return {ctor: 'Load', _0: a};
};
var _user$project$Machine$getForm = A2(
	_elm_lang$core$Platform_Cmd$map,
	_user$project$Machine$Load,
	_krisajenkins$remotedata$RemoteData$asCmd(
		A2(
			_elm_lang$core$Task$map,
			function (_) {
				return _.data;
			},
			A3(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$MachinesDecoder$machinesDecoder),
				_lukewestby$elm_http_builder$HttpBuilder$stringReader,
				_lukewestby$elm_http_builder$HttpBuilder$get('/api/machines')))));
var _user$project$Machine$load = {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _user$project$Machine$getForm};
var _user$project$Machine$postForm = function (action) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Machine$Load,
		_krisajenkins$remotedata$RemoteData$asCmd(
			A2(
				_elm_lang$core$Task$map,
				function (_) {
					return _.data;
				},
				A3(
					_lukewestby$elm_http_builder$HttpBuilder$send,
					_lukewestby$elm_http_builder$HttpBuilder$jsonReader(_user$project$MachinesDecoder$machinesDecoder),
					_lukewestby$elm_http_builder$HttpBuilder$stringReader,
					A2(
						_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
						_user$project$MachinesEncoder$encodeAction(action),
						A3(
							_lukewestby$elm_http_builder$HttpBuilder$withHeader,
							'Content-Type',
							'application/json',
							_lukewestby$elm_http_builder$HttpBuilder$post('/api/machines')))))));
};
var _user$project$Machine$updateSubmitCassette = F2(
	function (machine, machines) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			machines,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Machine$postForm(
					_user$project$MachineTypes$ResetCashOutBills(machine))
				]));
	});
var _user$project$Machine$update = F2(
	function (msg, model) {
		var _p3 = msg;
		switch (_p3.ctor) {
			case 'Action':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'Load':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p3._0,
					_elm_lang$core$Native_List.fromArray(
						[]));
			case 'InputCassette':
				return A2(
					_krisajenkins$remotedata$RemoteData$update,
					A3(_user$project$Machine$updateCassette, _p3._0, _p3._1, _p3._2),
					model);
			default:
				return A2(
					_krisajenkins$remotedata$RemoteData$update,
					_user$project$Machine$updateSubmitCassette(_p3._0),
					model);
		}
	});
var _user$project$Machine$Action = {ctor: 'Action'};
var _user$project$Machine$Bottom = {ctor: 'Bottom'};
var _user$project$Machine$Top = {ctor: 'Top'};
var _user$project$Machine$rowView = function (machine) {
	return A2(
		_elm_lang$html$Html$tr,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(machine.name)
					])),
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$classList(
								_elm_lang$core$Native_List.fromArray(
									[
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$Component, _1: true},
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$FocusedComponent, _1: false}
									]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A3(_user$project$Machine$inputCassetteView, machine, _user$project$Machine$Top, machine.cassette1)
							]))
					])),
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$classList(
								_elm_lang$core$Native_List.fromArray(
									[
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$Component, _1: true},
										{ctor: '_Tuple2', _0: _user$project$Css_Classes$FocusedComponent, _1: false}
									]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A3(_user$project$Machine$inputCassetteView, machine, _user$project$Machine$Bottom, machine.cassette2)
							]))
					])),
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$button,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$TableButton])),
								_elm_lang$html$Html_Events$onClick(
								_user$project$Machine$SubmitResetBills(machine))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('Reset Bills')
							]))
					]))
			]));
};
var _user$project$Machine$view = function (model) {
	var _p4 = model;
	switch (_p4.ctor) {
		case 'NotAsked':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		case 'Loading':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Loading...')
					]));
		case 'Failure':
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p4._0))
					]));
		default:
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Css_Admin$class(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Css_Classes$SectionLabel]))
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$div,
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Css_Admin$class(
												_elm_lang$core$Native_List.fromArray(
													[_user$project$Css_Classes$ConfigContainer]))
											]),
										_elm_lang$core$Native_List.fromArray(
											[
												A2(
												_elm_lang$html$Html$table,
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Css_Admin$class(
														_elm_lang$core$Native_List.fromArray(
															[_user$project$Css_Classes$ConfigTable]))
													]),
												_elm_lang$core$Native_List.fromArray(
													[
														A2(
														_elm_lang$html$Html$thead,
														_elm_lang$core$Native_List.fromArray(
															[]),
														_elm_lang$core$Native_List.fromArray(
															[
																A2(
																_elm_lang$html$Html$tr,
																_elm_lang$core$Native_List.fromArray(
																	[]),
																_elm_lang$core$Native_List.fromArray(
																	[
																		A2(
																		_elm_lang$html$Html$td,
																		_elm_lang$core$Native_List.fromArray(
																			[]),
																		_elm_lang$core$Native_List.fromArray(
																			[])),
																		A2(
																		_elm_lang$html$Html$td,
																		_elm_lang$core$Native_List.fromArray(
																			[]),
																		_elm_lang$core$Native_List.fromArray(
																			[
																				_elm_lang$html$Html$text('Top Bill Count')
																			])),
																		A2(
																		_elm_lang$html$Html$td,
																		_elm_lang$core$Native_List.fromArray(
																			[]),
																		_elm_lang$core$Native_List.fromArray(
																			[
																				_elm_lang$html$Html$text('Bottom Bill Count')
																			]))
																	]))
															])),
														A2(
														_elm_lang$html$Html$tbody,
														_elm_lang$core$Native_List.fromArray(
															[]),
														A2(_elm_lang$core$List$map, _user$project$Machine$rowView, _p4._0))
													]))
											]))
									]))
							]))
					]));
	}
};

var _user$project$CoreTypes$machineSubRouteToString = function (machineSubRoute) {
	var _p0 = machineSubRoute;
	return 'actions';
};
var _user$project$CoreTypes$MachineCat = {ctor: 'MachineCat'};
var _user$project$CoreTypes$ConfigCat = {ctor: 'ConfigCat'};
var _user$project$CoreTypes$AccountCat = {ctor: 'AccountCat'};
var _user$project$CoreTypes$MachineActions = {ctor: 'MachineActions'};
var _user$project$CoreTypes$NotFoundRoute = {ctor: 'NotFoundRoute'};
var _user$project$CoreTypes$MachineRoute = function (a) {
	return {ctor: 'MachineRoute', _0: a};
};
var _user$project$CoreTypes$ConfigRoute = F2(
	function (a, b) {
		return {ctor: 'ConfigRoute', _0: a, _1: b};
	});
var _user$project$CoreTypes$PairRoute = {ctor: 'PairRoute'};
var _user$project$CoreTypes$AccountRoute = function (a) {
	return {ctor: 'AccountRoute', _0: a};
};
var _user$project$CoreTypes$NewRoute = F2(
	function (a, b) {
		return {ctor: 'NewRoute', _0: a, _1: b};
	});
var _user$project$CoreTypes$MachineMsg = function (a) {
	return {ctor: 'MachineMsg', _0: a};
};
var _user$project$CoreTypes$ConfigMsg = function (a) {
	return {ctor: 'ConfigMsg', _0: a};
};
var _user$project$CoreTypes$PairMsg = function (a) {
	return {ctor: 'PairMsg', _0: a};
};
var _user$project$CoreTypes$AccountMsg = function (a) {
	return {ctor: 'AccountMsg', _0: a};
};

var _user$project$NavBar$maybeUrl = F2(
	function (root, maybeStrings) {
		return A2(
			_elm_lang$core$String$join,
			'/',
			A2(
				_elm_lang$core$List$append,
				_elm_lang$core$Native_List.fromArray(
					[root]),
				A2(_elm_lang$core$List$filterMap, _elm_lang$core$Basics$identity, maybeStrings)));
	});
var _user$project$NavBar$routeToUrl = function (route) {
	var _p0 = route;
	switch (_p0.ctor) {
		case 'PairRoute':
			return 'pair';
		case 'AccountRoute':
			return A2(_elm_lang$core$Basics_ops['++'], 'account/', _p0._0);
		case 'ConfigRoute':
			return A2(
				_user$project$NavBar$maybeUrl,
				A2(_elm_lang$core$Basics_ops['++'], 'config/', _p0._0),
				_elm_lang$core$Native_List.fromArray(
					[_p0._1]));
		case 'MachineRoute':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'machine/',
				_user$project$CoreTypes$machineSubRouteToString(_p0._0));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'NavBar',
				{
					start: {line: 29, column: 5},
					end: {line: 43, column: 45}
				},
				_p0)('Need unknown route');
	}
};
var _user$project$NavBar$_p2 = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('lamassuAdmin');
var _user$project$NavBar$id = _user$project$NavBar$_p2.id;
var _user$project$NavBar$class = _user$project$NavBar$_p2.$class;
var _user$project$NavBar$classList = _user$project$NavBar$_p2.classList;
var _user$project$NavBar$activeRoute = F2(
	function (linkRoute, route) {
		var active = function () {
			var _p3 = route;
			switch (_p3.ctor) {
				case 'PairRoute':
					return _elm_lang$core$Native_Utils.eq(linkRoute, route);
				case 'AccountRoute':
					return _elm_lang$core$Native_Utils.eq(linkRoute, route);
				case 'ConfigRoute':
					return _elm_lang$core$Native_Utils.eq(
						linkRoute,
						A2(_user$project$CoreTypes$ConfigRoute, _p3._0, _elm_lang$core$Maybe$Nothing));
				case 'MachineRoute':
					return _elm_lang$core$Native_Utils.eq(linkRoute, route);
				default:
					return _elm_lang$core$Native_Utils.crashCase(
						'NavBar',
						{
							start: {line: 50, column: 13},
							end: {line: 64, column: 53}
						},
						_p3)('Need NotFoundRoute');
			}
		}();
		return active ? _user$project$NavBar$class(
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Css_Classes$NavBarRoute, _user$project$Css_Classes$Active])) : _user$project$NavBar$class(
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Css_Classes$NavBarRoute]));
	});
var _user$project$NavBar$linkView = F4(
	function (maybeCategory, currentRoute, maybeLinkedCategory, link) {
		var _p5 = link;
		var desc = _p5._0;
		var linkRoute = _p5._1;
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Events$onClick(
					A2(_user$project$CoreTypes$NewRoute, maybeLinkedCategory, linkRoute)),
					A2(_user$project$NavBar$activeRoute, linkRoute, currentRoute)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(desc)
				]));
	});
var _user$project$NavBar$activeCategory = F2(
	function (maybeCurrentCategory, linkedCategory) {
		var _p6 = maybeCurrentCategory;
		if (_p6.ctor === 'Nothing') {
			return _user$project$NavBar$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$NavBarCategory]));
		} else {
			return _elm_lang$core$Native_Utils.eq(_p6._0, linkedCategory) ? _user$project$NavBar$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$NavBarCategory, _user$project$Css_Classes$Active])) : _user$project$NavBar$class(
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Css_Classes$NavBarCategory]));
		}
	});
var _user$project$NavBar$categoryView = F2(
	function (currentCategory, link) {
		var _p7 = link;
		var desc = _p7._0;
		var category = _p7._1;
		var linkRoute = _p7._2;
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Events$onClick(
					A2(
						_user$project$CoreTypes$NewRoute,
						_elm_lang$core$Maybe$Just(category),
						linkRoute)),
					A2(_user$project$NavBar$activeCategory, currentCategory, category)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(desc)
				]));
	});
var _user$project$NavBar$linksView = F4(
	function (maybeCurrentCategory, currentRoute, _p8, links) {
		var _p9 = _p8;
		var _p12 = _p9._2;
		var _p11 = _p9._0;
		var _p10 = _p9._1;
		return _elm_lang$core$Native_Utils.eq(
			maybeCurrentCategory,
			_elm_lang$core$Maybe$Just(_p10)) ? A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$NavBar$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$NavBarCategoryContainer]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$NavBar$categoryView,
					maybeCurrentCategory,
					{ctor: '_Tuple3', _0: _p11, _1: _p10, _2: _p12}),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[]),
					A2(
						_elm_lang$core$List$map,
						A3(
							_user$project$NavBar$linkView,
							maybeCurrentCategory,
							currentRoute,
							_elm_lang$core$Maybe$Just(_p10)),
						links))
				])) : A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$NavBar$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$NavBarCategoryContainer]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$NavBar$categoryView,
					maybeCurrentCategory,
					{ctor: '_Tuple3', _0: _p11, _1: _p10, _2: _p12})
				]));
	});
var _user$project$NavBar$view = F2(
	function (maybeCategory, route) {
		var ll = A2(_user$project$NavBar$linksView, maybeCategory, route);
		var l = A3(_user$project$NavBar$linkView, maybeCategory, route, _elm_lang$core$Maybe$Nothing);
		return A2(
			_elm_lang$html$Html$nav,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$NavBar$class(
					_elm_lang$core$Native_List.fromArray(
						[_user$project$Css_Classes$NavBar]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					ll,
					{
						ctor: '_Tuple3',
						_0: 'Machines',
						_1: _user$project$CoreTypes$MachineCat,
						_2: _user$project$CoreTypes$MachineRoute(_user$project$CoreTypes$MachineActions)
					},
					_elm_lang$core$Native_List.fromArray(
						[
							{
							ctor: '_Tuple2',
							_0: 'Actions',
							_1: _user$project$CoreTypes$MachineRoute(_user$project$CoreTypes$MachineActions)
						}
						])),
					l(
					{ctor: '_Tuple2', _0: 'Pairing', _1: _user$project$CoreTypes$PairRoute}),
					A2(
					ll,
					{
						ctor: '_Tuple3',
						_0: 'Accounts',
						_1: _user$project$CoreTypes$AccountCat,
						_2: _user$project$CoreTypes$AccountRoute('twilio')
					},
					_elm_lang$core$Native_List.fromArray(
						[
							{
							ctor: '_Tuple2',
							_0: 'Twilio',
							_1: _user$project$CoreTypes$AccountRoute('twilio')
						}
						])),
					A2(
					ll,
					{
						ctor: '_Tuple3',
						_0: 'Configuration',
						_1: _user$project$CoreTypes$ConfigCat,
						_2: A2(_user$project$CoreTypes$ConfigRoute, 'commissions', _elm_lang$core$Maybe$Nothing)
					},
					_elm_lang$core$Native_List.fromArray(
						[
							{
							ctor: '_Tuple2',
							_0: 'Commissions',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'commissions', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Limits',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'limits', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Currencies',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'currencies', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Crypto services',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'cryptoServices', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Languages',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'languages', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Notifications',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'notifications', _elm_lang$core$Maybe$Nothing)
						},
							{
							ctor: '_Tuple2',
							_0: 'Compliance',
							_1: A2(_user$project$CoreTypes$ConfigRoute, 'compliance', _elm_lang$core$Maybe$Nothing)
						}
						]))
				]));
	});

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$urlUpdate = F2(
	function (_p0, model) {
		var _p1 = _p0;
		var _p8 = _p1._0;
		var pagedModel = _elm_lang$core$Native_Utils.update(
			model,
			{route: _p8});
		var _p2 = A2(_elm_lang$core$Debug$log, 'DEBUG25', _p8);
		switch (_p2.ctor) {
			case 'PairRoute':
				var _p3 = _user$project$Pair$load;
				var pairModel = _p3._0;
				var cmd = _p3._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						pagedModel,
						{category: _elm_lang$core$Maybe$Nothing, pair: pairModel}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$PairMsg, cmd)
						]));
			case 'AccountRoute':
				var _p4 = _user$project$Account$load(_p2._0);
				var accountModel = _p4._0;
				var cmd = _p4._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						pagedModel,
						{
							category: _elm_lang$core$Maybe$Just(_user$project$CoreTypes$AccountCat),
							account: accountModel
						}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$AccountMsg, cmd)
						]));
			case 'ConfigRoute':
				var _p5 = A3(_user$project$Config$load, pagedModel.config, _p2._0, _p2._1);
				var configModel = _p5._0;
				var cmd = _p5._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						pagedModel,
						{
							category: _elm_lang$core$Maybe$Just(_user$project$CoreTypes$ConfigCat),
							config: configModel
						}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$ConfigMsg, cmd)
						]));
			case 'MachineRoute':
				var _p6 = _user$project$Machine$load;
				var machineModel = _p6._0;
				var cmd = _p6._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						pagedModel,
						{
							category: _elm_lang$core$Maybe$Just(_user$project$CoreTypes$MachineCat),
							machine: machineModel
						}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$MachineMsg, cmd)
						]));
			default:
				return _elm_lang$core$Native_Utils.crashCase(
					'Main',
					{
						start: {line: 211, column: 9},
						end: {line: 242, column: 49}
					},
					_p2)('Need to create 404');
		}
	});
var _user$project$Main$content = function (model) {
	var _p9 = A2(_elm_lang$core$Debug$log, 'DEBUG20', model.route);
	switch (_p9.ctor) {
		case 'PairRoute':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$CoreTypes$PairMsg,
				_user$project$Pair$view(model.pair));
		case 'AccountRoute':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$CoreTypes$AccountMsg,
				_user$project$Account$view(model.account));
		case 'ConfigRoute':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$CoreTypes$ConfigMsg,
				_user$project$Config$view(model.config));
		case 'MachineRoute':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$CoreTypes$MachineMsg,
				_user$project$Machine$view(model.machine));
		default:
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('No such route')
					]));
	}
};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('grid')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('unit one-quarter no-gutters lamassuAdminMainLeft')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$NavBar$view, model.category, model.route)
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('unit three-quarters lamassuAdminMainRight')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$class('lamassuAdminContent')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Main$content(model)
									]))
							]))
					]))
			]));
};
var _user$project$Main$init = function (_p10) {
	var _p11 = _p10;
	var _p13 = _p11._0;
	var _p12 = _p11._1;
	var model = {route: _p13, address: _p12, category: _elm_lang$core$Maybe$Nothing, account: _user$project$Account$init, pair: _user$project$Pair$init, config: _user$project$Config$init, machine: _user$project$Machine$init, err: _elm_lang$core$Maybe$Nothing};
	return A2(
		_user$project$Main$urlUpdate,
		{ctor: '_Tuple2', _0: _p13, _1: _p12},
		model);
};
var _user$project$Main$routes = function () {
	var nonEmptyStringParser = function (str) {
		return _elm_lang$core$String$isEmpty(str) ? _elm_lang$core$Result$Err('Empty string') : _elm_lang$core$Result$Ok(str);
	};
	var nonEmptyString = A2(_evancz$url_parser$UrlParser$custom, 'NON_EMPTY_STRING', nonEmptyStringParser);
	return _evancz$url_parser$UrlParser$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_evancz$url_parser$UrlParser$format,
				function (account) {
					return _user$project$CoreTypes$AccountRoute(account);
				},
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('account'),
					_evancz$url_parser$UrlParser$string)),
				A2(
				_evancz$url_parser$UrlParser$format,
				_user$project$CoreTypes$PairRoute,
				_evancz$url_parser$UrlParser$s('pair')),
				A2(
				_evancz$url_parser$UrlParser$format,
				F2(
					function (config, crypto) {
						return A2(
							_user$project$CoreTypes$ConfigRoute,
							config,
							_elm_lang$core$Maybe$Just(crypto));
					}),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('config'),
					A2(_evancz$url_parser$UrlParser_ops['</>'], _evancz$url_parser$UrlParser$string, nonEmptyString))),
				A2(
				_evancz$url_parser$UrlParser$format,
				function (config) {
					return A2(_user$project$CoreTypes$ConfigRoute, config, _elm_lang$core$Maybe$Nothing);
				},
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('config'),
					_evancz$url_parser$UrlParser$string)),
				A2(
				_evancz$url_parser$UrlParser$format,
				_user$project$CoreTypes$MachineRoute(_user$project$CoreTypes$MachineActions),
				A2(
					_evancz$url_parser$UrlParser_ops['</>'],
					_evancz$url_parser$UrlParser$s('machine'),
					_evancz$url_parser$UrlParser$s('actions')))
			]));
}();
var _user$project$Main$hopConfig = {hash: true, basePath: ''};
var _user$project$Main$urlParser = function () {
	var parse = function (path) {
		return A2(
			_elm_lang$core$Result$withDefault,
			_user$project$CoreTypes$NotFoundRoute,
			A3(_evancz$url_parser$UrlParser$parse, _elm_lang$core$Basics$identity, _user$project$Main$routes, path));
	};
	var resolver = A2(_sporto$hop$Hop$makeResolver, _user$project$Main$hopConfig, parse);
	return _elm_lang$navigation$Navigation$makeParser(
		function (_p14) {
			return resolver(
				function (_) {
					return _.href;
				}(_p14));
		});
}();
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p15 = msg;
		switch (_p15.ctor) {
			case 'PairMsg':
				var _p16 = A2(
					_user$project$Pair$update,
					A2(_elm_lang$core$Debug$log, 'DEBUG22', _p15._0),
					model.pair);
				var pairModel = _p16._0;
				var cmd = _p16._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{pair: pairModel}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$PairMsg, cmd)
						]));
			case 'AccountMsg':
				var _p17 = A2(_user$project$Account$update, _p15._0, model.account);
				var accountModel = _p17._0;
				var cmd = _p17._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{account: accountModel}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$AccountMsg, cmd)
						]));
			case 'ConfigMsg':
				var _p18 = A2(_user$project$Config$update, _p15._0, model.config);
				var configModel = _p18._0;
				var cmd = _p18._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{config: configModel}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$ConfigMsg, cmd)
						]));
			case 'MachineMsg':
				var _p19 = A2(_user$project$Machine$update, _p15._0, model.machine);
				var machineModel = _p19._0;
				var cmd = _p19._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{machine: machineModel}),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_elm_lang$core$Platform_Cmd$map, _user$project$CoreTypes$MachineMsg, cmd)
						]));
			default:
				var path = _user$project$NavBar$routeToUrl(
					A2(_elm_lang$core$Debug$log, 'DEBUG27', _p15._1));
				var command = _elm_lang$navigation$Navigation$newUrl(
					A2(
						_sporto$hop$Hop$outputFromPath,
						_user$project$Main$hopConfig,
						A2(_elm_lang$core$Debug$log, 'DEBUG26', path)));
				var _p20 = A2(_elm_lang$core$Debug$log, 'DEBUG28', 'x');
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{category: _p15._0}),
					_elm_lang$core$Native_List.fromArray(
						[command]));
		}
	});
var _user$project$Main$main = {
	main: A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$Main$urlParser,
		{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, urlUpdate: _user$project$Main$urlUpdate, subscriptions: _user$project$Main$subscriptions})
};
var _user$project$Main$Model = F8(
	function (a, b, c, d, e, f, g, h) {
		return {route: a, address: b, category: c, pair: d, account: e, config: f, machine: g, err: h};
	});

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

