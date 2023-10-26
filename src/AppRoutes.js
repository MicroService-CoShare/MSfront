import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import OffreForm from "./components/Offre_provider/ProviderForm";



const ProviderComponent = lazy(() => import("./components/Provider/"));
const StoreComponent = lazy(() => import("./components/Store/"));
const OfferComponent = lazy(() => import("./components/Offre/"));

const ReclamationComponent = lazy(() => import("./components/reclamation"));
const Productedita= lazy(() => import("./components/Productupdate/Productedit"));
const Home = lazy(() => import("./components/Home/"));
const NotFound = lazy(() => import("./components/NotFound"));
const OfferUpdate = lazy(() => import("./components/Offerupdate/offreform"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading content ...</div>}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<StoreComponent />} />
        <Route path="/offres" element={<OfferComponent />} />
        <Route path="/provider" element={<ProviderComponent />} />
        <Route path="/createoffer" element={<OffreForm />} />
        <Route path="/reclamation" element={<ReclamationComponent />} />

        <Route path="/user/:userId" element={<Productedita />} />
        <Route path="/offer/:offerId" element={<OfferUpdate />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
