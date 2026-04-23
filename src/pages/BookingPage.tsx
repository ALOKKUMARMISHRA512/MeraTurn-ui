import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, CreditCard, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockOrganizations, mockTimeSlots } from '@/data/mockData';

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const organization = mockOrganizations.find(org => org.id === id);
  
  const [step, setStep] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');

  if (!organization) return <div>Organization not found</div>;

  const selectedServiceData = organization.services.find(s => s.id === selectedService);
  const availableServices = selectedDepartment
    ? organization.services.filter(s => s.departmentId === selectedDepartment)
    : [];

  const handleConfirmBooking = () => {
    // Simulate booking confirmation
    navigate('/token');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <Header showBack title="Book Appointment" />

      <div className="container mx-auto px-4 py-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Department</h2>
              <div className="grid grid-cols-1 gap-3">
                {organization.departments.filter(d => d.available).map((dept) => (
                  <Card
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`p-4 cursor-pointer rounded-2xl border-2 transition-all ${
                      selectedDepartment === dept.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{dept.name}</span>
                  </Card>
                ))}
              </div>
            </div>

            {selectedDepartment && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Service</h2>
                <div className="space-y-3">
                  {availableServices.map((service) => (
                    <Card
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 cursor-pointer rounded-2xl border-2 transition-all ${
                        selectedService === service.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">₹{service.fee}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={() => setStep(2)}
              disabled={!selectedService}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Continue
            </Button>
          </motion.div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Date</h2>
              <div className="grid grid-cols-3 gap-3">
                {['2026-04-24', '2026-04-25', '2026-04-26', '2026-04-27', '2026-04-28', '2026-04-29'].map((date) => {
                  const dateObj = new Date(date);
                  const day = dateObj.getDate();
                  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
                  
                  return (
                    <Card
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 text-center cursor-pointer rounded-2xl border-2 transition-all ${
                        selectedDate === date
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl font-bold text-gray-900">{day}</div>
                      <div className="text-sm text-gray-600">{month}</div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Time Slot</h2>
                <div className="grid grid-cols-3 gap-3">
                  {mockTimeSlots.map((slot) => (
                    <Card
                      key={slot.id}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      className={`p-3 text-center cursor-pointer rounded-xl border-2 transition-all ${
                        !slot.available
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : selectedTime === slot.time
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Clock className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-sm font-medium">{slot.time}</div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 h-12 rounded-xl"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!selectedDate || !selectedTime}
                className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Patient Details & Confirmation */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Details</h2>
              <Card className="p-6 rounded-2xl border-0">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Patient Name</Label>
                    <Input
                      id="name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter patient name"
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter age"
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h2>
              <Card className="p-6 rounded-2xl border-0 space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Organization</p>
                    <p className="font-semibold">{organization.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="font-semibold">{selectedDate} • {selectedTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Service</p>
                    <p className="font-semibold">{selectedServiceData?.name}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total Fee</span>
                    <span className="text-2xl font-bold text-blue-600">₹{selectedServiceData?.fee}</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 h-12 rounded-xl"
              >
                Back
              </Button>
              <Button
                onClick={handleConfirmBooking}
                disabled={!patientName}
                className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
              >
                Confirm Booking
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
