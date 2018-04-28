/*bookstore*/
var bookstoreSection = Vue.component('bookstore', {
    template: '<div><button @click="getData()">Click</button></div>',
    methods: {
        getData: function () {
            $.ajax({
                type: "get",
                url: '../data.json',
                dataType: 'json',
                success: function (data) {
                    if (data.statuscode == 0) {
                        console.log(data.books)
                    }
                }
            })
        }
    }
})
/*bookshelf */


/*router*/

const routes = [
    {
        path: '/',
        component: bookstoreSection
    },
    {
        path: 'bookstore',
        component: bookstoreSection
    },
    {
        path: '/bookshelf',
        component: bookstoreSection
    },
]

const router = new VueRouter({
    mode: 'history',
    routes // （缩写）相当于 routes: routes
})
/*main*/
var v = new Vue({
    el: "#app",
    router,
    data: {
        hello: "书城",
        class1: false,
        class2: true,
        header: "header",
        footer: "footer",
        footerbar: "footerbar"
    },
    methods: {

    }
})