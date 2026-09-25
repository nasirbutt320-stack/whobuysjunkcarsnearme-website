import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { cities, getCity } from "@/lib/data/cities";
import { states, getState } from "@/lib/data/states";
import { brands, getBrand } from "@/lib/data/brands";
import { counties, getCounty } from "@/lib/data/counties";
import { staticPages, getStaticPageMeta } from "@/lib/data/staticPages";
import { posts, getPost } from "@/lib/data/posts";

import CityTemplate from "@/components/templates/CityTemplate";
import StateTemplate from "@/components/templates/StateTemplate";
import BrandTemplate from "@/components/templates/BrandTemplate";
import CountyTemplate from "@/components/templates/CountyTemplate";
import PostPage from "@/components/pages/PostPage";

import WeBuyPage from "@/components/pages/WeBuyPage";
import AreaWeServePage from "@/components/pages/AreaWeServePage";
import ReviewsPage from "@/components/pages/ReviewsPage";
import FaqsPage from "@/components/pages/FaqsPage";
import GetQuotePage from "@/components/pages/GetQuotePage";
import GalleryPage from "@/components/pages/GalleryPage";
import AboutUsPage from "@/components/pages/AboutUsPage";
import ContactUsPage from "@/components/pages/ContactUsPage";
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/components/pages/TermsOfServicePage";
import VideoLandingPage from "@/components/pages/VideoLandingPage";

export function generateStaticParams() {
  const slugs = [
    ...cities.map((c) => c.slug),
    ...states.map((s) => s.slug),
    ...brands.map((b) => b.slug),
    ...counties.map((c) => c.slug),
    ...staticPages.map((p) => p.slug),
    ...posts.map((p) => p.slug),
  ];
  return slugs.map((slug) => ({ slug }));
}

type SlugParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: SlugParams;
}): Promise<Metadata> {
  const { slug } = await params;

  const city = getCity(slug);
  if (city) {
    const state = getState(city.stateSlug);
    return {
      title: { absolute: `Junk Car Buyer in ${city.name}${state ? `, ${state.abbr}` : ""} - Fast Cash Offers` },
      description: `Sell your junk, wrecked, or unwanted car for cash in ${city.name}${state ? `, ${state.name}` : ""}. Free towing and same-day pickup available.`,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const state = getState(slug);
  if (state) {
    return {
      title: { absolute: `Junk Cars for Cash in ${state.name} - Quick Offers Today` },
      description: `We buy junk, damaged, and unwanted cars across ${state.name}. Free towing, fast cash offers, and same-day pickup.`,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const brand = getBrand(slug);
  if (brand) {
    return {
      title: { absolute: `Sell Your ${brand.name} for Cash Today - No Hassle, Fast` },
      description: `We buy ${brand.name} vehicles in any condition. Free towing, fair cash offers, and fast, nationwide pickup.`,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const county = getCounty(slug);
  if (county) {
    const countyState = getState(county.stateSlug);
    return {
      title: { absolute: `Junk Car Buyer in ${county.name}${countyState ? `, ${countyState.abbr}` : ""} - Fast Cash Offers` },
      description: `Sell your junk, wrecked, or unwanted car for cash anywhere in ${county.name}${countyState ? `, ${countyState.name}` : ""}. Free towing and same-day pickup available.`,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const post = getPost(slug);
  if (post) {
    return {
      title: { absolute: `${post.title} - Who Buys Junk Cars Near Me` },
      description: post.excerpt,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const staticMeta = getStaticPageMeta(slug);
  if (staticMeta) {
    return {
      title: { absolute: staticMeta.title },
      description: staticMeta.description,
      alternates: { canonical: `/${slug}/` },
    };
  }

  return {};
}

export default async function SlugPage({ params }: { params: SlugParams }) {
  const { slug } = await params;

  const city = getCity(slug);
  if (city) return <CityTemplate city={city} />;

  const state = getState(slug);
  if (state) return <StateTemplate state={state} />;

  const brand = getBrand(slug);
  if (brand) return <BrandTemplate brand={brand} />;

  const county = getCounty(slug);
  if (county) return <CountyTemplate county={county} />;

  const post = getPost(slug);
  if (post) return <PostPage post={post} />;

  switch (slug) {
    case "we-buy":
      return <WeBuyPage />;
    case "area-we-serve":
      return <AreaWeServePage />;
    case "reviews":
      return <ReviewsPage />;
    case "faqs":
      return <FaqsPage />;
    case "get-quote":
      return <GetQuotePage />;
    case "gallery":
      return <GalleryPage />;
    case "about-us":
      return <AboutUsPage />;
    case "contact-us":
      return <ContactUsPage />;
    case "privacy-policy":
      return <PrivacyPolicyPage />;
    case "terms-of-service":
      return <TermsOfServicePage />;
    case "watch-video":
      return <VideoLandingPage variant={1} />;
    case "watch-video-2":
      return <VideoLandingPage variant={2} />;
    default:
      notFound();
  }
}
