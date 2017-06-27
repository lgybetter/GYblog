<template>
  <div class="star-card-container">
    <div class="circle"></div>
    <div class="star-card">
      <header>
        <h2>{{information.postId.title}}</h2>
        <h3>{{information.createBy.name}}</h3>
        <h3>{{information.date}}</h3>
        <div class="article-label">Java</div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      default () {
        return {
          createBy: {
            name: ''
          },
          date: '',
          postId: {
            title: ''
          }
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.star-card-container {
  display: flex;
  align-items: center;
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 5px solid white;
  background: rgb(0, 219, 139);
  cursor: pointer;
  margin: 25px;
  &:hover {
    background: #3fff7a;
    transform: scale(1.2);
  }
}


.star-card {
  width: 680px;
  height: 80px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px 25px;
  margin: 20px;
  overflow: hidden;
  background-color: #3fff7a;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 219, 139);
    transform: scale(1.1);
  }
  header {
    display: flex;
    align-items: center;
    h1, h2, h3 {
      margin: 0 5px;
    }
    h2 {
      color: white;
      font: {
        size: 24px;
      }
    }
    h3 {
      font: {
        size: 16px;
      }
    }
    .article-label {
      padding: 3px;
      margin: 5px;
      border-radius: 4px;
      background: green;
      color: white;
      font: {
        size: 15px;
      }
    }
  }
}

</style>

