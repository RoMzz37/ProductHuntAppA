import React from "react";
import {IonPage, IonContent} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';
import ProductList from "../components/Product/ProductList"

const Trending = (props) => {
    return(
        <IonPage>
            <SmallHeader title="Trending" />
            <IonContent fullscreen>
                <LargeHeader title="Trending"/>
                <ProductList location={props.location} />
            </IonContent>
        </IonPage>
    );
};
 export default Trending;