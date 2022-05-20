import { differenceInDays, format } from "date-fns";

function calculation(birthday, targetday, cycle) {
    const birth = birthday;
    const target = targetday;
    const diff = differenceInDays(target, birth);
    return Math.sin((2 * Math.PI * diff) / cycle);
}

export default function biorhythmCal(birth, target) {
    return {
        date: target,
        physical: calculation(new Date(birth), new Date(target), 23),
        emotional: calculation(new Date(birth), new Date(target), 28),
        intellectual: calculation(new Date(birth), new Date(target), 33),
    };
}

export function calculateBiorhythmSeries(birthDate, targetDate) {
    targetDate = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth() + 1,
        0
    );
    const target = targetDate.getDate();
    console.log(targetDate);
    const dataList = [];
    for (let i = 0; i < target; i++) {
        const data = biorhythmCal(
            birthDate,
            new Date(format(targetDate, `yyyy MMMM ${i + 1}`))
        );
        dataList.push(data);
    }
    console.log(dataList);
    return dataList;
}
