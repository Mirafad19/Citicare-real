import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, AlertCircle, Activity, ChevronRight, Search, Plus, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestore-utils';
import { useAuth } from '@/components/auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

interface Patient {
  id: string;
  name: string;
  age: number;
  sex: string;
  diagnosis: string;
  status: string;
}

export default function EMRDashboard() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate('/emr/login');
      return;
    }

    const path = 'patients';
    try {
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const patientData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Patient[];
        setPatients(patientData);
        setLoading(false);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
      });
      return () => unsubscribe();
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  }, [user, authLoading, navigate]);

  const seedData = async () => {
    if (!user) return;
    const dummyPatients = [
      { name: 'John Doe', age: 45, sex: 'Male', diagnosis: 'Hypertension', status: 'Active', createdBy: user.uid, createdAt: serverTimestamp() },
      { name: 'Jane Smith', age: 32, sex: 'Female', diagnosis: 'Post-Surgical Followup', status: 'Stable', createdBy: user.uid, createdAt: serverTimestamp() },
      { name: 'Michael Brown', age: 67, sex: 'Male', diagnosis: 'Diabetes Type 2', status: 'Critical', createdBy: user.uid, createdAt: serverTimestamp() },
    ];

    for (const p of dummyPatients) {
      await addDoc(collection(db, 'patients'), p);
    }
  };

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.diagnosis.toLowerCase().includes(search.toLowerCase())
  );

  if (authLoading || loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-12 font-sans">
      {/* Stats Grid */}
      <div className="grid gap-8 md:grid-cols-4">
        {[
          { label: 'Total Patients', value: patients.length.toString(), icon: <Users className="w-6 h-6" />, bg: 'bg-accent' },
          { label: 'Pending Results', value: '12', icon: <FileText className="w-6 h-6" />, bg: 'bg-muted' },
          { label: 'Critical Cases', value: patients.filter(p => p.status === 'Critical').length.toString(), icon: <AlertCircle className="w-6 h-6" />, bg: 'bg-[#FFF5F5]', text: 'text-red-500' },
          { label: 'Avg Health Score', value: '88%', icon: <Activity className="w-6 h-6" />, bg: 'bg-accent' },
        ].map((stat, i) => (
          <Card key={i} className="rounded-[2rem] border border-border shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
              <div className={cn(
                "h-14 w-14 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner",
                stat.bg,
                stat.text
              )}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                <p className="text-4xl font-serif text-[#1A1A1A]">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Patient List */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-3">
            <h3 className="text-3xl font-serif text-[#1A1A1A]">Patient Records</h3>
            <p className="text-[#5C5C5C] text-sm font-medium">Manage and monitor continuous health records</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-grow">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A1A1A1]" />
               <Input 
                placeholder="Search by name or diagnosis..." 
                className="pl-12 h-12 bg-white border border-border rounded-2xl w-full md:w-80 shadow-sm focus-visible:ring-primary font-medium" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
             </div>
             {patients.length === 0 && (
               <Button variant="outline" onClick={seedData} className="rounded-2xl h-12 px-6 font-medium border-primary text-primary hover:bg-accent transition-all">
                 Generate Sample
               </Button>
             )}
             <Button className="rounded-2xl h-12 px-8 font-medium shadow-xl shadow-primary/20">
               <Plus className="h-4 w-4 mr-2" />
               New Patient
             </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredPatients.length === 0 ? (
            <Card className="rounded-[3rem] border border-dashed border-border bg-muted/30 p-20 text-center">
               <div className="text-lg font-serif italic text-muted-foreground">No matching medical records found.</div>
            </Card>
          ) : (
            filteredPatients.map((p) => (
              <Card 
                key={p.id} 
                onClick={() => navigate(`/emr/patients/${p.id}`)}
                className="rounded-3xl border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer overflow-hidden bg-white"
              >
                <CardContent className="p-0 flex items-center h-24">
                   <div className="w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="flex-grow grid grid-cols-6 items-center px-8 gap-8">
                     <div className="flex items-center gap-5 col-span-2">
                        <div className="h-14 w-14 rounded-full bg-accent border border-border flex items-center justify-center font-serif text-xl text-primary shadow-inner">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[#1A1A1A] text-lg leading-tight group-hover:text-primary transition-colors">{p.name}</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1.5">{p.sex} • {p.age} Years</div>
                        </div>
                     </div>
                     <div className="font-medium text-sm text-[#5C5C5C] truncate col-span-2">
                       <span className="text-[10px] uppercase tracking-widest text-[#A1A1A1] block mb-1">Primary Diagnosis</span>
                       {p.diagnosis}
                     </div>
                     <div className="flex justify-center">
                       <span className={cn(
                         "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm",
                         p.status === 'Critical' ? 'bg-[#FFF5F5] text-red-500 border border-red-100' : 
                         p.status === 'Stable' ? 'bg-[#F0FFF4] text-emerald-600 border border-emerald-100' : 
                         'bg-accent text-primary border border-primary/10'
                       )}>
                         {p.status}
                       </span>
                     </div>
                     <div className="text-right">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted border border-border group-hover:bg-primary group-hover:text-white transition-all">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                     </div>
                   </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
