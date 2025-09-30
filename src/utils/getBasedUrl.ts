export const getBasedUrl = (path: string) => {
    return (import.meta.env.ASTRO_BASE_PATH || '/') + path;
};
