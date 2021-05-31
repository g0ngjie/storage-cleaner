<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="Session" name="session">
      <Table :data="sessionData" />
    </el-tab-pane>
    <el-tab-pane label="Local" name="local">
      <Table :data="localData" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Table from "./table.vue";
export default {
  name: "App",
  components: { Table },
  data() {
    return {
      activeName: "session",
      sessionData: [],
      localData: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {
    sessionStorage.a = 1;
    sessionStorage.b = 1;
    sessionStorage.c = 1;
    sessionStorage.d = 1;
    this.sessionData = [];
    this.localData = [];
    for (const key in sessionStorage) {
      if (Object.hasOwnProperty.call(sessionStorage, key)) {
        const value = sessionStorage[key];
        this.sessionData.push({ key, value });
      }
    }
  },
};
</script>
