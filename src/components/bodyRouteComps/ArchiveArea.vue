<template>
  <div class="archive-area">
    <div class="ara-summary">Good！你已经完成了{{ archive.total }}篇博客,继续努力！</div>
    <div class="year-summary" v-for="(yearSummary,idx) in archive.articles" :key="idx">
      <div class="ys-title">{{ yearSummary.year }}</div>
      {{ yearSummary.articles }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'archive-area',
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
    padding-left: 20px;
  }
  .ara-summary {
    font-size: 16px;
  }
  .ys-title {
    font-size: 22px;
    margin: 50px 0;
    font-weight: bold;
  }
</style>
