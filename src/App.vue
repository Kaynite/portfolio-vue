<template>
  <div id="app">
    <nav>
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              >
                <path
                  d="M3836 4779 c-10 -6 -204 -156 -430 -332 -1428 -1114 -1470 -1146
							-1481 -1147 -8 -1 -52 269 -165 1015 -22 149 -45 293 -51 321 -13 69 -45 99
							-106 99 -38 0 -49 -5 -74 -33 -18 -20 -29 -43 -29 -61 0 -15 31 -230 69 -477
							130 -840 151 -979 151 -1006 0 -28 38 3 -625 -512 -154 -120 -290 -229 -302
							-244 -36 -46 -34 -102 6 -143 41 -41 77 -38 207 17 181 77 798 323 801 320 3
							-2 62 -379 163 -1040 41 -270 54 -317 89 -336 28 -14 77 -12 110 5 62 32 64 9
							-52 763 -58 377 -104 688 -103 690 2 1 100 38 217 81 678 249 1192 404 1526
							461 119 21 317 27 342 11 36 -23 -20 -241 -130 -501 -180 -428 -660 -1292
							-1190 -2141 -80 -127 -129 -216 -129 -232 0 -62 46 -107 111 -107 48 0 80 40
							250 315 685 1104 1145 1974 1274 2411 35 120 45 266 21 329 -67 174 -332 194
							-866 63 -298 -73 -824 -241 -1270 -406 -124 -46 -187 -65 -192 -58 -3 6 -9 43
							-12 81 l-6 70 50 38 c44 33 516 400 1630 1269 174 135 322 254 330 264 8 9 15
							37 15 60 0 34 -6 50 -26 70 -29 29 -93 41 -123 23z m-2066 -1928 c0 -36 -3
							-40 -42 -56 -110 -44 -169 -65 -163 -56 9 15 186 151 196 151 5 0 9 -18 9 -39z"
                />
              </g>
            </svg>
          </div>
          <ul class="nav-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
            <li><router-link to="/projects">Portfolio</router-link></li>
            <li><router-link to="/experience">Experience</router-link></li>
          </ul>
          <div class="social-icons">
            <li>
              <a href="https://www.facebook.com/akaKaynite"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://twitter.com/akaKaynite"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://github.com/Kaynite"
                ><i class="fab fa-github"></i
              ></a>
            </li>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
.dev-alert {
  background-color: #303030;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;

  span {
    color: #ff4e4e;
  }
}

.navbar {
  display: flex;
  align-items: center;
  padding-top: 15px;

  .logo {
    width: 70px;

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  .nav-menu {
    list-style: none;
    margin-left: 50px;

    li {
      margin: 0 10px;
      display: inline;
    }

    a {
      text-decoration: none;
      color: #f7f7f7;
      font-size: 20px;
    }
  }

  .social-icons {
    list-style: none;
    flex-grow: 1;
    display: flex;
    justify-content: right;

    li {
      display: inline;
      text-align: right;
    }

    a {
      color: #f7f7f7;
      text-decoration: none;
      font-size: 18px;
      padding: 0 5px;
      margin: 0 5px;
    }
  }
}
</style>
