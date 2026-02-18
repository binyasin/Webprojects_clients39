import React from 'react';

export default function MapPlaceholder() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">
      <div className="flex h-64 items-center justify-center text-gray-400">
        <div className="text-center">
          <div className="text-4xl mb-2">📍</div>
          <p className="text-sm font-medium">Map Integration</p>
          <p className="text-xs text-gray-400 mt-1">
            Sector 62, Noida, India
          </p>
        </div>
      </div>
    </div>
  );
}
