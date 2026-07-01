import { useState, useEffect } from 'react';
import { Car, Calendar, MapPin, ArrowRight, Phone, CheckCircle, Info, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CarOption {
  id: string;
  name: string;
  category: 'sedan' | 'suv';
  capacity: string;
  fuelOptions: string[];
  basePrice: number; // For 300 kms per day
  ratePerKm: number;
}

const CAR_OPTIONS: CarOption[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'sedan',
    capacity: '5 Seater',
    fuelOptions: ['CNG', 'Petrol'],
    basePrice: 3600,
    ratePerKm: 12,
  },
  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    category: 'sedan',
    capacity: '5 Seater',
    fuelOptions: ['CNG', 'Petrol'],
    basePrice: 3600,
    ratePerKm: 12,
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'suv',
    capacity: '7 Seater',
    fuelOptions: ['CNG', 'Petrol'],
    basePrice: 4200,
    ratePerKm: 14,
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    category: 'suv',
    capacity: '7 Seater',
    fuelOptions: ['Diesel'],
    basePrice: 4500,
    ratePerKm: 15,
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'suv',
    capacity: '7 Seater',
    fuelOptions: ['Diesel'],
    basePrice: 5400,
    ratePerKm: 18,
  }
];

export default function OutstationCabBooking() {
  const [startCity, setStartCity] = useState('Nashik');
  const [destinationCity, setDestinationCity] = useState('');
  
  // Dates
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getTomorrowString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const [startDate, setStartDate] = useState(getTodayString());
  const [endDate, setEndDate] = useState(getTomorrowString());
  const [numDays, setNumDays] = useState(1);

  // Selected vehicle category and specific car
  const [selectedCategory, setSelectedCategory] = useState<'sedan' | 'suv'>('sedan');
  const [selectedCarId, setSelectedCarId] = useState('swift-dzire');
  const [selectedFuel, setSelectedFuel] = useState('CNG');
  const [inclusiveOption, setInclusiveOption] = useState<'self' | 'inclusive'>('self');

  // Filter cars based on selected category
  const filteredCars = CAR_OPTIONS.filter(car => car.category === selectedCategory);
  const activeCar = CAR_OPTIONS.find(car => car.id === selectedCarId) || CAR_OPTIONS[0];

  // Helper to determine if a fuel type is disabled for a specific car
  const isFuelDisabled = (carId: string, fuel: string) => {
    if (fuel === 'Diesel') {
      // Disabled for 5-seaters (swift-dzire, hyundai-aura) and ertiga
      return ['swift-dzire', 'hyundai-aura', 'ertiga'].includes(carId);
    }
    if (fuel === 'CNG' || fuel === 'Petrol') {
      // Disabled for kia-carens and innova-crysta
      return ['kia-carens', 'innova-crysta'].includes(carId);
    }
    return false;
  };

  // Helper to calculate rate and base price dynamically
  const getCarRates = (carId: string, fuel: string) => {
    const car = CAR_OPTIONS.find(c => c.id === carId) || CAR_OPTIONS[0];
    let rate = car.ratePerKm;
    if (fuel === 'Petrol' && ['swift-dzire', 'hyundai-aura', 'ertiga'].includes(carId)) {
      rate += 2;
    }
    const base = rate * 300;
    return { rate, base };
  };

  // Calculate days when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end.getTime() - start.getTime();
      
      if (diffTime < 0) {
        // End date cannot be before start date
        setEndDate(startDate);
        setNumDays(1);
      } else {
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        setNumDays(diffDays);
      }
    }
  }, [startDate, endDate]);

  // Handle category toggle - reset selected car to first in category
  const handleCategoryChange = (category: 'sedan' | 'suv') => {
    setSelectedCategory(category);
    const firstCarOfCategory = CAR_OPTIONS.find(car => car.category === category);
    if (firstCarOfCategory) {
      setSelectedCarId(firstCarOfCategory.id);
      const defaultFuel = ['kia-carens', 'innova-crysta'].includes(firstCarOfCategory.id) ? 'Diesel' : 'CNG';
      setSelectedFuel(defaultFuel);
    }
  };

  // When selected car changes, update default fuel
  const handleCarChange = (carId: string) => {
    setSelectedCarId(carId);
    const defaultFuel = ['kia-carens', 'innova-crysta'].includes(carId) ? 'Diesel' : 'CNG';
    setSelectedFuel(defaultFuel);
  };

  // Pricing calculations
  const { rate: currentRatePerKm, base: currentBasePrice } = getCarRates(activeCar.id, selectedFuel);
  const totalBasePrice = currentBasePrice * numDays;
  const includedKms = 300 * numDays;
  const tollAllowancePrice = inclusiveOption === 'inclusive' ? includedKms * 3 : 0;
  const finalTotalPrice = totalBasePrice + tollAllowancePrice;

  // Format date helper
  const formatDateFriendly = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Book now via whatsapp redirection
  const handleBookNow = () => {
    if (!destinationCity.trim()) {
      alert('Please enter your Destination City!');
      return;
    }

    const optionText = inclusiveOption === 'inclusive' 
      ? `✅ Option 2: All Inclusive (Toll, parking, and driver food allowances included for +₹${tollAllowancePrice.toLocaleString('en-IN')})`
      : `❌ Option 1: Self Pay (Toll, parking, and driver food will be paid by customer directly)`;

    const message = `Hello! I'd like to book an outstation cab from you:

*🚨 OUTSTATION CAB INQUIRY*
---------------------------------------
📍 *Start City:* ${startCity} (Round Trip)
🗺️ *Destination:* ${destinationCity}
📅 *Start Date:* ${formatDateFriendly(startDate)}
📅 *End Date:* ${formatDateFriendly(endDate)}
⏱️ *Duration:* ${numDays} Day${numDays > 1 ? 's' : ''}
🚗 *Vehicle:* ${activeCar.name} (${selectedFuel})
👥 *Capacity:* ${activeCar.capacity}
🎫 *Toll/Food:* ${optionText}
---------------------------------------
💰 *ESTIMATED FARE:*
💵 *Base Price:* ₹${totalBasePrice.toLocaleString('en-IN')}
${inclusiveOption === 'inclusive' ? `🎫 *Toll & Food Allowance:* ₹${tollAllowancePrice.toLocaleString('en-IN')}\n` : ''}💵 *Total Estimated Price:* ₹${finalTotalPrice.toLocaleString('en-IN')}
🛣️ *Included Kms:* ${includedKms} Kms (${300} Kms / Day)
📈 *Extra Km Rate:* ₹${currentRatePerKm}/km (Calculated from/to ${startCity})

Please confirm car availability. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918796634808?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="outstation-cab" className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 -mt-8 mb-16">
      <div className="bg-white/85 backdrop-blur-2xl rounded-[2.5rem] border border-purple-100/60 shadow-xl shadow-purple-900/10 p-6 sm:p-8 relative overflow-hidden">
        
        {/* Glow corner decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl pointer-events-none" />

        {/* Feature Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-50">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold text-[#8B5CF6] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Round-Trip Outstation Cabs
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-800 leading-none">
              Book Your Outstation Cab
            </h3>
            <p className="font-sans text-xs text-slate-500">
              Premium air-conditioned rides with top-rated professional highway chauffeurs.
            </p>
          </div>
          
          {/* Quick Category Toggle */}
          <div className="bg-slate-100/80 p-1.5 rounded-2xl flex gap-1 self-start sm:self-center">
            <button
              onClick={() => handleCategoryChange('sedan')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'sedan'
                  ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-md shadow-purple-600/15'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              5-Seater Sedan
            </button>
            <button
              onClick={() => handleCategoryChange('suv')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'suv'
                  ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-md shadow-purple-600/15'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              7-Seater SUV
            </button>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Booking Inputs */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Guide/Tip Banner */}
            <div className="bg-purple-50/70 border border-purple-100/60 rounded-2xl p-4 flex items-start gap-3 text-xs text-[#5B21B6] font-sans">
              <Sparkles className="w-4.5 h-4.5 shrink-0 text-[#8B5CF6] mt-0.5" />
              <div>
                <span className="font-bold block text-purple-950 mb-0.5">Custom Itinerary Freedom</span>
                Book this option if you have already planned your tour and decided the destinations. Our driver will follow your itinerary.
              </div>
            </div>
            
            {/* Route Inputs (Start -> Destination) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Start City (Round Trip)
                </label>
                <select
                  value={startCity}
                  onChange={(e) => setStartCity(e.target.value)}
                  className="block w-full px-3 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] cursor-pointer"
                >
                  <option value="Nashik">Nashik</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Aurangabad">Aurangabad (Chhatrapati Sambhajinagar)</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Destination City
                </label>
                <input
                  type="text"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  placeholder="Enter Destination (e.g. Pune, Shirdi)"
                  className="block w-full px-3.5 py-3 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                />
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  min={getTodayString()}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="block w-full px-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="block w-full px-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                />
              </div>
            </div>

            {/* Car & Fuel Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Select Vehicle Model
                </label>
                <select
                  value={selectedCarId}
                  onChange={(e) => handleCarChange(e.target.value)}
                  className="block w-full px-3 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] cursor-pointer"
                >
                  {filteredCars.map(car => (
                    <option key={car.id} value={car.id}>
                      {car.name} ({car.capacity})
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-slate-400 mt-1.5 leading-tight font-sans">
                  ✨ All our vehicles are new models mostly 2024 to 2026 models.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  ⛽ Fuel Type
                </label>
                <div className="flex gap-2">
                  {['CNG', 'Petrol', 'Diesel'].map(fuel => {
                    const disabled = isFuelDisabled(activeCar.id, fuel);
                    return (
                      <button
                        key={fuel}
                        type="button"
                        disabled={disabled}
                        onClick={() => setSelectedFuel(fuel)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                          disabled
                            ? 'border-slate-100 bg-slate-100/40 text-slate-300 cursor-not-allowed opacity-50'
                            : selectedFuel === fuel
                            ? 'border-[#8B5CF6] bg-purple-50 text-[#8B5CF6] font-semibold shadow-sm cursor-pointer'
                            : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100 cursor-pointer'
                        }`}
                      >
                        {fuel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Toll, Parking & Driver Food Choice */}
            <div className="space-y-3 pt-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                🎫 Toll, Parking & Driver Food Options
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setInclusiveOption('self')}
                  className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                    inclusiveOption === 'self'
                      ? 'border-purple-200 bg-purple-50/50 shadow-sm'
                      : 'border-slate-100 bg-slate-50 hover:bg-slate-100/75'
                  }`}
                >
                  <span className={`block font-bold text-xs ${inclusiveOption === 'self' ? 'text-[#8B5CF6]' : 'text-slate-700'}`}>
                    Option 1: Self Pay
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1 leading-normal">
                    I'll pay toll, parking & driver food by myself during the journey.
                  </span>
                  {inclusiveOption === 'self' && (
                    <CheckCircle className="absolute top-3.5 right-3.5 w-4 h-4 text-[#8B5CF6]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setInclusiveOption('inclusive')}
                  className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                    inclusiveOption === 'inclusive'
                      ? 'border-purple-200 bg-purple-50/50 shadow-sm'
                      : 'border-slate-100 bg-slate-50 hover:bg-slate-100/75'
                  }`}
                >
                  <span className={`block font-bold text-xs ${inclusiveOption === 'inclusive' ? 'text-[#8B5CF6]' : 'text-slate-700'}`}>
                    Option 2: All Inclusive
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1 leading-normal">
                    Make this tour all inclusive (toll, parking, driver food allowance included).
                  </span>
                  <span className="inline-block mt-1 text-[9px] font-bold bg-[#8B5CF6]/10 text-[#8B5CF6] px-1.5 py-0.5 rounded-md">
                    +₹{(includedKms * 3).toLocaleString('en-IN')} extra
                  </span>
                  {inclusiveOption === 'inclusive' && (
                    <CheckCircle className="absolute top-3.5 right-3.5 w-4 h-4 text-[#8B5CF6]" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Pricing & Summary Panel */}
          <div className="md:col-span-5 bg-gradient-to-b from-purple-50/50 via-indigo-50/20 to-purple-50/30 rounded-3xl p-5 sm:p-6 border border-purple-100/40 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-slate-800 border-b border-purple-100/50 pb-2">
                Booking Quotation
              </h4>

              {/* Dynamic Metrics */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white rounded-2xl p-2.5 border border-purple-100/40 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Duration</span>
                  <span className="font-display font-extrabold text-lg text-[#8B5CF6]">{numDays} Day{numDays > 1 ? 's' : ''}</span>
                </div>
                <div className="bg-white rounded-2xl p-2.5 border border-purple-100/40 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Included Kms</span>
                  <span className="font-display font-extrabold text-lg text-[#8B5CF6]">{includedKms} Kms</span>
                </div>
              </div>

              {/* Breakdowns */}
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between text-xs text-slate-600 font-sans">
                  <span>Selected Vehicle:</span>
                  <span className="font-bold text-slate-800">{activeCar.name}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 font-sans">
                  <span>Fuel Choice:</span>
                  <span className="font-bold text-slate-800">{selectedFuel}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 font-sans">
                  <span>Base Rate:</span>
                  <span className="font-bold text-slate-800">₹{currentBasePrice.toLocaleString('en-IN')}/day</span>
                </div>
                {inclusiveOption === 'inclusive' && (
                  <div className="flex justify-between text-xs text-slate-600 font-sans">
                    <span>Toll & Food Allowance:</span>
                    <span className="font-bold text-[#8B5CF6]">+₹{tollAllowancePrice.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-slate-600 font-sans">
                  <span>Extra Km Rate:</span>
                  <span className="font-bold text-[#8B5CF6]">₹{currentRatePerKm}/km</span>
                </div>

                <div className="border-t border-purple-100/50 my-2 pt-2.5 flex justify-between items-baseline">
                  <span className="font-display font-bold text-sm text-slate-800">Estimated Fare</span>
                  <div className="text-right">
                    <span className="font-display font-extrabold text-2xl text-slate-900">
                      ₹{finalTotalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {inclusiveOption === 'inclusive' ? 'All Inclusive package' : 'Excludes toll, parking & driver food'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Important Conditions Callout */}
              <div className="bg-white/80 p-3 rounded-2xl text-[10px] text-slate-500 leading-relaxed font-sans flex items-start gap-2 border border-slate-100">
                <Info className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <p>
                  <strong>Round Trip Rule:</strong> Total KMS are calculated from start city ({startCity}) until the vehicle returns back. Any extra kms beyond the {includedKms} included kms will be charged at <strong>₹{currentRatePerKm}/km</strong>. {inclusiveOption === 'self' ? 'Toll, Parking, and Driver Food will be paid extra by yourself.' : 'Toll, Parking, and Driver Food allowances are fully included in the price.'}
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="w-full py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 stroke-[2]" />
              Book on WhatsApp
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
