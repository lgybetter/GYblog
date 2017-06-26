<template>
  <div>
    <div class="star-card">
      <header>
        <h2>Vue全家桶入门实践</h2>
        <h3>lgybetter</h3>
        <h3>2014-02-12</h3>
        <div class="article-label">Java</div>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
  background-color: rgb(0, 219, 139);
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

