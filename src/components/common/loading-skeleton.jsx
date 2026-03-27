/**
 * Loading Skeleton Component
 * Provides visual feedback during data loading
 */
const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="skeleton-text-wrapper">
            <div className="skeleton-text-line"></div>
            <div className="skeleton-text-line"></div>
            <div className="skeleton-text-line short"></div>
          </div>
        );
      case 'image':
        return <div className="skeleton-image-only"></div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="skeleton-container">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="skeleton-item">
            {renderSkeleton()}
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        .skeleton-container {
          display: grid;
          gap: 20px;
        }
        
        .skeleton-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .skeleton-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        .skeleton-content {
          padding: 20px;
        }
        
        .skeleton-title {
          width: 80%;
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        
        .skeleton-text {
          width: 100%;
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        
        .skeleton-text.short {
          width: 60%;
        }
        
        .skeleton-text-wrapper {
          padding: 20px;
        }
        
        .skeleton-text-line {
          width: 100%;
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        
        .skeleton-text-line.short {
          width: 70%;
        }
        
        .skeleton-image-only {
          width: 100%;
          height: 300px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSkeleton;
