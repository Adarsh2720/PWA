const cacheName = 'ecommerce'
const cacheAssets = [
    '/',
    'index.html',
    'assets/images/blog/b1.jpg',
    'assets/images/clients/c1.png',
    'assets/images/features/f2.jpg',
    'assets/images/populer-products/p2.png',
];
self.addEventListener('fetch', evt => {
    //console.log('fetch event:',evt)
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request)
        })
    )
});