<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="7" class="pl-12" align="center" justify="center">
        <v-img src="../assets/image.jpg" contain max-width="900"></v-img
      ></v-col>
      <v-col cols="12" md="5">
        <v-row align="center">
          <v-col align="center">
            <v-card height="430" width="450" class=" rounded s">
              <v-row align="center">
                <v-col align="center">
                  <v-row class="mt-12">
                    <v-col align="center">
                      <h1 style="color: #806749" class="toptext ">
                        Funds :
                        <span style="color: black; margin-left:8px"
                          >2000/10000 DT</span
                        >
                      </h1>
                    </v-col>
                  </v-row>
                  <hr class="divider" />
                  <v-row>
                    <v-col align="center">
                      <h1 style="color: #806749" class="toptext ">
                        Number Of Backers :
                        <span style="color: black; margin-left:8px">50</span>
                      </h1>
                    </v-col>
                  </v-row>
                  <hr class="divider" />

                  <v-row>
                    <v-col align="center">
                      <h1 style="color: #806749" class="toptext ">
                        Days to Go :
                        <span style="color: black; margin-left:8px">125</span>
                      </h1>
                    </v-col>
                  </v-row>
                  <hr class="divider" />

                  <v-row
                    ><v-col align="center">
                      <v-btn
                        rounded
                        width="250px"
                        dark
                        height="40px"
                        class=" my-6 toptext"
                        color="#0a2116"
                        @click="validate"
                      >
                        Fund it !
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-12">
      <v-col align="center">
        <v-card style="border-radius:30px ;width:65%"
          ><h2
            style="padding-top: 30px ; padding-left: 30px; font-size:22px"
            class="toptext"
          >
            We are developing a website that helps hotels reach more clients
            through virtual visits.It will revolutionize the tourism approach in
            Tunisia.It must be done by the end of august ...
          </h2>
          <v-row style="padding-top: 10px "
            ><v-col align="center">
              <v-btn
                style="color: white"
                rounded
                width="180px"
                class="btn black"
              >
                Read More
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" class="mt-12 pt-12">
      ><v-col align="center">
        <v-tabs
          height="70px"
          v-model="tab"
          :centered="true"
          :grow="grow"
          :vertical="vertical"
          :right="right"
          :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
          :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab :key="4" :href="`#tab-${4}`" style="width: 200px">
            <i class="fa fa-heart" aria-hidden="true" style="width: 200px"></i>
          </v-tab>
          <v-tab :key="1" :href="`#tab-${1}`" style="width: 200px">
            <i
              class="fa fa-comment"
              aria-hidden="true"
              style="padding-right: 10px"
            ></i>
            Commentaires
          </v-tab>
          <v-tab :key="2" :href="`#tab-${2}`" style="width: 200px">
            <i
              class="fa fa-code"
              aria-hidden="true"
              style="padding-right: 10px"
            ></i>
            FAQ
          </v-tab>
          <v-tab :key="3" :href="`#tab-${3}`" style="width: 200px">
            <i
              class="fa fa-database"
              aria-hidden="true"
              style="padding-right: 10px"
            ></i>
            Statistics
          </v-tab>

          <v-tab-item :key="1" :value="'tab-' + 1">
            <v-card
              height="400px"
              style=" padding-top: 30px;padding-left: 190px"
            >
              <v-toolbar height="90px" width="700px">
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <v-divider></v-divider>

                <v-toolbar-title style="padding-right: 20px  "
                  >" I believe that this project has a great future that's why i
                  invested in it "
                </v-toolbar-title>
              </v-toolbar>
              <br />

              <v-row>
                <v-col>
                  <v-btn style="padding-right: 20px   ; background-color:gray; "
                    ><i
                      class="fa fa-comment"
                      aria-hidden="true"
                      style="padding-right: 10px"
                    ></i
                    >Reply on this comment ...
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn style="padding-right: 20px ; background-color:gray; "
                    ><i
                      class="fa fa-comment"
                      aria-hidden="true"
                      style="padding-right: 10px"
                    ></i
                    >Add feedback ...
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item :key="4" :value="'tab-' + 4">
            <v-card height="430px"
              ><v-row style="padding-top: 50px"
                ><v-col>
                  <v-card>
                    <v-toolbar-title
                      style="padding-right: 20px  "
                      class="toptext"
                      ><i class="fa fa-eye" aria-hidden="true"></i>120 views
                    </v-toolbar-title>
                  </v-card></v-col
                >
                <v-col>
                  <v-card>
                    <v-toolbar-title
                      style="padding-right: 20px  "
                      class="toptext"
                      ><i
                        class="fa fa-comment"
                        aria-hidden="true"
                        style="padding-right: 10px"
                      ></i
                      >50 likes
                    </v-toolbar-title>
                  </v-card></v-col
                ></v-row
              >
            </v-card>
          </v-tab-item>
          <v-tab-item :key="2" :value="'tab-' + 2">
            <v-card height="400px">
              <v-row align="center" justify="center">
                <v-col align="center" justify="center" cols="4">
                  <v-card cla>
                    <v-toolbar-title
                      style="padding-right: 20px  "
                      class="toptext"
                      >" What's the purpose of this project ? "
                    </v-toolbar-title>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn style="padding-right: 20px   ; background-color:gray; "
                    ><i
                      class="fa fa-comment"
                      aria-hidden="true"
                      style="padding-right: 10px"
                    ></i
                    >Reply ...
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn style="padding-right: 20px ; background-color:gray; "
                    ><i
                      class="fa fa-comment"
                      aria-hidden="true"
                      style="padding-right: 10px"
                    ></i
                    >Add a question ...
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item :key="3" :value="'tab-' + 3">
            <v-card
              height="400px"
              style=" background-color: #012116; padding-top: 30px;padding-left: 190px"
            >
            </v-card>
          </v-tab-item> </v-tabs></v-col
    ></v-row></div
></template>

<script>
export default {
  name: "Project",
  data() {
    return {
      tab: null,
      text: "",
      centered: false,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 4
    };
  }
};
</script>

<style scoped>
.rounded {
  border-radius: 15% !important;
}
.divider {
  width: 60%;
  border-top: 6px #0a2116 solid !important;
}
.toptext {
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
}
</style>
