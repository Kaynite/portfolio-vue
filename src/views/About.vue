<template>
  <section id="about">
    <div class="container">
      <h2 class="section-title row">
        A Little bit About Me
        <hr />
      </h2>
      <div class="about-content row">
        <div class="about-left col-md-6">
          <img src="../assets/images/programming1.png" alt="" />
        </div>
        <div class="about-right col-md-6">
          <p>Hello There, Welcome to My Website.</p>
          <p>
            My Name is Kareem Saber, 25 Years Old and I'm a Full-stack Web
            Developer from Egypt.
          </p>
          <p>
            I Have a Good Experience in Websites Design, Building and
            Customization.
          </p>
          <a href="#" class="btn btn-cv">Download CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-content {
  .about-left {
    img {
      width: 80%;
    }
  }

  .about-right {
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    font-size: 18px;

    .btn {
      text-decoration: none;
      background-color: #f7f7f7;
      color: #222222;
      padding: 5px 30px;
      border-radius: 100px;
      font-size: 20px;
    }

    .btn-cv {
      margin-top: 40px;
      transition: ease-in-out 0.1s transform;
    }

    .btn-cv:hover {
      transform: scale(1.05);
    }
  }
}
</style>
