import Vue from 'vue';
import Router from 'vue-router';
import IndexArea from '../components/bodyRouteComps/IndexArea';
import ClassificationArea from '../components/bodyRouteComps/ClassificationArea';
import TagsArea from '../components/bodyRouteComps/TagsArea';
import AboutArea from '../components/bodyRouteComps/AboutArea';
import ArchiveArea from '../components/bodyRouteComps/ArchiveArea';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/index', component: IndexArea },
    { path: '/archive', component: ArchiveArea },
    { path: '/classification', component: ClassificationArea },
    { path: '/tags', component: TagsArea },
    { path: '/about', component: AboutArea },
  ],
})
