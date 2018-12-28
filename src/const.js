export const API = process.env.VUE_APP_API

export const THEME_DEF = {
    primary: "#26A69A",
    secondary: "#B2DFDB",
    accent: "#FFC107",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
}
export const THEME_PRIMS =
{
    primary: "#106550",
    secondary: "#A5D6A7",
    accent: "#FBC02D",
    error: "#f44336",
    warning: "#FFCA28",
    info: "#2196f3",
    success: "#4caf50"
}

export const STATUS_REJECT = 9
export const STATUS_APPROVE = 2
export const STATUS_INIT    = 1

export const STATUS_REJECT_STR = 'Ditolak'
export const STATUS_APPROVE_STR = 'Disetujui'
export const STATUS_INIT_STR = ''

export const STATUS_IMPL_INIT = 1
export const STATUS_IMPL_OPENED = 2
export const STATUS_IMPL_ONPROGRESS = 3
export const STATUS_IMPL_CLOSED = 4
export const STATUS_IMPL_PENDING = 9

export const STATUS_IMPL_INIT_STR = 'Draft'
export const STATUS_IMPL_OPENED_STR = 'Opened'
export const STATUS_IMPL_ONPROGRESS_STR = 'Dilaksanakan'
export const STATUS_IMPL_CLOSED_STR = 'Selesai'
export const STATUS_IMPL_PENDING_STR = 'Ditunda'

export const TITLE = process.env.VUE_APP_TITLE

export const MAP_SERVER = process.env.VUE_APP_MAP_SERVER