import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/home';

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
