import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  
    it('should render the Orders link', () => {
      render(<App />);
      expect(screen.getByText('Orders')).toBeInTheDocument();
    })
    it('should render the Payments link', () => {
      render(<App />);
      expect(screen.getByText('Payments')).toBeInTheDocument();
    })

    it('should render the Home Link', () => {
      render(<App />);
      expect(screen.getByRole('link', { name: "Home"})).toBeInTheDocument();
    })

    it('should render the Home Link', () => {
      render(<App />);
      expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument();
    })
    
});
