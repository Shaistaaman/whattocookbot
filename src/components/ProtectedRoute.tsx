
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Store the path they were trying to access
      localStorage.setItem('redirectAfterLogin', location.pathname);
      
      toast({
        title: "Login Required",
        description: "Please log in to access this content",
      });
      
      // Redirect to login page
      navigate('/login');
    }
  }, [isAuthenticated, navigate, location]);

  // If authenticated, render the protected content
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
