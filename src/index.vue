<template>
	<div ref="editor"></div>
</template>

<script>
  import './ueditor/ueditor.config.js'
  import './ueditor/ueditor.all.js'
  import './ueditor/lang/zh-cn/zh-cn.js'
  import './ueditor/addInsertPanoDialog.js'
  import './ueditor/addInsertPoiButton.js'
  import './ueditor/plugins/autoupload.js'

	export default {
		name: 'vue-ueditor',
		props: ['config', 'getUE', 'composition'],
		mounted: function () {
      const self = this
			this.$nextTick(function () {
       let id = new Date().getTime().toString()
       self.$refs.editor.id = id
       const editor = UE.getEditor(id, self.config)
			 self.getUE(editor)

       editor.ready(function () {
         editor.setContent(self.composition)
         editor.addListener('contentChange', function () {
           self.$emit('input', editor.getContent())
         })

         self.$emit('ready', editor)
       })
     })
		}
	}
</script>