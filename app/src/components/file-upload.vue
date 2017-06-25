<template>
  <div class="file-upload">
    <input type="file" :accept="accepts" @change="upload"/>
  </div>
</template>
<style lang="scss" scoped>
.file-upload {
  height: 40px;
  width: 40px;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0;
  background: {
    image: url('../assets/images/add.png');
    repeat:  no-repeat;
    position:  center;
    size: 100% 100%;
  }
  input[type="file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: alpha(opacity=0);
  }
}
</style>
<script>
export default {
  name: 'MoUpload',
  props: {
    accepts: {
      type: String,
      default: 'image/jpeg,image/jpg,image/png,image/gif'
    },
    flag: [String, Number],
    maxSize: {
      type: Number,
      default: 0
    }
  },
  methods: {
    upload (event) {
      let file = event.target.files[0]
      let fileName = file.name
      let self = this
      const flag = this.flag
      if (file) {
        let authMsg = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
        let formData = new FormData()
        formData.append('file', file)
        this.$http.get(`http://localhost:3001/api/auth/uptoken/?fileName=${fileName}`, authMsg).then(res => {
          let data = res.body
          formData.append('token', data.uptoken)
          formData.append('key', data.key)
          this.$http.post('http://up-z2.qiniu.com/', formData, {
            progress (event) {
              self.$emit('progress', parseFloat(event.loaded / event.total * 100), flag)
            }
          }).then(res => {
            data = res.body
            if (data.hash && data.key) {
              this.$emit('complete', 200, data, flag)
              event.target.value = null
            } else {
              this.$emit('complete', 500, data, flag)
            }
          }, error => self.$emit('complete', 500, error.message), flag)
        })
      }
    }
  }
}
</script>
