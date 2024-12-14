---
title: Vue FilterRules 且或组件，支持自定条件查询
date: 2024-8-18
tags:
    - vue
categories:
    - Web
---

`FilterRules` 且或组件 用于一些需要且或关系数据填入和展示，`react` 版本组件推荐地址 [FilterRules](https://dtstack.github.io/dt-react-component/components/filter-rules)

#### 1、条件过滤树目前实现的功能点如下

-   实现 **增加节点**、**删除节点**、**编辑节点**
-   实现 **表单校验**
-   实现 **自定义节点内容**

![f7baa489-f268-4cfd-82d6-29330e9b8233.jpeg](https://s2.loli.net/2024/12/14/d3ry5MYDixnw9cs.jpg)

#### 2、定义组件：filterRules.vue

```js
<template>
  <div :key="ruleTreeData.currentGroup" class="filter-rules-wrap">
    <div
      v-if="ruleTreeData.children.length > 1"
      :class="[isRootNode ? 'rules-line-wrap' : 'rules-line-wrap rules-line-left', disabled ? 'rules-line-bottom' : '']"
    >
      <div class="toggle-rules-wrap" @click="toggleRules">
        <span class="text">{{ conditionRelation === 'or' ? '或' : '且' }}</span>
        <el-icon size="12" class="icon"><DCaret /></el-icon>
      </div>
    </div>
    <div :class="[isRootNode ? 'main' : 'main main-border', mainStyle]">
      <template v-for="(item, index) in ruleTreeData.children">
        <el-row
          v-if="item.type == 'condition'"
          :key="item.currentGroup"
          :class="[ruleTreeData.children.length === 1 ? 'child' : 'child child-pl']"
        >
          <el-form ref="ruleFormRef" :model="item" :rules="rules" :inline="true">
            <el-form-item label="" prop="conditionKey">
              <el-select
                v-model="item.conditionKey"
                :disabled="disabled"
                class="form-item-cell"
                placeholder="请选择筛选项"
                @change="changeConditionKeySelect(item)"
              >
                <el-option
                  v-for="obj in state.filterItems"
                  :key="obj.dictKey"
                  :label="obj.dictName"
                  :value="obj.dictKey"
                />
              </el-select>
            </el-form-item>

            <el-form-item label="" prop="conditionType">
              <el-select
                v-model="item.conditionType"
                :disabled="disabled"
                placeholder="运算符"
                class="form-item-cell"
                @change="changeConditionTypeSelect(item)"
              >
                <el-option
                  v-for="obj in state.operatorList"
                  :key="obj.dictKey"
                  :label="obj.dictName"
                  :value="obj.dictKey"
                />
              </el-select>
            </el-form-item>

            <el-form-item label="" prop="conditionValue" style="margin-right: 0">
              <el-input
                v-model.trim="item.conditionValue"
                :disabled="disabled"
                placeholder="请输入目标值"
                class="form-item-cell"
                @keyup.enter="handleConditionValueBlur(item.conditionValue)"
                @blur="handleConditionValueBlur(item.conditionValue)"
              />
            </el-form-item>
          </el-form>

          <!-- <el-input v-model="item.conditionValue" class="form-item-cell" placeholder="请选择目标值"></el-input> -->
          <!-- <template v-if="isRootNode && ruleTreeData.children.length === 1"> </template> -->
          <el-icon v-if="!disabled" color="rgba(32, 36, 44, 1)" class="remove-icon" @click="removeRuleRow(index)">
            <CircleCloseFilled />
          </el-icon>
        </el-row>
        <el-row
          v-if="item.type == 'group' && item.children.length > 0"
          :key="item.currentGroup"
          :class="[ruleTreeData.children.length === 1 ? 'child' : 'child child-pl']"
        >
          <filter-rules
            ref="filterRulesRef"
            v-model:modelValue="ruleTreeData.children[index]"
            :disabled="disabled"
            :filterItemsArray="state.filterItems"
            :operatorArray="state.operatorList"
            @on-change="() => emits('on-change')"
            @on-remove="handleRemoveBack"
          ></filter-rules>
        </el-row>
      </template>

      <div v-if="!disabled" class="add-wrap">
        <div class="left">
          <el-icon><CirclePlusFilled /></el-icon>
          <span class="text" @click="addRuleRow"> 添加筛选条件 </span>
          <el-popover ref="popverRef" trigger="hover" :width="126" placement="right" :teleported="false">
            <span class="pointer" @click="addRuleGroup">添加筛选组条件</span>
            <template #reference>
              <el-icon><CaretBottom /></el-icon>
            </template>
          </el-popover>
        </div>

        <span v-if="isRootNode" class="clear-filter" @click="clearAllFilter">
          <el-icon><Delete /></el-icon>
          <span>清空全部条件</span>
        </span>
      </div>
    </div>

    <template v-if="!disabled">
      <el-icon v-if="!isRootNode" class="remove-group-icon pointer" @click="removeRuleGuop">
        <CircleCloseFilled />
      </el-icon>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { isEmpty } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';
import { FormInstance } from 'element-plus';
import { dictunPageList } from '@/api';

defineOptions({
  name: 'FilterRules',
});

const emits = defineEmits(['update:modelValue', 'on-remove', 'on-change', 'on-clear']);

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },

  type: {
    type: String,
    default: '',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  filterItemsArray: {
    type: Array,
    default: () => [],
  },

  operatorArray: {
    type: Array,
    default: () => [],
  },
});

let filterRulesRef = ref<any>();
const ruleFormRef = ref<FormInstance>();
const ruleTreeData = ref<any>({});
const conditionRelation = ref<string>('');
const isRootNode = ref<boolean>(false);
const parrentGroup = ref<string>('');
const popverRef = ref<any>(null);

const rules = {
  conditionKey: [{ required: true, message: '请输入', trigger: 'blur' }],
  conditionType: [{ required: true, message: '请输入', trigger: 'blur' }],
};

const state = reactive({
  isFilterLoading: false,
  isOperatorLoading: false,
  filterItems: [],
  operatorList: [],
});

const mainStyle = computed(() => {
  if (isRootNode.value && ruleTreeData.value.children.length > 1) {
    return 'main-pl';
  }
  return '';
});

watch(
  () => props.modelValue,
  (newVal) => {
    setDefaultData(newVal);
  },
  { immediate: true },
);

onMounted(() => {
  initOptions();
});

function initOptions() {
  if (props.filterItemsArray.length) {
    state.filterItems = props.filterItemsArray;
  } else {
    queryFilterItems();
  }
  if (props.operatorArray.length) {
    state.operatorList = props.operatorArray;
  } else {
    queryOperator();
  }
}

async function queryFilterItems() {
  try {
    state.isFilterLoading = true;
    const { status, data } = await dictunPageList({ parentDictCode: 'SN53WpEZsabcF9Eo1L8_S' });
    state.isFilterLoading = false;
    if (status === '200') {
      state.filterItems = data;
    }
  } catch (error) {
    state.isFilterLoading = false;
  }
}

async function queryOperator() {
  try {
    state.isOperatorLoading = true;
    const { status, data } = await dictunPageList({ parentDictCode: 'SN53WpEZsabcdF9Eo1L8_S' });
    state.isOperatorLoading = false;
    if (status === '200') {
      state.operatorList = data;
    }
  } catch (error) {
    state.isOperatorLoading = false;
  }
}


function setDefaultData(newVal: any) {
  if (isEmpty(newVal)) {
    const currentGroup: string = uuidv4();
    isRootNode.value = true;
    parrentGroup.value = currentGroup;
    conditionRelation.value = 'or';
    ruleTreeData.value = {
      currentGroup: parrentGroup.value,
      conditionRelation: conditionRelation.value,
      children: [
        {
          currentGroup: uuidv4(),
          parrentGroup: parrentGroup.value,
          conditionKey: '',
          conditionKeyName: '',
          conditionType: '',
          conditionTypeName: '',
          conditionValue: '',
          type: 'condition',
        },
      ],
    };
    emits('update:modelValue', ruleTreeData.value);
  } else {
    // eslint-disable-next-line no-prototype-builtins
    isRootNode.value = newVal.hasOwnProperty('parrentGroup') === false;
    parrentGroup.value = newVal.currentGroup;
    ruleTreeData.value = newVal;
    conditionRelation.value = ruleTreeData.value.conditionRelation;
  }
}

function addRuleRow() {
  ruleTreeData.value.children.push({
    currentGroup: uuidv4(),
    parrentGroup: parrentGroup.value,
    conditionKey: '',
    conditionKeyName: '',
    conditionType: '',
    conditionTypeName: '',
    conditionValue: '',
    type: 'condition',
  });
  emits('update:modelValue', ruleTreeData.value);
}

function removeRuleRow(index: number) {
  ruleTreeData.value.children.splice(index, 1);
  if (ruleTreeData.value.children.length) {
    emits('update:modelValue', ruleTreeData.value);
    emits('on-change');
  } else {
    emits('on-remove', ruleTreeData.value);
  }
}

function addRuleGroup() {
  popverRef.value.hide();
  const currentGroup = uuidv4();
  ruleTreeData.value.children.push({
    conditionRelation: 'or',
    type: 'group',
    currentGroup,
    parrentGroup: parrentGroup.value,
    children: [
      {
        currentGroup: uuidv4(),
        parrentGroup: currentGroup,
        conditionKey: '',
        conditionKeyName: '',
        conditionType: '',
        conditionTypeName: '',
        conditionValue: '',
        type: 'condition',
      },
    ],
  });
  emits('update:modelValue', ruleTreeData.value);
}

function removeRuleGuop() {
  emits('on-remove', ruleTreeData.value);
}

function handleRemoveBack(data: any) {
  const index = ruleTreeData.value.children.findIndex((v: any) => v.currentGroup === data.currentGroup);
  if (index >= 0) {
    ruleTreeData.value.children.splice(index, 1);
    emits('update:modelValue', ruleTreeData.value);
    emits('on-change');
  }
}

function toggleRules() {
  if (props.disabled) return;
  conditionRelation.value = conditionRelation.value === 'or' ? 'and' : 'or';
  ruleTreeData.value.conditionRelation = conditionRelation.value;
  emits('on-change')
}

function clearAllFilter() {
  emits('update:modelValue', {});
  emits('on-clear');
}

function changeConditionKeySelect(data: any) {
  const item = state.filterItems.find((v: any) => v.dictKey === data['conditionKey']);
  if (item) data['conditionKeyName'] = item.dictName;
  if (data.conditionType) emits('on-change');
}

function changeConditionTypeSelect(data: any) {
  const item = state.operatorList.find((v: any) => v.dictKey === data['conditionType']);
  if (item) data['conditionTypeName'] = item.dictName;
  if (data.conditionKey) emits('on-change');
}

function handleConditionValueBlur(val: string) {
  if (val) emits('on-change');
}
async function validate() {
  let formList: any = ruleFormRef.value;
  let rulesRefList: any = filterRulesRef.value;

  let list: any[] = [];

  if (Array.isArray(formList)) {
    await Promise.all(
      formList.map(async (item: any) => {
        const valid = await item.validate();
        list.push(!!valid);
      }),
    ).catch(() => {
      list.push(false);
    });
  } else if (formList) {
    // 单个表单项
    const valid = await formList.validate().catch(() => {});
    list.push(!!valid);
  }

  // 验证rulesRefList中的每个项;
  if (Array.isArray(rulesRefList)) {
    await Promise.all(
      rulesRefList.map(async (item: any) => {
        const valid = await item.validate();
        list.push(!!valid);
      }),
    ).catch(() => {
      list.push(false);
    });
  }

  return list.length !== 0 && list.some((v: boolean) => !v) === false;
}

defineExpose({ validate });
</script>

<style scoped lang="less">
.filter-rules-wrap {
  position: relative;
  min-width: 520px;
}

.rules-line-wrap {
  position: absolute;
  top: 30px;
  bottom: 82px;
  left: 8px;
  z-index: 999;
  width: 4px;
  border: 1px solid #e5e6eb;
  border-right: 0;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle-rules-wrap {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;

    .text {
      margin-right: 2px;
    }

    .icon {
      position: relative;
      top: -1px;
    }
  }
}

.rules-line-left {
  left: 20px;
}

.rules-line-bottom {
  bottom: 32px;
}

.main {
  min-width: 594px;
  width: max-content;
  min-height: 70px;
  padding: 10px 10px 10px 0;
  position: relative;
}

.main-border {
  padding-left: 20px;
  padding-right: 30px;
  border: 1px solid #e5e6eb;
  border-radius: 6px;
}

.main-pl {
  padding-left: 10px;
}

.child {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: max-content;
  position: relative;
  padding: 10px 0;
}

.child-pl {
  padding-left: 20px;
}

.add-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: #0088ff;
  font-size: 12px;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin-left: 2px;
    cursor: pointer;
  }

  .clear-filter {
    display: flex;
    align-items: center;
    color: #1d2129;
    cursor: pointer;
  }
}

.remove-group-icon {
  position: absolute;
  right: -24px;
  top: 50%;
  transform: translateY(-50%);
}

.pointer {
  cursor: pointer;
}

.remove-icon {
  margin-left: 10px;
  cursor: pointer;
}

.form-item-cell {
  width: 150px;
}

.form-item-cell:nth-child(2n + 1) {
  width: 200px;
}

.form-item-cell:nth-child(2),
.form-item-cell:nth-child(3) {
  margin-left: 10px;
}
</style>

```

#### 3、父组件调用

```js
<template>
  <el-form :model="state.formState" label-position="top">
    <el-form-item label="设置筛选条件">
      <el-scrollbar max-height="500" style="flex: 1">
        <div class="pl-[2px]">
          <filterRules
            v-model:modelValue="state.formState.filterRules"
            @on-change="handleFilterRulesChange"
          />
        </div>
      </el-scrollbar>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import filterRules from '@/components/filterRules.vue';

const state = reactive({
  formState: {
    filterRules: {}
  }
});
</script>

```
