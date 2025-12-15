import React from 'react';
import { PricingTier } from '../types';
import { CheckIcon } from './Icons';
import { LIFETIME_PRO_CHECKOUT_URL, CHROME_WEB_STORE_URL } from '../src/config/links';

const tiers: PricingTier[] = [
  {
    name: "Free Trial",
    price: "$0",
    description: "Perfect for testing.",
    features: [
      "All core V1 features",
      "Up to 5 exports total",
      "Export selected messages",
      "No credit card required"
    ],
    cta: "Add to Chrome",
    highlight: false
  },
  {
    name: "Lifetime Pro",
    price: "$19",
    originalPrice: "$29",
    description: "One-time payment.",
    features: [
      "Unlimited exports",
      "Export full conversation threads",
      "Smart titles & customizable tags",
      "Automatic filenames",
      "All future V1 updates included",
      "Priority support"
    ],
    cta: "Get Lifetime Access",
    highlight: true
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            No subscriptions. Pay once, use forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-3xl transition-transform duration-200 ${
                tier.highlight 
                  ? 'bg-slate-900 text-white shadow-2xl scale-100 md:scale-105 ring-1 ring-slate-900 z-10' 
                  : 'bg-white border border-slate-200 text-slate-900 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-brand-500 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-sm">
                  Holiday Discount
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${tier.highlight ? 'text-brand-300' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <>
                      <span className={`text-xl line-through ${tier.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {tier.originalPrice}
                      </span>
                    </>
                  )}
                </div>
                {tier.highlight && tier.originalPrice && (
                    <p className="text-sm text-brand-400 mt-2 font-medium">Save $10 — Limited time offer</p>
                )}
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-brand-400' : 'text-brand-600'}`} />
                    <span className={`text-sm leading-relaxed ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.highlight ? LIFETIME_PRO_CHECKOUT_URL : CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-medium transition-all duration-200 text-center block ${
                  tier.highlight
                    ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25 hover:scale-105 active:scale-95'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center border-t border-slate-100 pt-8 w-full max-w-2xl mx-auto">
            <p className="text-slate-500 font-medium">No subscriptions. Pay once, use forever.</p>
        </div>
      </div>
    </section>
  );
};