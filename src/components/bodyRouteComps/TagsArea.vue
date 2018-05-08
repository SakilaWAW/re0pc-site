<template>
  <div class="tags-area">
    <div class="ta-title">目前共计{{ tagData.length }}个标签</div>
    <div class="tag-bar">
      <auto-adapt-text v-for="(data,idx) in tagData" :key="idx"
                       :size="data.count" :text="data.tag" @clickEvent="jumpToTagDetail()"></auto-adapt-text>
    </div>
  </div>
</template>

<script>
  import AutoAdaptText from '../commons/AutoAdaptText';

  export default {
    name: 'tags-area',
    created() {
      this.fetchTagData();
    },
    components: {
      AutoAdaptText,
    },
    data() {
      return {
        tagData: [],
      };
    },
    methods: {
      fetchTagData() {
        this.$axios.get('http://127.0.0.1:3000/stats/tag')
          .then(res=> {
            this.tagData = res.data;
          }).catch(err=>{
            console.log(`fetchTagData出问题了${err}`);
        });
      },
      jumpToTagDetail() {
        console.log(`jumpToTagDetail()`);
        this.$router.push('/tags/detail');
      },
    }
  };
</script>

<style lang="scss" scoped>
  .ta-title {
    font-size: 17px;
    text-align: center;
    margin-bottom: 25px;
  }
</style>
