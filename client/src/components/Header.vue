<template>
  <!-- the z-index of the nav bar is set to 10 so that it doesn't 
      collide with the form in the sign up page ( this form has been adjusted with transform) -->
  <div
    style="padding-bottom: 50px;height: 40px; margin-bottom: 10px; z-index:10;"
  >
    <v-app-bar
      color="white"
      style="position: fixed ;   border-bottom-left-radius: 41px ; border-bottom-right-radius: 41px ;
      height: 55px;"
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none "
      ></v-app-bar-nav-icon>
      <v-spacer class="d-flex "></v-spacer>
      <v-toolbar-title class="d-none d-md-flex">
        <!--  User Dashboard --->
        <v-hover
          v-if="
            this.$store.state.currentUser !== undefined &&
              this.$store.state.currentUser.type !== 'crowdss'
          "
          v-slot:default="{ hover }"
        >
          <span
            :class="
              hover
                ? 'Navbar animation cool-link mr-0 '
                : 'Navbar  cool-link mr-0 '
            "
            @click="$router.push({ name: kekw })"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#D9B07B ' : 'black'">{{
              userDashboardButton.icon
            }}</v-icon>
            <span class="mr-6">{{ kekw }} </span>
          </span>
        </v-hover>
        <!-- -->

        <!-- Menu Items -->
        <v-hover
          :key="index"
          v-for="(item, index) in HeaderMenu"
          v-slot:default="{ hover }"
        >
          <router-link
            :class="
              activeClass(
                hover,
                item.link,
                item.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            :to="{ name: item.link }"
            depressed
            elevation="0"
            v-ripple="false"
          >
            <v-icon
              :color="
                activeClass(hover, item.link, item.name, '#D9B07B  ', 'black')
              "
              >{{ item.icon }}
            </v-icon>
            <span class="mr-2">
              {{ item.name }}
            </span>
          </router-link>
        </v-hover>
        <!-- -->
        <!--  Sign UP--->
        <v-hover
          v-if="this.$store.state.currentUser === undefined"
          v-slot:default="{ hover }"
        >
          <span
            :class="
              activeClass(
                hover,
                signupButton.link,
                signupButton.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            @click="checkSignUpPressed"
            depressed
            elevation="0"
            v-ripple="false"
          >
            <v-icon
              :color="
                activeClass(
                  hover,
                  signupButton.link,
                  signupButton.name,
                  '#D9B07B',
                  'black'
                )
              "
              >{{ signupButton.icon }}</v-icon
            >
            <span>{{ signupButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  ORG here --->
        <v-hover v-slot:default="{ hover }">
          <span
            :class="
              hover
                ? 'Navbar animation cool-link mr-0 '
                : 'Navbar  cool-link mr-0 '
            "
            @click="$router.push({ name: PostForm })"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#D9B07B ' : 'black'"
              >fas fa-paper-plane</v-icon
            >
            <span class="mr-6"> For Creators </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  Sign In --->
        <v-hover
          v-if="this.$store.state.currentUser === undefined"
          v-slot:default="{ hover }"
        >
          <span
            :class="
              activeClass(
                hover,
                loginButton.link,
                loginButton.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            @click="checkLoginPressed(loginButton.name)"
            depressed
            elevation="0"
            v-ripple="false"
          >
            <v-icon
              :color="
                activeClass(
                  hover,
                  loginButton.link,
                  loginButton.name,
                  '#D9B07B',
                  'black'
                )
              "
              >{{ loginButton.icon }}</v-icon
            >
            <span>{{ loginButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  Log Out Button  --->
        <v-hover
          v-if="this.$store.state.currentUser !== undefined"
          v-slot:default="{ hover }"
        >
          <span
            :class="
              hover ? 'Navbar animation cool-link ' : 'Navbar  cool-link '
            "
            @click="logOut"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#D9B07B ' : 'black'">{{
              logOutButton.icon
            }}</v-icon>
            <span>{{ logOutButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
      </v-toolbar-title>
      <v-spacer class="d-flex "></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      session: undefined,
      drawer: false,
      // Data to transport to Vuex
      HeaderMenu: [
        {
          name: "Home",
          icon: "fas fa-globe-americas",
          link: "Home"
        },
        {
          name: "Discover",
          icon: "fab fa-wpexplorer",
          link: "Catalogue"
        }
      ],
      loginButton: {
        name: "Log In",
        icon: "fas fa-door-open",
        link: "SignIn"
      },
      signupButton: {
        name: "For Backers",
        icon: "fas fa-coins",
        link: "SignUp"
      },
      logOutButton: {
        name: "LogOut",
        icon: "fas fa-door-closed"
      },
      userDashboardButton: {
        name: "DashBoard",
        icon: "fas fa-user-circle",
        link: this.firstName
      }
    };
  },
  computed: {
    cache: false,
    ...mapState(["isLoginPressed"]),
    kekw: function() {
      return this.$store.state.currentUser !== undefined
        ? this.$store.state.currentUser.type == "client"
          ? "DashboardClient"
          : this.$store.state.currentUser.type == "org"
          ? "DashboardOrg"
          : "DashboardAdmin"
        : "kekw";
    },
    amane5dm: function() {
      return this.$store.state.currentUser !== undefined
        ? this.$store.state.currentUser.type == "client"
          ? "DashboardClient"
          : this.$store.state.currentUser.type == "org"
          ? "DashboardOrg"
          : "DashboardAdmin"
        : "kekw";
    },

    PostForm: function() {
      return this.$store.state.currentUser == undefined
        ? "SignUpOrg"
        : "PostFormPage";
    }
  },
  methods: {
    ...mapActions(["pressLogin"]),
    infoRedirection() {
      if (
        this.$store.state.currentUser !== undefined &&
        !this.$store.state.currentUser.admin
      ) {
        return "FormPage";
      } else return "Home";
    },
    checkLoginPressed(name) {
      if (name === "Log In") {
        if (this.$route.name !== "SignIn")
          this.$router.push({ name: "SignIn" });
      }
    },
    checkSignUpPressed() {
      if (this.$route.name !== "SignUn") this.$router.push({ name: "SignUp" });
    },
    activeClass(hover, link, name, classwhenactive, otherclass) {
      if (link === this.$route.name) {
        if (
          name === "Home" ||
          name === "Colliveries" ||
          name === "About" ||
          name === "Log In" ||
          name === "Join Us"
        ) {
          return classwhenactive;
        } else {
          return otherclass;
        }
      } else {
        if (hover) {
          return classwhenactive;
        } else {
          return otherclass;
        }
      }
    },
    logOut() {
      this.storage.clear();
      this.$store.state.currentUser = undefined;
      this.$router.replace({ name: "Home" });
      this.$router.go();
    }
  },
  mounted() {
    this.storage = window.localStorage;
    console.log(this.$store.state.currentUser);
  },
  created() {
    this.kekw =
      this.$store.state.currentUser !== undefined
        ? this.$store.state.currentUser.type == "client"
          ? "DashboardClient"
          : this.$store.state.currentUser.type == "org"
          ? "DashboardOrg"
          : "DashboardAdmin"
        : "kekw";
    console.log(this.$store.state.currentUser);
  }
};
</script>
<style scoped>
.Navbar {
  font-family: Quicksand;
  font-weight: bold;
  margin-right: 2vw;
  padding-bottom: 3px;
  font-size: 1.3vw !important;
  color: #d9b07b;
  background-color: rgba(255, 255, 255, 0) !important;
  text-decoration: none;
}

.cool-link {
  font-family: Quicksand !important;

  display: inline-block;
  color: #0d3232;
  text-decoration: none;
}

.cool-link::after {
  font-family: Quicksand !important;

  content: "";
  display: block;
  width: 0;
  height: 7px;
  background: #d9b07b;
  transition: width 0.3s;
}

.cool-link:hover::after {
  width: 100%;
  transition: width 0.3s;
}

.animation {
  width: 100%;
  color: #d9b07b;
}

.animation::after {
  content: "";
  font-family: Quicksand;

  display: block;
  width: 100%;
  height: 7px;
  background: #d9b07b;
  transition: width 0.3s;
}

.listItem {
  font-family: Quicksand !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 24px !important;
  line-height: 30px !important;
  background-color: rgba(255, 255, 255, 1) !important;
  font-size: 18px !important;
}

.login-btn {
  cursor: pointer;
}
</style>
