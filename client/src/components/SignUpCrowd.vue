<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col align="center" cols="12">
          <span class="text-center font-login  ">
            Help a Startup by lending your services or your abilities
          </span>
        </v-col>
      </v-row>
      <!-- icon -->
      <v-row justify="center">
        <v-col align="center" cols="12">
          <v-img src="../assets/SignIn.png" max-width="300"></v-img>
        </v-col>
      </v-row>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!-- Name -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Name"
                :rules="nameRules"
                class="mb-0 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="fas fa-user"
                required
                rounded
                v-model="name"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Email  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Official Email"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Phone  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Official Phone"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Location  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Location"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Location  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Short Description of your Talent"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Location  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Financing Details"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Password  -->
          <v-row class="mt--5" justify="center">
            <v-col cols="10">
              <v-text-field
                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                label="Password"
                :rules="notEmpty"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                class="mt-0 pb-0 mb-5"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="fas fa-lock"
                required
                rounded
                v-model="password"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <!-- submit Button  -->
        <v-row justify="center">
          <v-col align="center" cols="10">
            <v-hover v-slot:default="{ hover }">
              <!-- when the button gets hovered hover becomes true so we switch the class -->
              <v-btn
                :class="hover ? 'mt--10 glowing-border' : 'mt--10'"
                :disabled="!valid"
                :loading="loading"
                :ripple="{ class: 'teal--text' }"
                @click="validate"
                color="#D9B07B"
                height="225%"
                rounded
                width="100%"
              >
                <span class="font-login-white"> Submit </span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignUpForm",
  props: {
    isModal: {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      data: [],
      error: "",
      password: "",
      CIN: "",
      cinRules: [
        v => !!v || "رقم بطاقة التعريف مطلوب",
        v => (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "يجب أن يكون رقم",
        v => (v && v.length <= 8) || "يجب أن يتكون من 8 أرقام"
      ],
      name: "",
      nameRules: [
        v => !!v || "الاسم مطلوب",
        v => (v && v.length <= 35) || "يجب أن يكون أقل من 35 حرف"
      ],
      city: "",
      area: "",
      phone: "",
      phoneRules: [
        v => !!v || "رقم الهاتف مطلوب",
        v => (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "يجب أن يكون رقم",
        v => (v && v.length == 8) || "يجب أن يتكون من 8 أرقام"
      ],
      email: "",
      emailRules: [
        v => !!v || "البريد الالكتروني مطلوب",
        v => /.+@.+\..+/.test(v) || "يجب ان يكون البريد الاكتروني صحيح"
      ],
      valid: false,
      show1: false
    };
  },
  computed: {},
  methods: {
    ...mapActions(["pressLogin"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          console.log("apicall");
          this.loading = false;
          //this.$router.replace({ name: "SignIn" });
          this.$store.state.currentUser = { type: "crowdss", name: name };
        } catch (e) {
          this.loading = false;
          this.error = e.response.data.err;
        }
      }
    }
  }
};
</script>

<style scoped>
.form {
  /* This form has been down-scaled and the z-index is made 1
           with position relative so it doesn't collide with the nav bar */
  position: relative;
  z-index: 1 !important;
}

body * {
  font-family: Cairo;
}

.mt--5 {
  margin-top: -25px;
}

.mt--10 {
  margin-top: -50px !important;
}

.font-login {
  font-size: 2rem !important;
}

.font-login-popup2 {
  font-size: 1.4rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #616161;
}

.font-login-white {
  font-size: 1.5rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
}

.font-login-pass {
  font-size: 1rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #478d99;
}

>>> .glowing-border {
  box-shadow: 0px 0 10px 1px #d9b07b,
    /* inner white */ 0px 0 10px 1px #d9b07b /* middle magenta */ 0 0 10px 1px
      #d9b07b !important;
}
.side-image {
  height: 90vh;
  width: 70vw;
  padding-bottom: 120px !important;
}

.text-photo {
  font-size: 45px;
  color: white;
}
</style>
