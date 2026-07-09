import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import { Contact } from '../Contact';
import { projects, skills, certifications } from '../../data/portfolioData';

describe('Portfolio Data & Schema Verification', () => {
  it('should verify that all projects match the schema', () => {
    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(typeof project.id).toBe('string');
      expect(project.title).toBeDefined();
      expect(project.subtitle).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.longDescription).toBeDefined();
      expect(project.image).toBeDefined();
      expect(Array.isArray(project.tags)).toBe(true);
      expect(Array.isArray(project.features)).toBe(true);
      expect(project.demoUrl).toBeDefined();
      expect(project.githubUrl).toBeDefined();
    });
  });

  it('should verify skills and categories are populated', () => {
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((cat) => {
      expect(cat.category).toBeDefined();
      expect(cat.items.length).toBeGreaterThan(0);
      cat.items.forEach((item) => {
        expect(item.name).toBeDefined();
        expect(item.level).toBeGreaterThanOrEqual(0);
        expect(item.level).toBeLessThanOrEqual(100);
      });
    });
  });

  it('should verify certifications are populated and valid', () => {
    expect(certifications.length).toBeGreaterThan(0);
    certifications.forEach((cert) => {
      expect(cert.title).toBeDefined();
      expect(cert.issuer).toBeDefined();
      expect(cert.date).toBeDefined();
      expect(cert.credentialId).toBeDefined();
      expect(cert.verificationUrl).toBeDefined();
    });
  });
});

describe('Contact Form Validation', () => {
  it('should display validation errors when fields are empty', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('should validate email format correctly', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    // Fill valid name, invalid email, valid message
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(messageInput, { target: { value: 'This is a long message for the form validation test.' } });

    fireEvent.click(submitButton);

    expect(await screen.findByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Message is required')).not.toBeInTheDocument();
  });

  it('should enforce message minimum length', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    // Fill valid name, valid email, too short message
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Short' } });

    fireEvent.click(submitButton);

    expect(await screen.findByText('Message must be at least 10 characters long')).toBeInTheDocument();
  });

  it('should display success screen on successful submit', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a valid long message for the form submission.' } });

    fireEvent.click(submitButton);

    // Should show "Sending..." state
    expect(screen.getByText('Sending...')).toBeInTheDocument();

    // Verification screen shows "Message Sent!" (wait for state transition up to 2 seconds)
    expect(await screen.findByText('Message Sent!', {}, { timeout: 2000 })).toBeInTheDocument();
  });
});

describe('Theme Switcher and React Context Integration', () => {
  it('should render the theme toggler and toggle states', () => {
    render(<App />);
    
    // Check that we can find the theme toggle button (by its label)
    const toggleButton = screen.getByRole('button', { name: /Toggle Theme/i });
    expect(toggleButton).toBeInTheDocument();

    // Initially the theme will default to dark
    const htmlElement = document.documentElement;
    expect(htmlElement.classList.contains('dark')).toBe(true);

    // Click the toggle button to switch to light theme
    fireEvent.click(toggleButton);
    expect(htmlElement.classList.contains('light')).toBe(true);
    expect(htmlElement.classList.contains('dark')).toBe(false);

    // Click it again to switch back to dark theme
    fireEvent.click(toggleButton);
    expect(htmlElement.classList.contains('dark')).toBe(true);
    expect(htmlElement.classList.contains('light')).toBe(false);
  });
});
