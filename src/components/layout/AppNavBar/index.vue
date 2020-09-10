<template>
  <div class="navBar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#000"
      active-text-color="teal"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/goods/photo">
        <i class="el-icon-user-solid"></i>
        <span slot="title">相册管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-user-solid"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
   
  },
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>
.el-menu{
  border-right : 0;
}
</style>