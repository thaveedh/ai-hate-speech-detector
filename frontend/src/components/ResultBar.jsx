import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function ResultBar({ analysis }) {
  if (!analysis) return null;

  const { is_hateful, score, label } = analysis;
  const percentage = (score * 100).toFixed(0);

  return (
    <div className={`p-5 rounded-2xl border-2 transition-all duration-700 ${is_hateful ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`flex items-center gap-2 font-black uppercase text-[10px] tracking-widest ${is_hateful ? 'text-red-500' : 'text-emerald-500'}`}>
          {is_hateful ? <ShieldAlert size={16}/> : <ShieldCheck size={16}/>}
          {is_hateful ? `Safety Flag: ${label || "TOXIC"}` : 'Content Verified Safe'}
        </span>
        <span className="text-[10px] font-mono opacity-40">CONFIDENCE: {is_hateful ? '100' : (isNaN(percentage) ? 0 : percentage)}%</span>
      </div>
      
      <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${is_hateful ? 'bg-red-500 w-full' : 'bg-emerald-500'}`}
          style={{ width: is_hateful ? '100%' : `${percentage}%` }}
        />
      </div>
    </div>
  );
}