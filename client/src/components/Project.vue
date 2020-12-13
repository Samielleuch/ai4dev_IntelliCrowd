<template>
  <div>
    <v-row>
      <v-col md="1"></v-col>
      <v-col>
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2" height="500" width="500"
            ><v-img
              src="../assets/image.jpg"
              height="500"
              width="500"
            ></v-img></v-card></v-hover
      ></v-col>
      <v-col
        ><v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            height="500"
            width="500"
            color="#012116"
            ><v-toolbar color="#977C1E" height="90px">
              <v-toolbar-title style="padding-right: 20px ; padding-left : 95px"
                >Funds :
              </v-toolbar-title>
              <h2>2000 / 10000 DT</h2>
            </v-toolbar>
            <br />
            <br />
            <v-toolbar color="#977C1E" height="90px">
              <v-toolbar-title style="padding-right: 20px ; padding-left : 95px"
                >Number of backers :
              </v-toolbar-title>
              <h2>50</h2>
            </v-toolbar>
            <br />
            <br />
            <v-toolbar color="#977C1E" height="90px">
              <v-toolbar-title style="padding-right: 20px ; padding-left : 95px"
                >Days to go :
              </v-toolbar-title>
              <h2>125</h2>
            </v-toolbar>
            <br />
            <br />
            <v-row
              ><v-col align="center">
                <v-btn
                  rounded
                  width="250px"
                  height="60px"
                  class="btn"
                  color="#977C1E"
                  @click="validate"
                >
                  Fund it !
                </v-btn>
              </v-col>
            </v-row></v-card
          ></v-hover
        ></v-col
      ></v-row
    >
    <br />
    <v-row>
      <v-col md="1"></v-col
      ><v-col
        ><v-hover v-slot:default="{ hover }">
          <v-card
            style=" background-color: #977C1E"
            :elevation="hover ? 16 : 2"
            height="200"
            width="1130"
            color="#012116"
            ><h2 style="padding-top: 30px ; padding-left: 30px">
              We are developing a website that helps hotels reach more clients
              through virtual visits.It will revolutionize the tourism approach
              in Tunisia.It must be done by the end of august ...
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
        </v-hover></v-col
      ></v-row
    >
    <br />
    <br />
    <br />
    <v-row>
      <v-col md="1"></v-col
      ><v-col
        ><v-hover v-slot:default="{ hover }">
          <v-card
            style=" background-color: #012116"
            :elevation="hover ? 16 : 2"
            height="500"
            width="1130"
            color="#012116"
          >
            <v-tabs
              height="70px"
              v-model="tab"
              background-color="#977C1E"
              class="elevation-2"
              dark
              :centered="centered"
              :grow="grow"
              :vertical="vertical"
              :right="right"
              :prev-icon="
                prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined
              "
              :next-icon="
                nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined
              "
            >
              <v-tabs-slider color="#012116"></v-tabs-slider>
              <v-tab :key="4" :href="`#tab-${4}`" style="width: 200px">
                <i
                  class="fa fa-heart"
                  aria-hidden="true"
                  style="width: 200px"
                ></i>
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
                  style=" background-color: #012116; padding-top: 30px;padding-left: 190px"
                >
                  <v-toolbar color="#977C1E" height="90px" width="700px">
                    <v-toolbar-title style="padding-right: 20px  "
                      >" I believe that this project has a great future that's
                      why i invested in it "
                    </v-toolbar-title>
                  </v-toolbar>
                  <br />

                  <v-toolbar
                    color="#977C1E"
                    height="50px"
                    width="300px"
                    style="margin-left: 400px"
                  >
                    <v-toolbar-title style="padding-right: 20px   "
                      ><i
                        class="fa fa-comment"
                        aria-hidden="true"
                        style="padding-right: 10px"
                      ></i
                      >Reply on this comment ...
                    </v-toolbar-title>
                  </v-toolbar>
                  <br />
                  <v-toolbar color="#977C1E" height="90px" width="700px">
                    <v-toolbar-title style="padding-right: 20px  "
                      ><i
                        class="fa fa-comment"
                        aria-hidden="true"
                        style="padding-right: 10px"
                      ></i
                      >Add feedback ...
                    </v-toolbar-title>
                  </v-toolbar>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="4" :value="'tab-' + 4">
                <v-card
                  height="430px"
                  style=" background-color: #012116; padding-top: 30px;padding-left: 190px"
                  ><v-row style="padding-top: 50px"
                    ><v-col>
                      <v-toolbar color="#977C1E" height="90px" width="170px">
                        <v-toolbar-title style="padding-right: 20px  "
                          ><i class="fa fa-eye" aria-hidden="true"></i>120 views
                        </v-toolbar-title>
                      </v-toolbar></v-col
                    >
                    <v-col>
                      <v-toolbar color="#977C1E" height="90px" width="170px">
                        <v-toolbar-title style="padding-right: 20px  "
                          ><i
                            class="fa fa-comment"
                            aria-hidden="true"
                            style="padding-right: 10px"
                          ></i
                          >50 likes
                        </v-toolbar-title>
                      </v-toolbar></v-col
                    ></v-row
                  >
                </v-card>
              </v-tab-item>
              <v-tab-item :key="2" :value="'tab-' + 2">
                <v-card
                  height="400px"
                  style=" background-color: #012116; padding-top: 30px;padding-left: 190px"
                >
                  <v-toolbar color="#977C1E" height="90px" width="700px">
                    <v-toolbar-title style="padding-right: 20px  "
                      >" What's the purpose of this project ? "
                    </v-toolbar-title>
                  </v-toolbar>
                  <br />

                  <v-toolbar
                    color="#977C1E"
                    height="50px"
                    width="300px"
                    style="margin-left: 400px"
                  >
                    <v-toolbar-title style="padding-right: 20px   "
                      ><i
                        class="fa fa-comment"
                        aria-hidden="true"
                        style="padding-right: 10px"
                      ></i
                      >Reply to this question ...
                    </v-toolbar-title>
                  </v-toolbar>
                  <br />
                  <v-toolbar color="#977C1E" height="90px" width="700px">
                    <v-toolbar-title style="padding-right: 20px  "
                      ><i
                        class="fa fa-comment"
                        aria-hidden="true"
                        style="padding-right: 10px"
                      ></i
                      >Add a question ...
                    </v-toolbar-title>
                  </v-toolbar>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="3" :value="'tab-' + 3">
                <v-card
                  height="400px"
                  style=" background-color: #012116; padding-top: 30px;padding-left: 190px"
                >
                </v-card>
              </v-tab-item>
            </v-tabs> </v-card></v-hover></v-col
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

<style scoped></style>
