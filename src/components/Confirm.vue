<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel()">
    <v-toolbar dark :color="options.color" dense>
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card tile>
      <v-card-text>
        <span v-if="message" v-html="message"></span>
        <v-textarea v-if="options.keterangan"
            class="mt-2"
            :label="options.keterangan.label || 'Keterangan'"
            :rows="4"
            box
            v-model="keterangan"
            :hint="options.keterangan.hint"
            persistent-hint
        ></v-textarea>        
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="cancel">Tidak</v-btn>
        <v-btn flat :color="options.color+' darken-1'" @click.native="agree">Ya</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      keterangan : null,
      options: {}
    };
  },
  methods: {
    open(message, options={}, title) {
      this.keterangan = null
      this.title = title || 'Konfirmasi';
      this.message = message
      let def = {
        color: "primary",
        width: 600,
      }
      this.options = {...def, ...options}
      // apply keterangan jika ada
      if (this.options.keterangan)
        this.keterangan = this.options.keterangan.data || ''

      this.dialog = true
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(this.keterangan);
      this.dialog = false;
    },
    cancel() {
      if (!this.dialog) return
      this.reject(false);
      this.dialog = false;
    }
  }
};
</script>