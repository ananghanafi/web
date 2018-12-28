import Vue from 'vue'
import format from 'date-fns/format'
import idLocale from 'date-fns/locale/id'

Vue.filter('toDT', (value) => {
    if (!value) return ''
    return format(value, 'dddd, DD-MM-YYYY HH:mm', { locale: idLocale })
});
Vue.filter('toD', (value) => {
    if (!value) return ''
    return format(value, 'dddd, DD-MM-YYYY', { locale: idLocale })
});
Vue.filter('toSD', (value) => {
    if (!value) return ''
    return format(value, 'DD-MM-YYYY', { locale: idLocale })
});

Vue.filter('toC', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('in-ID', {
        // style: 'currency',
        // currency: 'IDR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});
