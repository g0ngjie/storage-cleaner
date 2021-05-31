<template>
  <el-table :data="data" style="width: 100%" stripe>
    <el-table-column type="index" label="#" />
    <el-table-column prop="key" label="KEY"> </el-table-column>
    <el-table-column prop="value" label="VALUE"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
