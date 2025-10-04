export default function SkeletonCard() {
  return (
    <div style={{ 
      border: '1px solid #eee', 
      borderRadius: 16, 
      background: '#fafafa', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: 420
    }}>
      {/* Image Skeleton */}
      <div style={{ 
        width: '100%', 
        height: 180, 
        backgroundColor: '#f3f4f6',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          animation: 'shimmer 1.5s infinite'
        }} />
      </div>

      {/* Content Skeleton */}
      <div style={{ 
        padding: 24, 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        {/* Date and Category */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 8 
        }}>
          <div style={{ 
            width: '60px', 
            height: '14px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
          <div style={{ 
            width: '80px', 
            height: '20px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
        </div>

        {/* Title Skeleton */}
        <div style={{ 
          marginBottom: 12 
        }}>
          <div style={{ 
            width: '100%', 
            height: '22px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            marginBottom: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
          <div style={{ 
            width: '80%', 
            height: '22px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
        </div>

        {/* Summary Skeleton */}
        <div style={{ 
          flex: 1,
          marginBottom: 16 
        }}>
          <div style={{ 
            width: '100%', 
            height: '15px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            marginBottom: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
          <div style={{ 
            width: '90%', 
            height: '15px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            marginBottom: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
          <div style={{ 
            width: '70%', 
            height: '15px', 
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
        </div>

        {/* Link Skeleton */}
        <div style={{ 
          width: '120px', 
          height: '15px', 
          backgroundColor: '#f3f4f6',
          borderRadius: '4px',
          marginTop: 'auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: 'shimmer 1.5s infinite'
          }} />
        </div>
      </div>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
} 