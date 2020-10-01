<template>
  <section id="skills">
    <div class="container">
      <div class="skills">
        <h2 class="section-title">
          Technical Skills
          <hr />
        </h2>
        <div class="skills-icons">
          <div class="icon-set">
            <i id="html5icon" class="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div class="icon-set">
            <i id="css3icon" class="fab fa-css3-alt"></i>
            <p>CSS3</p>
          </div>
          <div class="icon-set">
            <i id="jsicon" class="fab fa-js"></i>
            <p>Javascript</p>
          </div>
          <div class="icon-set">
            <i id="sassicon" class="fab fa-sass"></i>
            <p>Sass</p>
          </div>
          <div class="icon-set">
            <i id="bootstrapicon" class="fab fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div class="icon-set">
            <i id="vueicon" class="fab fa-vuejs"></i>
            <p>Vue.Js</p>
          </div>
          <div class="icon-set">
            <i id="phpicon" class="fab fa-php"></i>
            <p>PHP</p>
          </div>
          <div class="icon-set">
            <i id="databaseicon" class="fas fa-database"></i>
            <p>MySQL</p>
          </div>
          <div class="icon-set">
            <i id="laravelicon" class="fab fa-laravel"></i>
            <p>Laravel</p>
          </div>
          <div class="icon-set">
            <i id="wordpressicon" class="fab fa-wordpress"></i>
            <p>Wordpress</p>
          </div>
          <div class="icon-set">
            <i id="githubicon" class="fab fa-github"></i>
            <p>Git & Github</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  .skills-icons {
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 768px) {
      .skills-icons {
        justify-content: center;
      }
    }

    .icon-set {
      width: 182px;
      margin: 20px;
      box-shadow: 1px 2px 10px #000000;
      transition: ease-in-out 0.1s transform;
      border-radius: 5px;
      i {
        display: block;
        padding: 40px 0;
        background-color: #515151;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 70px;
        transition: 0.1s color ease-in-out;
      }
      p {
        background-color: #3b3b3b;
        padding: 5px 0;
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .icon-set:hover {
      transform: scale(1.05);

      #html5icon {
        color: #f55932;
      }

      #css3icon {
        color: #5173f8;
      }

      #jsicon {
        color: #f8e01d;
      }

      #sassicon {
        color: #f864b1;
      }

      #bootstrapicon {
        color: #9d52ff;
      }

      #vueicon {
        color: #41b883;
      }

      #phpicon {
        color: #99a5dd;
      }

      #databaseicon {
        color: #007afe;
      }

      #laravelicon {
        color: #ff5f4a;
      }

      #wordpressicon {
        color: #66bee7;
      }
    }
  }
}
</style>