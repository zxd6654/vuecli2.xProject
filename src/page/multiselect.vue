<template>
  <div>
    <multiselect v-model="selected" :options="options"></multiselect>

    <div>
      <label class="typo__label">Single select</label>
      <multiselect
        v-model="value"
        :options="options"
        :searchable="false"
        :close-on-select="false"
        :show-labels="false"
        placeholder="Pick a value"
      ></multiselect>
      <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      selected: null,
      value:null,
      options: ["list", "of", "options"]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>