<template>
	<div ref="editor"></div>
	<vue-ueditor
		config={config}
	>
	</vue-ueditor>
</template>

<script>
  import 'ueditor/ueditor.config.js'
  import 'ueditor/ueditor.all.js'
  import 'ueditor/lang/zh-cn/zh-cn.js'
  import 'ueditor/addInsertPanoDialog.js'
  import 'ueditor/addInsertPoiButton.js'
  import 'ueditor/plugins/autoupload.js'

	export default {
		name: 'vue-ueditor',
		props: ['config', 'getEditor', 'composition'],
		mounted: function () {
			this.$nextTick(function () {
       let id = new Date().getTime().toString()
       this.$refs.editor.id = id
       this.editor = UE.getEditor(id, this.config)
			 this.getEditor(this.editor)

       this.editor.ready(function () {
         this.editor.setContent(this.composition)

         this.editor.addListener('contentChange', function () {
           this.$emit('input', this.editor.getContent())
         }.bind(this))

         this.$emit('ready', this.editor)
       }.bind(this))
     })
		}
	}
</script>