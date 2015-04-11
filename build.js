({
    baseUrl: ".",
    name: "main",
    out: "main-built.js",
    paths: {
        jquery: 'libs/jquery.min',
        underscore: 'libs/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        page: {
            exports: 'page'
        }
    }
})
