<template>
  <label class="switch">
    <input type="checkbox" @change.stop="change" :checked="checked">
    <div class="slider round"></div>
  </label>
</template>

<script>
  export default {
    props: {
      checked: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {
        checkState: this.checked
      }
    },
    methods: {
      change () {
        this.checkState = !this.checkState
        this.$emit('change', this.checkState)
      }
    }
  }
</script>

<style scoped>
.switch {
  margin: 0 10px 0 10px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 70px;
  height: 40px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 8px;
  bottom: 7px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: rgb(0, 219, 139);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(0, 219, 139);
}

input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}

.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
