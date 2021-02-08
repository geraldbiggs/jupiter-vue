<template>
  <q-page class="flex flex-center">
    <div v-if="visible.value">{{visible}}</div>
    <button
      @click="showIt"
     >
     Show
     </button>
    <button
      label="Hihj"
      @click="hideIt"
     >Hide</button>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { toggleForm } from 'composition-utils';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const {visible, show, hide} = toggleForm();
    const showIt = () => {
      show();
    }
    const hideIt = () => {
      hide();
    }
    return { visible, show, hide }
  }
})
</script>
