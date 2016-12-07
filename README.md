# webp-detector

webp-detector has functions with isSupportWebp and getWebpSrc.

isSupportWebp：先将检测结果保存在 localStorage，格式为 WebpDetector: 'available' 或 WebpDetector: 'disable'。

getWebpSrc：根据 localStorage 中的检测结果，如果支持 webp 格式，则图片链接加上后缀，默认为 _.webp。

[![npm version](https://badge.fury.io/js/webp-detector.png)](https://badge.fury.io/js/webp-detector)
[![build status](https://travis-ci.org/twobin/webp-detector.svg)](https://travis-ci.org/twobin/webp-detector)
[![npm downloads](https://img.shields.io/npm/dt/webp-detector.svg?style=flat-square)](https://www.npmjs.com/package/webp-detector)

## usage

```
$ npm i -S webp-detector
```

## docs

### webp-detector

```
import webpDetector from 'webp-detector';

webpDetector.isSupportWebp();

<img src={webpDetector.getWebpSrc('xxx')} />
```
