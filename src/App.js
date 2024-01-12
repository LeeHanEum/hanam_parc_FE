import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import Index from './pages/index';
import Navbar from './component/Navbar/navbar';
import VideoPortfolio from './pages/videoportfolio';
import ShopAccount from './pages/ecommerce/shopAccount';
import ShopCart from './pages/ecommerce/shopCart';
import ShopCheckOut from './pages/ecommerce/shopCheckout';
import ShopGrid from './pages/ecommerce/shopGrid';
import ShopGridTwo from './pages/ecommerce/shopGridTwo';
import ShopItemDetail from './pages/ecommerce/shopItemDetail';
import UserBilling from './pages/accounts/userBilling';
import UserInvoice from './pages/accounts/userInvoice';
import UserNotification from './pages/accounts/userNotification';
import UserPayment from './pages/accounts/userPayment';
import UserProfile from './pages/accounts/userProfile';
import UserSetting from './pages/accounts/userSetting';
import UserSocial from './pages/accounts/userSocial';
import ShopAbout from './pages/ecommerce/shopAbout';
import PortfolioDetailTwo from './pages/portfolio/portfolioDetailTwo';
import PortfolioDetailThree from './pages/portfolio/portfolioDetailThree';
import PortfolioDetailOne from './pages/portfolio/portfolioDetailOne';
import PortfolioDetailFour from './pages/portfolio/portfolioDetailFour';
import PortfolioCreativeTwo from './pages/portfolio/portfolioCreativeTwo';
import PortfolioCreativeThree from './pages/portfolio/portfolioCreativeThree';
import PortfolioCreativeSix from './pages/portfolio/portfolioCreativeSix';
import PortfolioCreativeFour from './pages/portfolio/portfolioCreativeFour';
import PortfolioCreativeFive from './pages/portfolio/portfolioCreativeFive';
import PortfolioClassicTwo from './pages/portfolio/portfolioClassicTwo';
import PortfolioClassicThree from './pages/portfolio/portfolioClassicThree';
import PhotographyPortfolio from './pages/photography/photographyPortfolio';
import PhotographyAbout from './pages/photography/photographyAbout';
import PageThankyou from './pages/special/pageThankyou';
import PageTestimonial from './pages/company/pageTestimonial';
import PageTerms from './pages/utility/pageTerms';
import PageTeam from './pages/company/pageTeam';
import PortfolioClassicSix from './pages/portfolio/portfolioClassicSix';
import PortfolioClassicFour from './pages/portfolio/portfolioClassicFour';
import PortfolioClassicFive from './pages/portfolio/PortfolioClassicFive';
import PageServices from './pages/company/pageServices';
import PagePrivacy from './pages/utility/pagePrivacy';
import PagePricing from './pages/company/pagePricing';
import PageMaintenance from './pages/special/pageMaintenance';
import PageJobPost from './pages/jobs/pageJobPost';
import PageJobGrid from './pages/jobs/pageJobGrid';
import PageJobDetail from './pages/jobs/pageJobDetail';
import PageJobCompanyDetail from './pages/jobs/pageJobCompanyDetail';
import PageJobCompanies from './pages/jobs/pageJobCompanies';
import PageJobCareer from './pages/jobs/pageJobCareer';
import PageJobCandidates from './pages/jobs/pageJobCandidates';
import PageJobCandidateDetail from './pages/jobs/pageJobCandidateDetail';
import PageJobApply from './pages/jobs/pageJobApply';
import PageError from './pages/special/pageError';
import PageComingsoon from './pages/special/pageComingsoon';
import PageAboutus from './pages/company/pageAboutus';
import IndexYoga from './pages/index/indexYoga';
import IndexVideo from './pages/index/indexVideo';
import IndexStudio from './pages/index/indexStudio';
import IndexStartup from './pages/index/indexStartup';
import IndexSpa from './pages/index/indexSpa';
import IndexSoftware from './pages/index/indexSoftware';
import IndexSmartwatch from './pages/index/indexSmartwatch';
import IndexShop from './pages/index/indexShop';
import IndexService from './pages/index/indexService';
import IndexSeo from './pages/index/indexSeo';
import IndexSaas from './pages/index/indexSaas';
import IndexRestaurent from './pages/index/indexRestaurent';
import IndexRealEstate from './pages/index/indexRealEstate';
import IndexPhotography from './pages/index/indexPhotography';
import IndexPhoneNumber from './pages/index/indexPhoneNumber';
import IndexPersonal from './pages/index/indexPersonal';
import IndexPayment from './pages/index/indexPayment';
import IndexNft from './pages/index/indexNft';
import IndexModernSaas from './pages/index/indexModernSaas';
import IndexLaw from './pages/index/indexLaw';
import IndexLandingTwo from './pages/index/indexLandingTwo';
import IndexLandingThree from './pages/index/indexLandingThree';
import IndexLandingOne from './pages/index/indexLandingOne';
import IndexLandingFour from './pages/index/indexLandingFour';
import IndexLandingFive from './pages/index/indexLandingFive';
import IndexItSolution from './pages/index/indexItSolution';
import IndexItSolutionTwo from './pages/index/indexItSolutionTwo';
import IndexInsurance from './pages/index/indexInsurance';
import IndexHotel from './pages/index/indexHotel';
import IndexHosting from './pages/index/indexHosting';
import IndexHospital from './pages/index/indexHospital';
import IndexGym from './pages/index/indexGym';
import IndexFurniture from './pages/index/indexFurniture';
import IndexForums from './pages/index/indexForums';
import IndexFoodBlog from './pages/index/indexFoodBlog';
import IndexEvent from './pages/index/indexEvent';
import IndexDigitalAgency from './pages/index/indexDigitalAgency';
import IndexCharity from './pages/index/indexCharity';
import IndexCoworking from './pages/index/indexCoworking';
import IndexCourse from './pages/index/indexCourse';
import IndexCorporate from './pages/index/indexCorporate';
import IndexCorporateTwo from './pages/index/indexCorporateTwo';
import IndexConsulting from './pages/index/indexConsulting';
import IndexConstruction from './pages/index/indexConstruction';
import IndexClassicSaas from './pages/index/indexClassicSaas';
import IndexClassicApp from './pages/index/indexClassicApp';
import IndexCafe from './pages/index/indexCafe';
import IndexBusiness from './pages/index/indexBusiness';
import IndexBlog from './pages/index/indexBlog';
import IndexApps from './pages/index/indexApps';
import Helpcenter from './pages/helpcenter/helpcenter';
import HelpcenterSupport from './pages/helpcenter/helpcenterSupport';
import HelpcenterFaqs from './pages/helpcenter/helpcenterFaqs';
import ForumsTopic from './pages/forums/forumsTopic';
import ForumsComments from './pages/forums/forumsComments';
import FoodRecipe from './pages/foodRecipe';
import EmailPasswordReset from './pages/email-template/emailPasswordReset';
import EmailInvoice from './pages/email-template/emailInvoice';
import EmailConfirmation from './pages/email-template/emailConfirmation';
import EmailAlert from './pages/email-template/emailAlert';
import Documentation from './pages/documentation';
import CourseDetail from './pages/courses/courseDetail';
import ContactTwo from './pages/contact/contactTwo';
import ContactOne from './pages/contact/contactOne';
import ContactDetail from './pages/contact/contactDetail';
import Changelog from './pages/changelog';
import Blog from './pages/blog/blog';
import BlogYoutubePost from './pages/blog/blogYoutubePost';
import BlogVimeoPost from './pages/blog/blogVimeoPost';
import BlogStandardPost from './pages/blog/blogStandardPost';
import BlogSliderPost from './pages/blog/blogSliderPost';
import BlogSidebar from './pages/blog/blogSidebar';
import BlogLeftSidebarPost from './pages/blog/blogLeftSidebarPost';
import BlogGalleryPost from './pages/blog/blogGalleryPost';
import BlogDetail from './pages/blog/blogDetail';
import BlogBlockquotePost from './pages/blog/blogBlockquotePost';
import BlogAudioPost from './pages/blog/blogAudioPost';
import AuthSignup from './pages/auth/authSignup';
import AuthSignupSuccess from './pages/auth/authSignupSuccess';
import AuthRePassword from './pages/auth/authRePassword';
import AuthLogin from './pages/auth/authLogin';
import AuthLockScreen from './pages/auth/authLockScreen';
import PropertyListing from './pages/real-estate/propertyListing';
import PropertyDetail from './pages/real-estate/propertyDetail';
import PortfolioModernTwo from './pages/portfolio/portfolioModernTwo';
import PortfolioModernThree from './pages/portfolio/portfolioModernThree';
import PortfolioModernSix from './pages/portfolio/portfolioModernSix';
import PortfolioModernFour from './pages/portfolio/portfolioModernFour';
import PortfolioModernFive from './pages/portfolio/portfolioModernFive';
import PortfolioMasonryTwo from './pages/portfolio/portfolioMasonryTwo';
import PortfolioMasonryThree from './pages/portfolio/portfolioMasonryThree';
import PortfolioMasonrySix from './pages/portfolio/portfolioMasonrySix';
import PortfolioMasonryFour from './pages/portfolio/portfolioMasonryFour';
import PortfolioMasonryFive from './pages/portfolio/portfolioMasonryFive';
import IndexCrypto from './pages/index/indexCrypto';
import IndexJob from './pages/index/indexJob';
import IndexPortfolio from './pages/index/indexPortfolio';
import HelpcenterGuides from './pages/helpcenter/helpcenterGuides';
import CourseListing from './pages/courses/courseListing';
import NftAuction from './pages/nft/nftAuction';
import NftCollection from './pages/nft/nftCollection';
import NftCreateItem from './pages/nft/nftCreateItem';
import NftCreatorProfile from './pages/nft/nftCreatorProfile';
import NftCreatorProfileEdit from './pages/nft/nftCreatorProfileEdit';
import IndexMarketing from './pages/index/indexMarketing';
import NftCreators from './pages/nft/nftCreators';
import NftDetail from './pages/nft/nftDetail';
import NftExplore from './pages/nft/nftExplore';
import NftWallet from './pages/nft/nftWallet';
import Switch from './component/Switch';
import IndexAi from './pages/index/index-ai';
import IndexTravel from './pages/index/indexTravel';
import IndexPodcast from './pages/index/indexPodcast';
import UiComponents from './pages/uiComponents';
import IndexChristmas from './pages/index/index-christmas';
import IndexClassicBusiness from './pages/index/index-classic-business';

export default function App() {
    return (
        <BrowserRouter>
        <Switch/>
            <Routes>
                <Route path="/" element={<Navigate to="/index" />} />
                <Route exact path="/index" element={<Index />} />
                <Route exact path="/user-social" element={<UserSocial />} />
                <Route exact path="/shop-account" element={<ShopAccount />} />
                <Route exact path="/shop-cart" element={<ShopCart />} />
                <Route exact path="/shop-checkOut" element={<ShopCheckOut />} />
                <Route exact path="/shop-grid" element={<ShopGrid />} />
                <Route exact path="/shop-grid-two" element={<ShopGridTwo />} />
                <Route exact path="/shop-item-detail" element={<ShopItemDetail />} />
                <Route exact path="/shop-item-detail/:id" element={<ShopItemDetail />} />
                <Route exact path="/user-billing" element={<UserBilling />} />
                <Route exact path="/user-invoice" element={<UserInvoice />} />
                <Route exact path="/user-notification" element={<UserNotification />} />
                <Route exact path="/user-payment" element={<UserPayment />} />
                <Route exact path="/user-profile" element={<UserProfile />} />
                <Route exact path="/user-setting" element={<UserSetting />} />
                <Route exact path="/navbar" element={<Navbar />} />
                <Route exact path="/shop-about" element={<ShopAbout />} />
                <Route exact path="/portfolio-detail-two" element={<PortfolioDetailTwo />} />
                <Route exact path="/portfolio-detail-three" element={<PortfolioDetailThree />} />
                <Route exact path="/portfolio-detail-one" element={<PortfolioDetailOne />} />
                <Route exact path="/portfolio-detail-four" element={<PortfolioDetailFour />} />
                <Route exact path="/portfolio-creative-two" element={<PortfolioCreativeTwo />} />
                <Route exact path="/portfolio-creative-three" element={<PortfolioCreativeThree />} />
                <Route exact path="/portfolio-creative-six" element={<PortfolioCreativeSix />} />
                <Route exact path="/portfolio-creative-four" element={<PortfolioCreativeFour />} />
                <Route exact path="/portfolio-creative-five" element={<PortfolioCreativeFive />} />
                <Route exact path="/portfolio-classic-two" element={<PortfolioClassicTwo />} />
                <Route exact path="/portfolio-classic-three" element={<PortfolioClassicThree />} />
                <Route exact path="/photography-portfolio" element={<PhotographyPortfolio />} />
                <Route exact path="/photography-about" element={<PhotographyAbout />} />
                <Route exact path="/page-thankyou" element={<PageThankyou />} />
                <Route exact path="/page-testimonial" element={<PageTestimonial />} />
                <Route exact path="/page-terms" element={<PageTerms />} />
                <Route exact path="/page-team" element={<PageTeam />} />
                <Route exact path="/portfolio-classic-six" element={<PortfolioClassicSix />} />
                <Route exact path="/portfolio-classic-four" element={<PortfolioClassicFour />} />
                <Route exact path="/portfolio-classic-five" element={<PortfolioClassicFive />} />
                <Route exact path="/page-services" element={<PageServices />} />
                <Route exact path="/page-privacy" element={<PagePrivacy />} />
                <Route exact path="/page-pricing" element={<PagePricing />} />
                <Route exact path="/page-maintenance" element={<PageMaintenance />} />
                <Route exact path="/page-job-post" element={<PageJobPost />} />
                <Route exact path="/page-job-grid" element={<PageJobGrid />} />
                <Route exact path="/page-job-detail" element={<PageJobDetail />} />
                <Route exact path="/page-job-detail/:id" element={<PageJobDetail />} />
                <Route exact path="/page-job-company-detail" element={<PageJobCompanyDetail />} />
                <Route exact path="/page-job-company-detail/:id" element={<PageJobCompanyDetail />} />
                <Route exact path="/page-job-companies" element={<PageJobCompanies />} />
                <Route exact path="/page-job-career" element={<PageJobCareer />} />
                <Route exact path="/page-job-candidates" element={<PageJobCandidates />} />
                <Route exact path="/page-job-candidate-detail" element={<PageJobCandidateDetail />} />
                <Route exact path="/page-job-candidate-detail/:id" element={<PageJobCandidateDetail />} />
                <Route exact path="/page-job-apply" element={<PageJobApply />} />
                <Route exact path="/page-error" element={<PageError />} />
                <Route exact path="/page-comingsoon" element={<PageComingsoon />} />
                <Route exact path="/page-aboutus" element={<PageAboutus />} />
                <Route exact path="/index-yoga" element={<IndexYoga />} />
                <Route exact path="/index-video" element={<IndexVideo />} />
                <Route exact path="/index-studio" element={<IndexStudio />} />
                <Route exact path="/index-startup" element={<IndexStartup />} />
                <Route exact path="/index-spa" element={<IndexSpa />} />
                <Route exact path="/index-software" element={<IndexSoftware />} />
                <Route exact path="/index-smartwatch" element={<IndexSmartwatch />} />
                <Route exact path="/index-shop" element={<IndexShop />} />
                <Route exact path="/index-service" element={<IndexService />} />
                <Route exact path="/index-seo" element={<IndexSeo />} />
                <Route exact path="/index-cafe" element={<IndexCafe />} />
                <Route exact path="/index-saas" element={<IndexSaas />} />
                <Route exact path="/index-charity" element={<IndexCharity />} />
                <Route exact path='/video-portfolio' element={<VideoPortfolio />} />

                <Route exact path="/index-restaurent" element={<IndexRestaurent />} />
                <Route exact path="/index-real-estate" element={<IndexRealEstate />} />
                <Route exact path="/index-photography" element={<IndexPhotography />} />
                <Route exact path="/index-phone-number" element={<IndexPhoneNumber />} />
                <Route exact path="/index-personal" element={<IndexPersonal />} />
                <Route exact path="/index-payment" element={<IndexPayment />} />
                <Route exact path="/index-nft" element={<IndexNft />} />
                <Route exact path="/index-modern-saas" element={<IndexModernSaas />} />
                <Route exact path="/index-marketing" element={<IndexMarketing />} />
                <Route exact path="/index-law" element={<IndexLaw />} />
                <Route exact path="/index-landing-two" element={<IndexLandingTwo />} />
                <Route exact path="/index-landing-three" element={<IndexLandingThree />} />
                <Route exact path="/index-landing-one" element={<IndexLandingOne />} />
                <Route exact path="/index-landing-four" element={<IndexLandingFour />} />
                <Route exact path="/index-landing-five" element={<IndexLandingFive />} />
                <Route exact path="/index-it-solution" element={<IndexItSolution />} />
                <Route exact path="/index-it-solution-two" element={<IndexItSolutionTwo />} />
                <Route exact path="/index-insurance" element={<IndexInsurance />} />
                <Route exact path="/index-hotel" element={<IndexHotel />} />
                <Route exact path="/index-hosting" element={<IndexHosting />} />
                <Route exact path="/index-hospital" element={<IndexHospital />} />
                <Route exact path="/index-gym" element={<IndexGym />} />
                <Route exact path="/index-furniture" element={<IndexFurniture />} />
                <Route exact path="/index-forums" element={<IndexForums />} />
                <Route exact path="/index-food-blog" element={<IndexFoodBlog />} />
                <Route exact path="/index-event" element={<IndexEvent />} />
                <Route exact path="/index-digital-agency" element={<IndexDigitalAgency />} />
                <Route exact path="/index-coworking" element={<IndexCoworking />} />
                <Route exact path="/index-course" element={<IndexCourse />} />
                <Route exact path="/index-corporate" element={<IndexCorporate />} />
                <Route exact path="/index-corporate-two" element={<IndexCorporateTwo />} />
                <Route exact path="/index-consulting" element={<IndexConsulting />} />
                <Route exact path="/index-construction" element={<IndexConstruction />} />
                <Route exact path="/index-classic-saas" element={<IndexClassicSaas />} />
                <Route exact path="/index-classic-app" element={<IndexClassicApp />} />
                <Route exact path="/index-cafe" element={<IndexCafe />} />
                <Route exact path="/index-business" element={<IndexBusiness />} />
                <Route exact path="/index-blog" element={<IndexBlog />} />
                <Route exact path="/index-apps" element={<IndexApps />} />
                <Route exact path="/helpcenter-overview" element={<Helpcenter />} />
                <Route exact path="/helpcenter-support" element={<HelpcenterSupport />} />
                <Route exact path="/helpcenter-faqs" element={<HelpcenterFaqs />} />
                <Route exact path="/helpcenter-guides" element={<HelpcenterGuides />} />
                <Route exact path="/forums-topic" element={<ForumsTopic />} />
                <Route exact path="/forums-comments" element={<ForumsComments />} />
                <Route exact path="/food-recipe" element={<FoodRecipe />} />
                <Route exact path="/food-recipe/:id" element={<FoodRecipe />} />
                <Route exact path="/email-password-reset" element={<EmailPasswordReset />} />
                <Route exact path="/email-invoice" element={<EmailInvoice />} />
                <Route exact path="/email-confirmation" element={<EmailConfirmation />} />
                <Route exact path="/email-alert" element={<EmailAlert />} />
                <Route exact path="/documentation" element={<Documentation />} />
                <Route exact path="/course-detail" element={<CourseDetail />} />
                <Route exact path="/course-detail/:id" element={<CourseDetail />} />
                <Route exact path="/contact-two" element={<ContactTwo />} />
                <Route exact path="/contact-one" element={<ContactOne />} />
                <Route exact path="/contact-detail" element={<ContactDetail />} />
                <Route exact path="/contact-detail/:id" element={<ContactDetail />} />
                <Route exact path="/changelog" element={<Changelog />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/blog-youtube-post" element={<BlogYoutubePost />} />
                <Route exact path="/blog-vimeo-post" element={<BlogVimeoPost />} />
                <Route exact path="/blog-standard-post" element={<BlogStandardPost />} />
                <Route exact path="/blog-slider-post" element={<BlogSliderPost />} />
                <Route exact path="/blog-sidebar" element={<BlogSidebar />} />
                <Route exact path="/blog-left-sidebar-post" element={<BlogLeftSidebarPost />} />
                <Route exact path="/blog-gallery-post" element={<BlogGalleryPost />} />
                <Route exact path="/blog-detail" element={<BlogDetail />} />
                <Route exact path="/blog-detail/:id" element={<BlogDetail />} />
                <Route exact path="/blog-blockquote-post" element={<BlogBlockquotePost />} />
                <Route exact path="/blog-audio-post" element={<BlogAudioPost />} />
                <Route exact path="/auth-signup" element={<AuthSignup />} />
                <Route exact path="/auth-signup-success" element={<AuthSignupSuccess />} />
                <Route exact path="/auth-re-password" element={<AuthRePassword />} />
                <Route exact path="/auth-login" element={<AuthLogin />} />
                <Route exact path="/auth-lock-screen" element={<AuthLockScreen />} />
                <Route exact path="/property-listing" element={<PropertyListing />} />
                <Route exact path="/property-detail" element={<PropertyDetail />} />
                <Route exact path="/property-detail/:id" element={<PropertyDetail />} />
                <Route exact path="/portfolio-modern-two" element={<PortfolioModernTwo />} />
                <Route exact path="/portfolio-modern-three" element={<PortfolioModernThree />} />
                <Route exact path="/portfolio-modern-six" element={<PortfolioModernSix />} />
                <Route exact path="/portfolio-modern-four" element={<PortfolioModernFour />} />
                <Route exact path="/portfolio-modern-five" element={<PortfolioModernFive />} />
                <Route exact path="/portfolio-masonry-two" element={<PortfolioMasonryTwo />} />
                <Route exact path="/portfolio-masonry-three" element={<PortfolioMasonryThree />} />
                <Route exact path="/portfolio-masonry-six" element={<PortfolioMasonrySix />} />
                <Route exact path="/portfolio-masonry-four" element={<PortfolioMasonryFour />} />
                <Route exact path="/portfolio-masonry-five" element={<PortfolioMasonryFive />} />
                <Route exact path="/index-crypto" element={<IndexCrypto />} />
                <Route exact path="/index-job" element={<IndexJob />} />
                <Route exact path="/index-portfolio" element={<IndexPortfolio />} />
                <Route exact path="/course-listing" element={<CourseListing />} />
                <Route exact path="/nft-auction" element={<NftAuction />} />
                <Route exact path="/nft-collection" element={<NftCollection />} />
                <Route exact path="/nft-create-item" element={<NftCreateItem />} />
                <Route exact path="/nft-create-item" element={<NftCreateItem />} />
                <Route exact path="/nft-creator-profile/:id" element={<NftCreatorProfile />} />
                <Route exact path="/nft-creator-profile" element={<NftCreatorProfile />} />
                <Route exact path="/nft-creator-profile-edit" element={<NftCreatorProfileEdit />} />
                <Route exact path="/nft-creators" element={<NftCreators />} />
                <Route exact path="/nft-detail" element={<NftDetail />} />
                <Route exact path="/nft-detail/:id" element={<NftDetail />} />
                <Route exact path="/nft-explore" element={<NftExplore />} />
                <Route exact path="/nft-wallet" element={<NftWallet />} />
                <Route exact path="/index-ai" element={<IndexAi/>} />
                <Route exact path="/index-travel" element={<IndexTravel/>} />
                <Route exact path="/index-podcast" element={<IndexPodcast/>} />
                <Route exact path="/ui-components" element={<UiComponents/>} />
                <Route exact path="/index-christmas" element={<IndexChristmas/>} />
                <Route exact path="/index-classic-business" element={<IndexClassicBusiness/>} />
            </Routes>
        
        </BrowserRouter>
    )
}
