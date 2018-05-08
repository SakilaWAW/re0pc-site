<template>
  <div class="archive-area">
    <div class="ara-summary">Good！你已经完成了{{ archive.total }}篇博客,继续努力！</div>
    <div class="year-summary" v-for="(yearSummary,idx) in archive.articles" :key="idx">
      <div class="ys-year">{{ yearSummary.year }}</div>
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
    padding-bottom: 5px;
    position: relative;
  }
  .archive-area::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 3px;
    background: $light-grey;
    transform: translateX(-50%);
  }
  .ara-summary, .ys-year {
    padding-left: 20px;
  }
  .ara-summary {
    font-size: 16px;
    position: relative;
  }
  .ara-summary::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    border: 6px solid darkgrey;
    border-radius: 6px;
  }
  .ys-year {
    font-size: 22px;
    margin: 50px 0 40px 0;
    font-weight: bold;
    position: relative;
  }
  .ys-year::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
    border: 4px solid darkgrey;
    border-radius: 4px;
  }
</style>
