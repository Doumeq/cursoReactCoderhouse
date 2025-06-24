import React from 'react';

export default function withLoading(Component) {
  return function Wrapped({ loading, ...props }) {
    if (loading) return <p>Cargando…</p>;
    return <Component {...props} />;
  };
}
