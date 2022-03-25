

const Home = {
    template: '<h1> Home</h1>',
    name:'Home'
}
const UserSettinge = {
    template: '<h1> UserSettinge</h1>',
    name:'User Settinge'
}
const WishList = {
    template: '<h1> WishList</h1>',
    name:'Wish List'
}
const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name:'Shopping Cart'
}

// router 
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-settinge', component: UserSettinge, name: 'UserSettings' },
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
    ]
})

const vue = new vue({
   router 
}).$mount('#app');
    
