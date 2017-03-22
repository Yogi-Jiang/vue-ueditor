"use strict"

import ueditor from './ueditor.js'

let config = {
    mixins: [ ueditor ],
    template: "<div ref='editor'></div>",
		props: ['config', 'getUE', 'composition'],
		mounted: function () {
      this.initEditor()
		}
	}
