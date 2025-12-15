import React from 'react';
import { FeatureItem } from '../types';
import { TableIcon, LayersIcon, TagIcon, CopyIcon, DownloadIcon, FileIcon } from './Icons';

const features: FeatureItem[] = [
  {
    title: "Keep tables intact",
    description: "Stop fixing broken tables after copy-paste. Keep them clean and readable.",
    icon: <TableIcon className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Clean formatting",
    description: "Preserve paragraphs, headings, and code blocks where possible.",
    icon: <LayersIcon className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Custom Tags",
    description: "Choose your own tags like 'Prompt', 'Design', 'Startup', 'Coding', and more.",
    icon: <TagIcon className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Export full conversations",
    description: "Pro users can capture the entire thread with one click.",
    icon: <CopyIcon className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Auto File Naming",
    description: "Each export generates a clean, structured filename automatically.",
    icon: <FileIcon className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Copy or Download",
    description: "Copy to clipboard with formatting, or download as a file.",
    icon: <DownloadIcon className="w-6 h-6 text-brand-500" />
  }
];

const useCases = [
  {
    title: "Prompt library",
    desc: "Save and categorize your best prompts to build your own reusable command collection."
  },
  {
    title: "Research notes",
    desc: "Keep AI-generated summaries, citations, and tables from your research chats."
  },
  {
    title: "Client replies & templates",
    desc: "Store reusable email drafts, support responses, and sales scripts."
  },
  {
    title: "Idea bank",
    desc: "Save brainstorming sessions, product ideas, and naming explorations."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to stay organized
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            A thoughtful tool designed for AI power users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors duration-200">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What will you save?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-brand-600 mb-2">{useCase.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
