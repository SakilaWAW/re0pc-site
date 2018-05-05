<template>
  <div class="archive-area">
    <div class="ara-summary"><i class="iconfont summary-point">&#xe608;</i>Good！你已经完成了{{ archive.total }}篇博客,继续努力！</div>
    <div class="year-summary" v-for="(yearSummary,idx) in archive.articles" :key="idx">
      <div class="ys-year">
        <i class="iconfont year-point">&#xe608;</i>{{ yearSummary.year }}
      </div>
      <div v-for="article in yearSummary.articles">
        <archive-item :article="article"></archive-item>
      </div>
    </div>
  </div>
</template>

<script>
  import ArchiveItem from '../commons/ArchiveItem';

  export default {
    name: 'archive-area',
    components: {
      ArchiveItem,
    },
    created() {
      if(this.archive === '') this.fetchArchive();
    },
    data() {
      return {
        archive: '',
      };
    },
    methods: {
      fetchArchive() {
        this.$axios.get('http://127.0.0.1:3000/stats/article')
          .then(res=>{
            this.archive = res.data;
          }).catch(err=>{
            console.log(`fetchArchive时出现错误${err}`);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/css/global';
  .archive-area {
    border-left: 5px solid $light-grey;
    padding-bottom: 5px;
  }
  .ara-summary, .ys-year {
    padding-left: 20px;
  }
  .ara-summary {
    font-size: 16px;
    position: relative;
  }
  .ys-year {
    font-size: 22px;
    margin: 50px 0 40px 0;
    font-weight: bold;
    position: relative;
  }
  .summary-point {
    font-size: 28px;
    left: -17px;
    top: -10px;
    position: absolute;
    color: darkgrey;
  }
  .year-point {
    font-size: 20px;
    left: -13px;
    position: absolute;
    color: darkgrey;
  }
</style>
