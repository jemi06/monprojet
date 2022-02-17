<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!-- efface les textes -->
  </div>
  
   <div>
    <h2>Testing Bootstrap buttons</h2>
    <button class="btn btn-primary">Test</button>
    <button class="btn btn-info">Test</button>
    <button class="btn btn-danger">Test</button>
    <button class="btn btn-secondary">Test</button>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hi!</strong> I'm Sunil
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <img src="../assets/img/vuejs-vs-nodejs.jpg" alt="image">
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width: 500px;
  height: 250px;
}
</style>
