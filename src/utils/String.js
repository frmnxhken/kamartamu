export const sliceStr = (text) => {
    const limit = 50;
    return text.length > limit ? text.slice(0, limit) + ".." : text
} 