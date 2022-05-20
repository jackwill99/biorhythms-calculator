import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonLabel,
    IonItem,
    IonDatetime,
    IonButton,
    IonIcon,
    IonItemDivider,
} from "@ionic/react";
import React, { useState } from "react";
import { format } from "date-fns";
import Biorhythm from "./components/Biorhythm";
import { calculatorOutline } from "ionicons/icons";
import biorhythmCal, { calculateBiorhythmSeries } from "./calculation";
import useLocalstorage from "./hook";

function App() {
    const [name, setName] = useState("");
    const [date, setDate] = useLocalstorage("userData");
    const [target, setTarget] = useState(format(new Date(), "yyyy MMMM dd"));
    // console.log(calculation(new Date("1995 01 01"), new Date("2020 02 18")));
    const [biovalue, setBiovalue] = useState(0);
    const [dataSeries, setDataSeries] = useState([]);
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Biorhythms</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem class="ion-no-padding">
                    <IonLabel position="stacked">Name: </IonLabel>
                    <IonInput
                        type="text"
                        value={name}
                        onIonChange={(e) => setName(e.detail.value)}
                    />
                </IonItem>
                <IonItem class="ion-no-padding">
                    <IonLabel>Date of Birth: </IonLabel>
                    <IonDatetime
                        displayFormat="YYYY-MMMM-DDDD"
                        value={date}
                        onIonChange={(e) => {
                            setDate(
                                new Date(
                                    format(
                                        new Date(e.detail.value),
                                        "dd-MMMM-yyyy"
                                    )
                                ).toISOString()
                            );
                        }}
                    />
                </IonItem>
                <IonItem class="ion-no-padding">
                    <IonLabel>Target Date: </IonLabel>
                    <IonDatetime
                        displayFormat="YYYY-MMMM-DDDD"
                        value={target}
                        onIonChange={(e) => {
                            setTarget(
                                new Date(
                                    format(
                                        new Date(e.detail.value),
                                        "dd-MMMM-yyyy"
                                    )
                                ).toISOString()
                            );
                        }}
                    />
                </IonItem>
                <IonButton
                    expand="block"
                    class="ion-margin-top"
                    onClick={() => {
                        setBiovalue(
                            biorhythmCal(new Date(date), new Date(target))
                        );
                        setDataSeries(
                            calculateBiorhythmSeries(
                                new Date(date),
                                new Date(target)
                            )
                        );
                    }}
                >
                    <IonIcon icon={calculatorOutline} slot="start" /> Calculate
                    Biorhythms
                </IonButton>
                {biovalue ? (
                    <>
                        <Biorhythm
                            birth={date}
                            target={target}
                            biovalue={biovalue}
                            dataSeries={dataSeries}
                        />
                    </>
                ) : null}
            </IonContent>
        </IonApp>
    );
}

export default App;
