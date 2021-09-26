// Save dynamic cache
function updateDynamicCache(dynamic_cache, req, res) {
  if (res.ok) {
    return caches.open(dynamic_cache).then((cache) => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
