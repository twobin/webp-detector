/**
 * 请求一个 WebP 格式的图片。
 * 当浏览器成功加载该图片的时候会触发 onload 事件，否则会触发 oneror 的事件。
 * 先将检测结果保存在 localStorage，当访问页面时根据 localStorage 中的检测结果提供对应格式的图片。
 */
function isSupportWebp() {
  if (!window.localStorage || typeof localStorage !== 'object') return;

  const name = 'WebpDetector';

  if (!localStorage.getItem(name) || (localStorage.getItem(name) !== 'available' && localStorage.getItem(name) !== 'disable')) {
    const img = document.createElement('img');

    img.onload = function () {
      try {
        localStorage.setItem(name, 'available');
      } catch (e) {
        console.warn('WebpDetector：' + e);
      }
    };

    img.onerror = function () {
      try {
        localStorage.setItem(name, 'disable');
      } catch (e) {
        console.warn('WebpDetector：' + e);
      }
    };

    img.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==';
  }
}

// 根据 localStorage 中的检测结果，如果支持 webp 格式，则图片链接加上后缀，默认为 _.webp
function getWebpSrc(imgSrc, suffix = null) {
  const suffixName = suffix ? suffix : '_.webp';

  let needWebp = false,
    src = '';

  isSupportWebp();

  if (window.localStorage && typeof localStorage === 'object') {
    needWebp = localStorage.getItem('WebpDetector') === 'available';
  }
  src = needWebp ? (imgSrc + suffixName) : imgSrc;

  return src;
}

export default {
  isSupportWebp,
  getWebpSrc,
};
