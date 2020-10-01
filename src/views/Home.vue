<template>
  <section id="hello">
    <div class="container">
      <div class="welcome row">
        <div class="hello col-md-6">
          <span>Hello, I am</span>
          <h2>Kareem Saber</h2>
          <p>And I'm a Full Stack Developer</p>
        </div>
        <div class="img-hello col-md-6">
          <img src="../assets/images/ab-img.png" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="scss">
.welcome {
  display: flex;
  flex-wrap: wrap;

  .hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
    flex-grow: 1;
    height: 400px;
    align-items: flex-start;
    margin-top: 25px;

    span {
      background-color: #757575;
      padding: 5px 20px;
      border-radius: 100px;
      font-size: 18px;
    }

    h2 {
      font-size: 60px;
    }
    p {
      font-size: 28px;
    }
  }

  .img-hello {
    flex-grow: 1;
    padding: 20px 0;
    max-width: 600px;
    margin-top: 30px;

    img {
      width: 100%;
    }
  }
}
</style>
