"use client";

import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure render time
    const renderStart = performance.now();
    const renderTime = performance.now() - renderStart;
    setMetrics(prev => ({ ...prev, renderTime }));

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }));
    }

    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
  }, []);

  const getPerformanceColor = (value: number, threshold: number) => {
    return value < threshold ? '#10b981' : value < threshold * 1.5 ? '#f59e0b' : '#ef4444';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '8px 12px',
          backgroundColor: '#1f2937',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '12px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        📊 Performance
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      minWidth: '200px',
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <h4 style={{ margin: 0, fontSize: '14px' }}>Performance Monitor</h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Load Time:</span>
          <span style={{ color: getPerformanceColor(metrics.loadTime, 1000) }}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Render Time:</span>
          <span style={{ color: getPerformanceColor(metrics.renderTime, 16) }}>
            {metrics.renderTime.toFixed(1)}ms
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Memory:</span>
          <span style={{ color: getPerformanceColor(metrics.memoryUsage, 50) }}>
            {metrics.memoryUsage}MB
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>FPS:</span>
          <span style={{ color: getPerformanceColor(60 - metrics.fps, 10) }}>
            {metrics.fps}
          </span>
        </div>
      </div>

      {/* Performance Status */}
      <div style={{
        marginTop: '10px',
        padding: '8px',
        backgroundColor: '#374151',
        borderRadius: '4px',
        fontSize: '11px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span>Status:</span>
          <span style={{ 
            color: metrics.fps > 55 && metrics.loadTime < 1000 ? '#10b981' : '#f59e0b' 
          }}>
            {metrics.fps > 55 && metrics.loadTime < 1000 ? 'Good' : 'Needs Optimization'}
          </span>
        </div>
        <div style={{ fontSize: '10px', color: '#9ca3af' }}>
          {metrics.fps > 55 && metrics.loadTime < 1000 
            ? 'Performance is optimal' 
            : 'Consider optimizing images and reducing bundle size'
          }
        </div>
      </div>
    </div>
  );
} 