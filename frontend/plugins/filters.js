import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('en')

Vue.filter('date', function (value, format = 'MM/DD/YYYY hh:mma') {
    if (value) {
        return moment(String(value)).format(format)
    }
})

Vue.filter('money', function (value, fallback = '--') {
    if (value) {
        return (
            '$' +
            parseFloat(value)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        )
    }

    return fallback
})

Vue.filter('empty', function (value, fallback = '--empty--') {
    if (!value) {
        return fallback
    }

    return value
})

Vue.filter('boolean', function (value, yes = 'Yes', no = 'No') {
    return value ? yes : no
})

Vue.filter('ago', function (value) {
    return value ? moment(value).fromNow() : '--'
})
