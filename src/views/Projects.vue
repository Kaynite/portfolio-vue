<template>
  <section id="projects">
    <div class="container">
      <div class="projects">
        <h2 class="section-title">
          Projects
          <hr />
        </h2>
        <div class="projects-content">
          <div
            class="project-box "
            v-for="project in projects"
            :key="project.title"
            @click="project.isVisible = true"
          >
            <div class="overlay" @click="project.isVisible = true">
              <p @click="project.isVisible = true">{{ project.title }}</p>
            </div>
            <img :src="project.cover" alt="" />
            <!-- <img src="../assets/images/Timezone.jpg" alt="" /> -->
            <div class="project-details" :class="{ show: project.isVisible }">
              <i
                class="close-btn fas fa-times"
                @click.stop="project.isVisible = false"
              ></i>
              <div class="project-details-content row">
                <div class="project-info col-md-6">
                  <h2>{{ project.title }}</h2>
                  <div>
                    <h3>About The Project</h3>
                    <p style="margin-left: 20px">
                      {{ project.description }}
                    </p>
                  </div>

                  <div>
                    <h3>Skills</h3>
                    <ul style="margin-left: 20px;">
                      <li v-for="skill in project.skills" :key="skill">
                        {{ skill }}
                      </li>
                    </ul>
                  </div>

                  <div class="project-action">
                    <a class="btn" href="https://github.com/Kaynite/Timezone"
                      >Source Code</a
                    >
                  </div>
                </div>
                <div class="project-imgs col-md-6">
                  <img src="../assets/images/Timezone.jpg" alt="" />
                  <img src="../assets/images/Timezone2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      path: "../assets/images/",
      projects: [
        {
          title: "Timezone",
          description:
            "An e-commerce application with Admin Panel created using Laravel Framework.",
          skills: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Laravel"],
          cover: require("@/assets/images/Timezone.jpg"),
          hasSourceCode: true,
          sourceCode: "https://github.com/Kaynite/Timezone",
          hasPreview: false,
          preview: "",
          images: ["Timezone.jpg", "Timezone2.jpg"],
          isVisible: false
        },
        {
          title: "Larablog"
        }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
#projects {
  .projects-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    .projects-content {
      display: block;
    }
    .project-box {
      background-color: #515151;
      position: relative;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
      margin-bottom: 25px;
    }
  }

  .project-box {
    background-color: #515151;
    position: relative;
    height: 300px;
    overflow: hidden;
    border-radius: 15px;

    > img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      height: 100%;
    }

    .project-details {
      position: fixed;
      top: 20px;
      left: 0;
      right: 0;
      width: 90%;
      margin: 0 auto;
      height: 95vh;
      background-color: #424242;
      opacity: 0;
      visibility: hidden;
      transition: ease-in-out 0.3s all;
      z-index: 2;
      border-radius: 10px;
      padding: 50px 20px;
      text-align: left;
      overflow-y: scroll;

      .close-btn {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        padding: 20px;
        z-index: 3;
      }

      .project-details-content {
        .project-info {
          padding-right: 10px;

          > div {
            margin-bottom: 20px;
          }

          h2 {
            text-align: center;
            font-size: 45px;
          }

          h3 {
            font-size: 20px;
          }

          ul {
            margin-bottom: 10px;
            list-style-type: none;
            li {
              display: inline;
              border: 1px solid #f7f7f7;
              padding: 0px 10px;
              border-radius: 3px;
              margin-right: 10px;
            }
          }

          .btn {
            text-decoration: none;
            background-color: #f7f7f7;
            color: #222222;
            padding: 5px 30px;
            border-radius: 100px;
            display: inline-block;
            margin-top: 10px;
            margin-right: 20px;
          }

          .project-action {
            display: flex;
            justify-content: center;
            margin-top: 50px;
          }
        }

        .project-imgs {
          padding-left: 10px;
          img {
            width: 100%;
          }
        }
      }
    }

    .project-details.show {
      opacity: 1;
      display: block;
      visibility: visible;
    }
  }
  .overlay:hover {
    opacity: 0.7;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0;
    transition: 0.2s ease-in-out opacity;
    outline: 1px solid #f7f7f7;
    outline-offset: -15px;
    cursor: pointer;

    p {
      line-height: 300px;
      font-size: 24px;
      font-weight: bold;
      opacity: 1 !important;
    }
  }
}
</style>
