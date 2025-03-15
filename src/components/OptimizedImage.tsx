import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Generiere WebP Version des Bildes
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={webpSrc}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={90}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 