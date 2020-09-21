<template>
  <div>
    <pre v-highlight>
        <code class="lang-javascript">
            {{codeText}}
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
        codeText: 
        `<div>
            <pre v-highlight>
                <code class="lang-javascript">
                    高亮显示
                </code>
            </pre>
        </div>`,
    };
  },
};
</script>

<style>
</style>