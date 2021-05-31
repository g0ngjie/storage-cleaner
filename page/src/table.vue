<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="index" label="#" />
    <el-table-column prop="key" label="KEY" width="180"> </el-table-column>
    <el-table-column prop="value" label="VALUE" width="180"> </el-table-column>
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
