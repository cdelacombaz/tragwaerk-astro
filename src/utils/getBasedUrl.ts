export const getBasedUrl = (path: string) => {
    if (import.meta.env.ASTRO_BASE_PATH) return import.meta.env.ASTRO_BASE_PATH + '/' + path
    return '/' + path;
};
