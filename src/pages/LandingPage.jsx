
import HeroSection from "../components/homepage/HeroSection";
import JobCategories from "../components/homepage/JobCategories";
import FeaturedCompanies from "../components/homepage/FeaturedCompanies";
import SuccessStories from "../components/homepage/SuccessStories";

import JobSearch from "../components/JobSearch/JobSearch";
import JobFilters from "../components/JobSearch/JobFilters";
import JobResults from "../components/JobSearch/JobResults";
import GeoSearch from "../components/JobSearch/GeoSearch";

import GuidedTour from "../components/Onboarding/GuidedTour";
import GettingStarted from "../components/Onboarding/GettingStarted";
import CompanyProfile from "../components/Company/CompanyProfile";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <JobCategories />
      <FeaturedCompanies />
      <SuccessStories />

      <div className="flex  gap-6 p-6">
        <JobFilters />
        <JobSearch />
       
      </div>
       <JobResults />
      <GeoSearch />

   
      <CompanyProfile/>

 


        <div className="grid gap-8 md:grid-cols-2">
      <GuidedTour />
      <GettingStarted />
       
      </div>
    </div>
  );
}
