<template>
  <div class="components-container">
    

    <div class="editor-container">
      <el-tag class="tag-title">
        Markdown Mode:
      </el-tag>
      <markdown-editor ref="markdownEditor" v-model="content2" :options="{hideModeSwitch:true,previewStyle:'tab'}" height="200px" />
    </div>
    <div v-html="html" />
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'

const content = `
**This is test**

* vue
* element
* webpack

`
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList['en']
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    }
  }
}
</script>

<style scoped>
.editor-container{
  margin-bottom: 30px;
}
.tag-title{
  margin-bottom: 5px;
}
</style>
