export function isNumeric(value: string) {
    return !isNaN(parseFloat(value));
}

export type MinMaxFunc = 'min' | 'max';

export const availableMathFunction = [
    'abs',
    'acos',
    'acosh',
    'asin', 
    'asinh',
    'atan',
    'atanh',
    'ceil',
    'cos',
    'cosh',
    'exp',
    'expm1',
    'floor',
    'fround',
    'log',
    'log1p',
    'log10',
    'log2',
    'round',
    'sign',
    'sin',
    'sinh',
    'sqrt',
    'tan',
    'tanh',
    'trunc'
];

export type MatrixMathFunction = typeof availableMathFunction[number]
