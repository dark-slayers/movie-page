const url = {
    movie: '/movie',
    movies: '/movies',
    download: function(path) {
        const p = encodeURI(path);
        return `/download/file?path=${p}`;
    },
    downloadVO: function(path) {
        const p = encodeURI(path);
        return `/download/vo?path=${p}`;
    },
};
export default url;
