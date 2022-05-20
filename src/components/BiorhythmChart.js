import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceDot,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import { calculateBiorhythmSeries } from "../calculation";
import "./biorhythm.css";

function BiorhythmChart({ birth, target, data }) {
    const [targetData, setTargetData] = useState(0);
    useEffect(() => {
        let info = data.filter(
            (item) =>
                new Date(item.date).getTime() === new Date(target).getTime()
        );
        setTargetData({
            ...info[0],
            date: format(info[0].date, "dd"),
        });

        console.log("changes");
    }, [data]);
    const dataSeries = data.map((item) => {
        return { ...item, date: format(item.date, "dd") };
    });
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataSeries}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" interval={2} />

                <ReferenceDot
                    y={targetData.physical}
                    x={targetData.date}
                    r={3}
                    fill="green"
                    stroke="none"
                />

                <ReferenceDot
                    y={targetData.emotional}
                    x={targetData.date}
                    r={3}
                    fill="red"
                    stroke="none"
                />

                <ReferenceDot
                    y={targetData.intellectual}
                    x={targetData.date}
                    r={3}
                    fill="blue"
                    stroke="none"
                />

                <Legend verticalAlign="bottom" />
                <Line
                    name="physical"
                    dot={false}
                    type="natural"
                    dataKey="physical"
                    stroke="green"
                />
                <Line
                    name="emotional"
                    dot={false}
                    type="natural"
                    dataKey="emotional"
                    stroke="red"
                />
                <Line
                    name="intellectual"
                    dot={false}
                    type="natural"
                    dataKey="intellectual"
                    stroke="blue"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmChart;
