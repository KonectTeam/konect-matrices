export function isNumeric(value: string) {
    return !isNaN(parseFloat(value));
}

export type MinMaxFunc = 'min' | 'max';