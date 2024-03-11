const swap = (obj: Object) => Object.fromEntries(
    Object.entries(obj).map(a => a.reverse())
);

const twInTextSizes = {
    'text-base': 16,
    'text-xl': 20,
    'text-2xl': 24,
    'text-3xl': 30,
};
const textSizesInTW = swap(twInTextSizes);

const tavyVersion = '2024-03-A';

export {
    tavyVersion,
};