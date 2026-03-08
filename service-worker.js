// AI绘画关键词宝库 PWA Service Worker
const CACHE_NAME = 'ai-keywords-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon.png'
];

// 安装事件
self.addEventListener('install', function(event) {
  console.log('[Service Worker] 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[Service Worker] 缓存文件');
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
      })
      .then(function() {
        console.log('[Service Worker] 安装完成');
        return self.skipWaiting();
      })
  );
});

// 激活事件
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] 激活中...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] 删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(function() {
      console.log('[Service Worker] 激活完成');
      return self.clients.claim();
    })
  );
});

// 获取资源事件
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // 缓存命中，返回缓存资源
        if (response) {
          console.log('[Service Worker] 从缓存获取:', event.request.url);
          return response;
        }

        // 克隆请求
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function(response) {
          // 检查是否为有效响应
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 克隆响应
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(function(error) {
          console.log('[Service Worker] 获取资源失败:', error);
          // 返回离线页面或缓存内容
          return caches.match('./index.html');
        });
      })
  );
});

// 消息事件 - 用于更新缓存
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// 后台同步（可选）
self.addEventListener('sync', function(event) {
  if (event.tag === 'sync-keywords') {
    event.waitUntil(
      // 这里可以添加后台同步逻辑
      console.log('[Service Worker] 后台同步完成')
    );
  }
});

// 推送通知（可选）
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'AI绘画关键词宝库有新内容',
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '立即查看',
        icon: './icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: '关闭',
        icon: './icons/icon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('AI绘画关键词宝库', options)
  );
});
