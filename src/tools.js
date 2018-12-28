import store from './store'
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months'
import format from 'date-fns/format'
import idLocale from 'date-fns/locale/id'
import addMonths from 'date-fns/add_months'

export const isCan = (perm) => {
    // eslint-disable-next-line
    if (!perm)
        return true
    if (perm == '-')
        return false
    if (perm === true || perm == false)
        return true

    let user = store.getters['user/user']
    if (!user || !user.permission)
        return false
    // check multiple perm via |
    let _m = perm.split('|')
    let _r = false
    _m.forEach(p => {
        let [res, act] = p.split('.')
        _r = _r || (res == '*') || (user.permission[res] && (!act || user.permission[res][act]))
    })

    return _r
}

export const normParam = (param) => {
    // eslint-disable-next-line

    let par = param ? Object.keys(param).filter(key => param[key] !== '' && param[key] !== null && param[key] !== undefined).map(key => key + '=' + param[key]).join('&') : '';
    // console.log(par)
    return par ? `?${par}` : ''
}

export const monthBetween = (start, end) => {
    const s = new Date(start)
    const e = new Date(end)
    return differenceInCalendarMonths(e, s)+(e>=s ? 1 : 0)
}

export const toDT = (value) => {
    if (!value) return ''
    return format(value, 'dddd, DD-MM-YYYY HH:mm', { locale: idLocale })
}

export const toD = (value) => {
    if (!value) return ''
    return format(value, 'dddd, DD-MM-YYYY', { locale: idLocale })
}

export const toSD = (value) => {
    if (!value) return ''
    return format(value, 'DD-MM-YYYY', { locale: idLocale })
}

export const toYM = (value) => {
    if (!value) return ''
    return format(value, 'YYYY-MM', { locale: idLocale })
}

export const toMMY = (value) => {
    if (!value) return ''
    return format(value, 'MMMM YYYY', { locale: idLocale })
}

export const addM = addMonths

export const groupBy = (array, key) => {
    const result = {}
    array.forEach(item => {
      if (!result[item[key]]){
        result[item[key]] = []
      }
      result[item[key]].push(item)
    })
    return result
}