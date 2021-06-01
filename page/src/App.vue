<template>
  <el-button @click="handleReload">reload</el-button>
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
import { connect, sendMsg } from "./notice";
import { getTableData } from "./utils";

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
    handleReload() {
      console.log("[debug]reload:")
      sendMsg({ type: "reload" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    listener() {
      const port = connect();
      // 监听后台页面消息
      if (port)
        port.onMessage.addListener((message) => {
          const { data, from } = message || {};
          if (from && from === "content") {
            const { local, session } = data || {};
            this.sessionData = getTableData(session || {});
            this.localData = getTableData(local || {});
          }
        });
    },
  },
  created() {
    this.listener();
  },
};
</script>
