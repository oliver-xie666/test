<script setup lang="ts">
const { replace } = useRouter()
</script>

<template>
  <el-result
    icon="error"
    title="Error Tip"
    sub-title="Please follow the instructions"
  >
    <template #extra>
      <el-button type="primary" @click="replace('/')">
        Back
      </el-button>
      <el-button type="primary" @click="replace('/')">
        Back
      </el-button>
    </template>
  </el-result>
</template>
