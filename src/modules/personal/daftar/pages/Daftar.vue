<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                        DAFTAR
                        <v-spacer></v-spacer>
                        <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn>
                    </v-card-title>
                    <v-card-text class="py-0">
                        <v-container grid-list-md class="pa-0">
                            <v-layout row wrap>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Nama"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Email"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Jenis"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Jumlah Anggota"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Admin"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="calender"
                                        label="Tanggal"
                                        single-line
                                        hide-details>
                                            <v-date-picker
                                            mode='range'
                                            v-model='selectedDate'
                                            header-color="#fffff"
                                            show-caps>
                                            </v-date-picker>   
                                    </v-text-field>                                 
                                </v-flex>
                                 <v-flex md3 sm6>
                                <v-btn flat color="warning darken-2">
                                    
                                </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
