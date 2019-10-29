const url = {
    movie: '/movie',
    movies: '/movies',
    download: function(path) {
        const p = encodeURI(path);
        return `/dowload/file?path=${p}`;
    },
};
export default url;
