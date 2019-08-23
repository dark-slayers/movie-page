const url = {
    movie: '/movie',
    movies: '/movies',
    download: function(path) {
        const p = encodeURI(path);
        return `/file?path=${p}`;
    },
};
export default url;