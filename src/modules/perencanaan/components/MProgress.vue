<template>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.deadline }}</td>
            <td class="text-xs-left"><v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear> </td>
            <td class="text-xs-right">
              <v-btn flat icon color="grey">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon color="grey">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>

</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Project",
          align: "left",
          value: "name"
        },
        { text: "Deadline", value: "deadline" },
        { text: "Progress", value: "progress" },
        { text: "Action", value: "action", align: "right" }
      ],
      projects :
            [
            {
                username: 'Dessie',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
                name: 'Kanal 1',
                deadline: '2 days later',
                progress: 90,
                color: 'pink',
            },
            {
                username: 'Jakayla',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',    
                name: 'Kanal 2',
                deadline: '1 weeks later',
                progress: 70,
                color: 'success'
            },
            {
                username: 'Ludwiczakpawel',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',    
                name: 'Kanal 3',
                deadline: '1 Month later',
                progress: 50,
                color: 'info'
            },
            {
                username: 'Damenleeturks',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg',    
                name: 'Kanal 4',
                deadline: '2 Month later',
                progress: 30,
                color: 'teal'
            },
            {
                username: 'Caspergrl',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',    
                name: 'Kanal 5',
                deadline: 'half year later',
                progress: 15,
                color: 'grey'
            },

            ]      
    };
  },
};
</script>
