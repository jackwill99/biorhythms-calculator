import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
} from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import BiorhythmChart from "./BiorhythmChart";
import "./biorhythm.css";

function Biorhythm({ birth, target, biovalue, dataSeries }) {
    return (
        <IonCard class="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>
                    {format(new Date(target), "MMMM yyyy")}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorhythmChart
                    birth={birth}
                    target={target}
                    data={dataSeries}
                />
                <p className="physical">
                    Physical :{" "}
                    {biovalue
                        ? biovalue.physical.toFixed(4)
                        : biovalue.toFixed(4)}
                    %{" "}
                </p>
                <p className="emotional">
                    Emotional :{" "}
                    {biovalue
                        ? biovalue.emotional.toFixed(4)
                        : biovalue.toFixed(4)}
                    %{" "}
                </p>
                <p className="intellectual">
                    Intellectual :{" "}
                    {biovalue
                        ? biovalue.intellectual.toFixed(4)
                        : biovalue.toFixed(4)}
                    %{" "}
                </p>
            </IonCardContent>
        </IonCard>
    );
}

export default Biorhythm;
