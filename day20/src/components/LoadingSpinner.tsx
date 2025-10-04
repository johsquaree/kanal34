interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = '#dc2626',
  text = 'Yükleniyor...'
}: LoadingSpinnerProps) {
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60
  };

  const spinnerSize = sizeMap[size];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Spinner */}
      <div style={{
        width: spinnerSize,
        height: spinnerSize,
        border: `3px solid #f3f4f6`,
        borderTop: `3px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: text ? '15px' : '0'
      }} />

      {/* Loading Text */}
      {text && (
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          {text}
        </div>
      )}

      {/* Spinner Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
} 