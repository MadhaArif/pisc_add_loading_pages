import Image from 'next/image';
import { useState } from 'react';

/**
 * OptimizedImage Component
 * Handles image loading with fallback and error states
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {object} className - Additional CSS classes
 */
const OptimizedImage = ({ 
  src, 
  alt = 'Image', 
  width = 500, 
  height = 500, 
  className = '',
  layout = 'responsive',
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div 
        className={`image-error-placeholder ${className}`}
        style={{ 
          width: '100%', 
          height: height || 'auto', 
          background: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '14px'
        }}
      >
        <span>Image not available</span>
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit="cover"
        className={`${className} ${isLoading ? 'image-loading' : 'image-loaded'}`}
        priority={priority}
        onLoadingComplete={handleLoad}
        onError={handleError}
        unoptimized={src.startsWith('http')}
      />
      <style jsx>{`
        .image-loading {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .image-loaded {
          opacity: 1;
        }
        .image-error-placeholder {
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default OptimizedImage;
