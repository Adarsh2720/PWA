//install service worker

self.addEventListener('install',evt=>{
    console.log("Service worker has been installed");
})


//activate service worker


self.addEventListener('active',evt=>{
    console.log("Service worker activated");
})