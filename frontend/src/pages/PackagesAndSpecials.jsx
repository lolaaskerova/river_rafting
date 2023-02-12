import React from "react";
import { Helmet } from "react-helmet";
import PackageHero from "../components/PackagesComponents/PackageHero/PackageHero";
import PackageInfo from "../components/PackagesComponents/PackageInfo/PackageInfo";
import PackagesPackage from "../components/PackagesComponents/PackagesPackageSection/PackagesPackage";
import PackagesRetreats from "../components/PackagesComponents/PackagesRetreats/PackagesRetreats";
import PackagesSpecials from "../components/PackagesComponents/PackagesSpecials/PackagesSpecials";

const PackagesAndSpecials = () => {
  return (
    <>
      <Helmet>
        <title>Packages & Specials - River Rafting</title>
      </Helmet>
      <PackageHero />
      <PackageInfo />
      <PackagesPackage />
      <PackagesSpecials />
      <PackagesRetreats />
    </>
  );
};

export default PackagesAndSpecials;
