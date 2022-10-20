import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'components/Pages/HomePage/HomePage';
import { AboutPage } from 'components/Pages/AboutPage/AboutPage';
import { PortfolioPage } from 'components/Pages/PortfolioPage/PortfolioPage';
import { ContactsPage } from 'components/Pages/ContactsPage/ContactsPage';

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
