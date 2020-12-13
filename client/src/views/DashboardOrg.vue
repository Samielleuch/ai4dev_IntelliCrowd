<template>
  <div class="background">
    <v-toolbar dark color="#012116" style="margin-bottom: 35px">
      <v-row justify="center" style="padding-top: 30px">
        <v-col cols="12" sm="2" style="padding-top: 30px"
          ><v-select
            v-model="sort"
            :items="['Ascending', 'Descending']"
            label="Sort"
          ></v-select
        ></v-col>
        <v-col sm="4">
          <v-text-field
            v-model="ricerca"
            @keyup="updateData()"
            label="Search"
            append-icon="fas fa-search"
            outlined
          ></v-text-field></v-col
      ></v-row>
    </v-toolbar>
    <v-row class="mx-12">
      <!-- SPARK LINE-->
      <v-col md="6" sm="11">
        <v-row>
          <v-col align="center" class="StatText"> Number Of Investors </v-col>
        </v-row>
        <v-sheet color="rgba(250, 250, 250, .12)">
          <v-sparkline
            :value="nbProjects"
            color="#E0B47F"
            height="167"
            width="300"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">
              {{ item.value }}
            </template>
          </v-sparkline>
        </v-sheet>
      </v-col>
      <!-- END SPARK LINE-->

      <!-- SPARK LINE-->
      <v-col md="6" sm="11">
        <v-row>
          <v-col align="center" class="StatText"> Money Gathered </v-col>
        </v-row>
        <v-sheet color="rgba(250, 250, 250, .12)">
          <v-sparkline
            :value="cumul"
            color="#E0B47F"
            height="167"
            width="300"
            padding="24"
            stroke-linecap="round"
            smooth
            fill
          >
            <template v-slot:label="item"> {{ item.value }} DT </template>
          </v-sparkline>
        </v-sheet>
      </v-col>
      <!-- END SPARK LINE-->
    </v-row>
    <!-- endRow1-->

    <v-row align="center">
      <!-- SPARK LINE-->
      <v-col md="12" sm="11" align="center">
        <v-row>
          <v-col align="center" class="StatText"> Notifications </v-col>
        </v-row>
        <v-simple-table dark color="#012116">
          <template v-slot:default>
            <thead color="#012116">
              <tr color="#012116">
                <th class="text-left">
                  Reason
                </th>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Urgency
                </th>
              </tr>
            </thead>
            <tbody color="#012116">
              <tr color="#012116" v-for="item in desserts" :key="item.name">
                <td color="#012116">{{ item.Urgency }}</td>
                <td>{{ item.Reason }}</td>

                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <!-- END SPARK LINE-->
    </v-row>

    <!-- End Row -->

    <br />
    <v-pagination length="6"></v-pagination>
    <br />
  </div>
</template>
<script>
export default {
  name: "Catalogue",
  components: {},
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      value: [423, 446, 675, 510, 590, 610, 760],
      nbProjects: [0, 50, 100, 60, 300, 610, 760],
      cumul: [0, 50, 100, 120, 130, 200, 240],
      desserts: [
        {
          Urgency: "Urgent!",
          date: "15/02/2020",
          Reason: "must upload update on your compaign page or else!"
        },
        {
          Urgency: "Warning",
          date: "16/02/2020",
          Reason: "Detecting suspicious Traffic"
        },
        {
          Urgency: "Warning",
          date: "16/02/2020",
          Reason: "Detecting suspicious Traffic"
        },
        {
          Urgency: "Warning",
          date: "16/02/2020",
          Reason: "Detecting suspicious Traffic"
        }
      ]
    };
  }
};
</script>

<style scoped>
.background {
  margin-top: -50px;
  padding-top: 65px;
  background-color: #012116;
  height: 110%;
}
.StatText {
  color: #e0b47f;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}
</style>
