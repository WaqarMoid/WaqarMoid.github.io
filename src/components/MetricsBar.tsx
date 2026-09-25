import React from 'react';
import { Activity } from 'lucide-react';
import { metrics } from '../data/content';

export const MetricsBar: React.FC = () => {
  return (
    <section className="border-y border-[#262626] bg-[#0c0c0c]/80 backdrop-blur-sm py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6 text-xs text-[#737373] tracking-widest uppercase">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>Selected Academic & Quantitative Highlights</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="border-l border-[#262626] pl-4 sm:pl-6 space-y-1 group hover:border-blue-500/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-[#fafafa] tracking-tight group-hover:text-blue-400 transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#fafafa]">
                {item.label}
              </div>
              <div className="text-xs text-[#737373]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
