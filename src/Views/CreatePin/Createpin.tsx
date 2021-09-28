import React, { Component } from 'react';
import {
    IonPage,
    IonContent,
    IonButton,
    IonCol,
    IonRow,
    IonInput,
    IonText,
} from '@ionic/react';
import './Createpin.css';
const initialState = {
    pin: '',
    confirmPin: '',
    error: null,
    // showForgotPasswordAlert: false
};

class CreatePin extends Component {
    state: any = {};
    props: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...initialState };
    }
    onSubmit = (event: any) => {
        
    };
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { pin, confirmPin, error } = this.state;
        const isInvalid = pin !== confirmPin || pin === '' || confirmPin === '';
        return (
            <IonPage>
                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle></IonTitle>
                    </IonToolbar>
                </IonHeader> */}

                <IonContent>
                    <IonRow class="row">
                        <div>
                            <IonText><h2 className="text-center">Create Pin</h2></IonText>
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                name="pin"
                                value={pin}
                                onIonChange={this.onChange}
                                clearInput
                                type="number"
                                placeholder="Enter Pin"
                                class="input"
                                padding-horizontal
                                // maxlength={6}
                                // minlength={6}
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                clearInput
                                name="confirmPin"
                                value={confirmPin}
                                onIonChange={this.onChange}
                                type="number"
                                placeholder="Confirm Pin"
                                class="input"
                                padding-horizontal
                                clear-input="true"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton disabled={isInvalid} onClick={this.onSubmit} type="submit" expand="block" color="undefined" class="btn-transition"><strong className="white">Create</strong></IonButton>
                        </IonCol>
                    </IonRow>
                    {error && <p>{error.message}</p>}
                </IonContent >
            </IonPage >
        );
    }
}





export default CreatePin;