// app/checklist/success/page.tsx
import { Suspense } from 'react';
import SuccessContent from '@/components/SuccessContent';

// Main page component that includes Suspense boundary
export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p>Generating your checklist...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}