<template >
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'statelessComponent',
    render (createElement, context) {

      const slots = context.slots()

      const header = createElement('header', {
        attrs: {class: 'panel-header'}
      }, context.props.title)

      const body = createElement('main', {
        attrs: {class: 'panel-body'}
      }, slots.default)

      return createElement('section', {
        attrs: {class: 'panel'}
      }, [header, body])
    }
  }
</script>

<style scoped>
  .panel {
    margin-bottom: .5rem
  }

  .panel, .panel-header {
    border: 1px solid #d3d3d3;
    border-radius: 4px;
  }

  .panel-header, .panel-body, .panel {
    padding: .5rem;
  }

  .panel-header {
    background-color: #efefef;
    color: #eeeeee
  }
</style>
