export { default as About } from '../../components/About.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as ProductIndex } from '../../components/ProductIndex.vue'
export { default as Subscribe } from '../../components/Subscribe.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyGallery = import('../../components/Gallery.vue' /* webpackChunkName: "components/Gallery" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyProductIndex = import('../../components/ProductIndex.vue' /* webpackChunkName: "components/ProductIndex" */).then(c => c.default || c)
export const LazySubscribe = import('../../components/Subscribe.vue' /* webpackChunkName: "components/Subscribe" */).then(c => c.default || c)
