import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ChevronRight, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { motion } from 'motion/react';

export default function EMRLogin() {
  const navigate = useNavigate();
  const { login, user, loading: authLoading } = useAuth();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      navigate('/emr/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
         <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-2xl shadow-primary/20">
            CH
          </div>
          <span className="text-3xl font-serif italic tracking-tight text-[#1A1A1A]">Citicare</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="rounded-[3rem] border border-border shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl">
          <CardHeader className="text-center pt-16 pb-10 space-y-4">
             <div className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mx-auto shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                Specialist Portal Access
             </div>
             <CardTitle className="text-4xl font-serif text-[#1A1A1A]">Welcome Back</CardTitle>
             <p className="text-[#5C5C5C] font-normal text-base max-w-[280px] mx-auto">Please identify yourself using your professional credentials</p>
          </CardHeader>
          <CardContent className="px-12 pb-16">
            <div className="space-y-6">
              <Button 
                onClick={handleLogin} 
                className="w-full h-16 rounded-3xl text-lg font-medium group shadow-2xl shadow-primary/20 gap-4 transition-all hover:scale-[1.02] active:scale-[0.98]" 
                disabled={loading}
              >
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : (
                  <>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="h-6 w-6" alt="Google" />
                    Sign in with Google
                    <ChevronRight className="h-5 w-5 ml-auto opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                  </>
                )}
              </Button>
            </div>
            <div className="mt-10 text-center">
               <Link to="/" className="text-sm font-medium text-[#A1A1A1] hover:text-primary transition-all underline underline-offset-8 decoration-border hover:decoration-primary">Return to website</Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
