<template>
  <div>
    <!-- 头部 -->
    <AppHeader></AppHeader>
    <!-- 侧边栏 -->
    <AppNavBar></AppNavBar>
    <!-- 主体 -->
    <AppMain></AppMain>
  </div>
</template>
<script>
import AppHeader from "./AppHeader";
import AppNavBar from "./AppNavBar";
import AppMain from "./AppMain";
export default {
  name: "",
  props: {},
  components: {
    AppHeader,
    AppNavBar, 
    AppMain
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang='scss' scoped>
.header {
  height: 50px;
  line-height: 50px;
  position: absolute;
  right: 0;
  left: 0;
  background-color: rgb(84, 92, 100);
}
.navBar{
  width: 180px;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  background-color: #ffffff;
  border-right: solid 1px #e6e6e6
}
.main{
  position: absolute;
  left: 180px;
  right: 0;
  top: 50px;
  bottom: 0;
  background-color: #f8f9fa
}
</style>