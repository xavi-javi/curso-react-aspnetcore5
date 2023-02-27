export default function FormatDate(fecha: Date) {
    if (!fecha) {
        return '1900-01-01';
    }

    let year = '' + fecha.getFullYear();
    let month = '' + (fecha.getMonth() + 1);
    let day = '' + fecha.getDate();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}
