import Vue from 'vue';
import Router from 'vue-router';
import IndexArea from '../components/bodyRouteComps/IndexArea';
import CategoryArea from '../components/bodyRouteComps/CategoryArea';
import TagsArea from '../components/bodyRouteComps/TagsArea';
import AboutArea from '../components/bodyRouteComps/AboutArea';
import ArchiveArea from '../components/bodyRouteComps/ArchiveArea';
import ArticleArea from '../components/bodyRouteComps/ArticleArea';
import CategoryDetailArea from '../components/bodyRouteComps/CategoryDetailArea';
import TagDetailArea from '../components/bodyRouteComps/TagDetailArea';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '', redirect: '/index' },
    { path: '/index', component: IndexArea },
    { path: '/archive', component: ArchiveArea },
    { path: '/category', component: CategoryArea },
    { path: '/tags', component: TagsArea },
    { path: '/about', component: AboutArea },
    { path: '/article/:articleId', component: ArticleArea },
    { path: '/category/:category', component: CategoryDetailArea},
    { path: '/tag/:tag', component: TagDetailArea },
  ],
})
