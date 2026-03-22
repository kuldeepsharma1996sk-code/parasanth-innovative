import React from 'react'

interface Spec {
    label: string
    value: string
}

interface TechSpecsProps {
    title: string
    specs: Spec[]
    defaultOpen?: boolean
}

export default function TechSpecs({ title, specs }: TechSpecsProps) {
    return (
        <div className="mb-16 last:mb-0">
            <h3 className="text-xl font-bold text-parasanth-charcoal mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-tesla-red/40"></span>
                {title} Data
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 border-t border-parasanth-grey-mid/20 pt-6">
                {specs.map((spec, index) => (
                    <div key={index} className="flex flex-col border-l border-parasanth-grey-mid/20 pl-6 group">
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] font-black text-parasanth-grey-dark mb-1 group-hover:text-tesla-red transition-colors">
                            {spec.label}
                        </span>
                        <span className="text-sm font-bold text-parasanth-charcoal uppercase tracking-tight">
                            {spec.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
