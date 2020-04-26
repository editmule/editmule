import React from 'react';

export default function Loader(props: any) {
  return (
    <div>
      <section className="height-30 text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </section>
    </div>
  );
}
