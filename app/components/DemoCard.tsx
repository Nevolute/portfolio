interface DemoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  tags: string[];
}

export default function DemoCard({ title, description, imageUrl, demoUrl, tags }: DemoCardProps) {
  return (
    <div className="bg-gold-950/30 border border-gold-800/30 rounded-2xl overflow-hidden card-hover group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gold-950 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gold-600/20 text-gold-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gold-200/60 text-sm mb-4">{description}</p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Try Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
