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
      {imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gold-950 to-transparent" />
        </div>
      ) : (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gold-900/20 to-gold-950/40 flex items-center justify-center">
          <svg className="w-16 h-16 text-gold-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      )}
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
