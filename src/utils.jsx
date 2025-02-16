export const getImageUrl = (subdir, name) => {
    return new URL(`/assets/${subdir}/${name}`, import.meta.url).href;
};