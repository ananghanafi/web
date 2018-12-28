import Vue from 'vue'
import {isCan} from './tools'

Vue.mixin({
    methods:{
        isCan(perm){
            return isCan(perm)
        },
        pVal(obj, a,b=undefined,c=undefined){
            let r = '-'
            if (!obj) return r
            if (!obj[a]) return '-'
            r = obj[a]
            if (typeof(b)=='undefined') return r
            if (!r[b]) return '-'
            r = r[b]
            if (typeof(c)=='undefined') return r
            if (!r[c]) return '-'
            r = r[c]
            return r
        },

    }
})