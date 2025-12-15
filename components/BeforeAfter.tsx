import React from 'react';
import { XIcon, CheckIcon } from './Icons';

export const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Stop the copy-paste chaos</h2>
          <p className="mt-4 text-xl text-slate-500">See the difference in your workflow.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <span className="bg-red-100 p-1 rounded">
                <XIcon className="w-5 h-5" />
              </span>
              Before
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-900/80">
                <XIcon className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                <span>Manual copy-paste from chat windows repeatedly.</span>
              </li>
              <li className="flex items-start gap-3 text-red-900/80">
                <XIcon className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                <span>Broken tables that turn into messy text blobs.</span>
              </li>
              <li className="flex items-start gap-3 text-red-900/80">
                <XIcon className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                <span>Random notes scattered in different docs.</span>
              </li>
              <li className="flex items-start gap-3 text-red-900/80">
                <XIcon className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                <span>Can't find that one perfect prompt you used last week.</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-brand-50/50 rounded-3xl p-8 border border-brand-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-200 rounded-full blur-3xl opacity-20 -translate-y-10 translate-x-10"></div>
            <h3 className="text-xl font-bold text-brand-700 mb-6 flex items-center gap-2">
              <span className="bg-brand-100 p-1 rounded">
                <CheckIcon className="w-5 h-5" />
              </span>
              After
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand-500" />
                <span>One click to export selected messages or full threads.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand-500" />
                <span>Tables stay intact, readable, and beautiful.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand-500" />
                <span>Smart titles and tags automatically added.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand-500" />
                <span>Your own organized library of prompts and ideas.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-brand-500" />
                <span>Build your own personal AI Library — automatically.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
