import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, ShieldAlert, ClipboardList, Microscope, Pill, Upload, ChevronLeft, Save, Loader2, Plus } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestore-utils';
import { useAuth } from '@/components/auth/AuthProvider';

interface Patient {
  id: string;
  name: string;
  age: number;
  sex: string;
  diagnosis: string;
  status: string;
  allergies?: string[];
  createdBy: string;
}

export default function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [patient, setPatient] = React.useState<Patient | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  
  // Form states
  const [diagnosis, setDiagnosis] = React.useState('');
  const [complaint, setComplaint] = React.useState('');
  const [history, setHistory] = React.useState('');

  React.useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate('/emr/login');
      return;
    }

    const fetchPatient = async () => {
      if (!id) return;
      const path = `patients/${id}`;
      try {
        const docRef = doc(db, path);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as Patient;
          setPatient({ id: docSnap.id, ...data });
          setDiagnosis(data.diagnosis || '');
        } else {
          navigate('/emr/dashboard');
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, path);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id, user, authLoading, navigate]);

  const handleSave = async () => {
    if (!id || !user || !patient) return;
    setSaving(true);
    const path = `patients/${id}`;
    try {
      // Update patient status/diagnosis
      await updateDoc(doc(db, path), {
        diagnosis,
        updatedAt: serverTimestamp()
      });

      // Save consultation record
      if (complaint) {
        await addDoc(collection(db, `patients/${id}/consultations`), {
          patientId: id,
          specialistId: user.uid,
          chiefComplaint: complaint,
          history,
          diagnosis,
          createdAt: serverTimestamp()
        });
      }
      
      alert("Records updated successfully!");
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  if (!patient) return null;

  return (
    <div className="space-y-10 pb-12 font-sans">
      <div className="flex items-center justify-between">
        <Button variant="ghost" render={<Link to="/emr/dashboard" />} className="rounded-full text-[#5C5C5C] hover:bg-muted hover:text-primary transition-all">
             <ChevronLeft className="h-4 w-4 mr-2" />
             Records Overview
        </Button>
        <div className="flex gap-4">
           <Button variant="outline" className="rounded-2xl h-11 px-6 font-medium border-border text-[#5C5C5C] hover:bg-accent transition-all">Print File</Button>
           <Button className="rounded-2xl h-11 px-8 font-medium shadow-xl shadow-primary/20" onClick={handleSave} disabled={saving}>
             {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
             Commit Changes
           </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Patient Profile Card */}
        <div className="lg:w-80 flex-shrink-0 space-y-8">
           <Card className="rounded-[3rem] border border-border shadow-sm overflow-hidden bg-white">
              <div className="h-24 bg-accent/40 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
              <CardContent className="p-10 -mt-12 text-center space-y-6">
                 <div className="h-24 w-24 rounded-[2.5rem] bg-white shadow-2xl mx-auto flex items-center justify-center font-serif text-4xl text-primary border-4 border-background leading-none">
                    {patient.name.charAt(0)}
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-[#1A1A1A]">{patient.name}</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] text-primary bg-accent/30 py-1 rounded-full px-3 inline-block">ID: {patient.id.slice(0, 8).toUpperCase()}</p>
                 </div>
                 <div className="pt-6 grid grid-cols-2 gap-8 border-t border-border">
                    <div className="text-left">
                       <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Age</span>
                       <div className="font-bold text-[#1A1A1A]">{patient.age} Yrs</div>
                    </div>
                    <div className="text-left">
                       <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Sex</span>
                       <div className="font-bold text-[#1A1A1A]">{patient.sex}</div>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="rounded-[2.5rem] border border-[#FFF5F5] shadow-sm bg-[#FFF5F5]/50 overflow-hidden">
              <CardHeader className="pb-3 border-b border-white/50">
                 <CardTitle className="text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 text-red-500">
                    <ShieldAlert className="h-4 w-4" />
                    Medical Alerts
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                 {patient.allergies?.length ? (
                   <div className="flex flex-wrap gap-2">
                     {patient.allergies.map(a => (
                       <Badge key={a} variant="destructive" className="rounded-full px-4 py-1 font-bold text-[10px] uppercase shadow-sm">
                          {a}
                        </Badge>
                     ))}
                   </div>
                 ) : (
                   <p className="text-xs font-medium text-[#5C5C5C] italic">No active allergies reported.</p>
                 )}
              </CardContent>
           </Card>
        </div>

        {/* Records Tabs */}
        <div className="flex-grow">
           <Tabs defaultValue="consultation" className="space-y-10">
              <TabsList className="bg-muted p-1.5 rounded-[2rem] shadow-inner h-16 w-full justify-start border border-border overflow-x-auto overflow-y-hidden">
                <TabsTrigger value="consultation" className="rounded-full font-medium text-sm h-full px-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all">
                   <ClipboardList className="h-4 w-4 mr-2" />
                   Consultation Log
                </TabsTrigger>
                <TabsTrigger value="labs" className="rounded-full font-medium text-sm h-full px-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all">
                   <Microscope className="h-4 w-4 mr-2" />
                   Labs & Diagnostics
                </TabsTrigger>
                <TabsTrigger value="prescriptions" className="rounded-full font-medium text-sm h-full px-8 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all">
                   <Pill className="h-4 w-4 mr-2" />
                   Medication Plan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="consultation">
                 <div className="grid gap-8">
                    <Card className="rounded-[3rem] border border-border shadow-sm bg-white overflow-hidden">
                       <CardHeader className="p-10 pb-6 border-b border-border">
                          <CardTitle className="text-2xl font-serif text-[#1A1A1A]">Clinical Documentation</CardTitle>
                          <CardDescription className="text-[#5C5C5C] font-medium">Capture comprehensive visit findings and management plans.</CardDescription>
                       </CardHeader>
                       <CardContent className="p-10 space-y-10">
                          <div className="space-y-4">
                             <Label className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary">Chief Complaint</Label>
                             <Textarea 
                              value={complaint}
                              onChange={(e) => setComplaint(e.target.value)}
                              placeholder="What is the patient presenting with today?" 
                              className="rounded-2xl border-none bg-muted focus-visible:ring-primary min-h-[120px] font-medium p-6 shadow-inner resize-none" 
                            />
                          </div>
                          <div className="space-y-4">
                             <Label className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary">History of Presenting Illness & Findings</Label>
                             <Textarea 
                              value={history}
                              onChange={(e) => setHistory(e.target.value)}
                              placeholder="Document full clinical history and physical examination findings..." 
                              className="rounded-2xl border-none bg-muted focus-visible:ring-primary min-h-[200px] font-medium p-6 shadow-inner resize-none" 
                            />
                          </div>
                          <div className="space-y-4">
                            <Label className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary">Working Diagnosis</Label>
                            <Input 
                              value={diagnosis}
                              onChange={(e) => setDiagnosis(e.target.value)}
                              placeholder="Final or differential diagnosis..." 
                              className="rounded-2xl border-none bg-muted focus-visible:ring-primary h-14 px-6 font-bold shadow-inner" 
                            />
                          </div>
                       </CardContent>
                    </Card>
                 </div>
              </TabsContent>

              <TabsContent value="labs">
                 <Card className="rounded-[3rem] border border-border shadow-sm bg-white overflow-hidden">
                    <CardHeader className="p-10 pb-6 border-b border-border flex flex-row items-center justify-between gap-6 overflow-hidden">
                       <div className="space-y-1">
                          <CardTitle className="text-2xl font-serif text-[#1A1A1A]">Laboratory Diagnostics</CardTitle>
                          <CardDescription className="text-[#5C5C5C] font-medium">Digital repository for pathology and radiology reports.</CardDescription>
                       </div>
                       <Button variant="outline" className="rounded-2xl border-dashed border-primary/40 text-primary hover:bg-accent shrink-0">
                          <Upload className="h-4 w-4 mr-2" />
                          New Scan
                       </Button>
                    </CardHeader>
                    <CardContent className="p-10">
                       <div className="border-2 border-dashed border-border rounded-[2.5rem] p-16 text-center space-y-6 hover:bg-muted/50 transition-all duration-300 cursor-pointer group">
                          <div className="h-20 w-20 bg-accent text-primary rounded-full flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
                             <Upload className="h-10 w-10" />
                          </div>
                          <div className="space-y-2">
                             <p className="font-serif italic text-xl text-[#1A1A1A]">Import diagnostics</p>
                             <p className="text-sm text-muted-foreground font-medium">Standardized formats: PDF, PACS, JPEG (Max 25MB)</p>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
              </TabsContent>

              <TabsContent value="prescriptions">
                 <Card className="rounded-[3rem] border border-border shadow-sm bg-white overflow-hidden">
                    <CardHeader className="p-10 pb-6 border-b border-border">
                       <CardTitle className="text-2xl font-serif text-[#1A1A1A]">Active Medications</CardTitle>
                       <CardDescription className="text-[#5C5C5C] font-medium">Current treatment regimen and dosage schedules.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8">
                       <div className="space-y-5">
                          {[1, 2].map(i => (
                             <div key={i} className="flex gap-6 p-6 rounded-3xl bg-muted border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 items-center group">
                                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-border group-hover:bg-primary group-hover:text-white transition-all">
                                   <Pill className="h-6 w-6" />
                                </div>
                                <div className="flex-grow">
                                   <div className="font-bold text-[#1A1A1A] text-lg">Amoxicillin • 500mg</div>
                                   <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">Oral • 1 x 3 Daily • 7-Day Cycle</div>
                                </div>
                                <Button variant="ghost" size="sm" className="rounded-xl text-[#A1A1A1] hover:text-red-500 hover:bg-[#FFF5F5]">Discard</Button>
                             </div>
                          ))}
                          <Button variant="outline" className="w-full rounded-3xl py-12 border-2 border-dashed border-primary/20 text-primary font-medium hover:bg-accent transition-all group">
                             <span className="flex items-center gap-3 group-hover:scale-105 transition-transform">
                                <Plus className="h-5 w-5" />
                                Prescribe New Medication
                             </span>
                          </Button>
                       </div>
                    </CardContent>
                 </Card>
              </TabsContent>
           </Tabs>
        </div>
      </div>
    </div>
  );
}
