import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/img/bb4236b1-ab91-4cb0-803a-6629837e562b.jpg)' }}
      />
      
      {/* Animated Flying Planes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Plane 1 */}
        <div className="absolute top-1/4 -left-20 animate-[slideInRight_15s_ease-in-out_infinite]">
          <Icon name="Plane" size={60} className="text-blue-400 opacity-60 rotate-12" />
        </div>
        
        {/* Plane 2 */}
        <div className="absolute top-3/4 -right-20 animate-[slideInLeft_12s_ease-in-out_infinite_2s] transform scale-x-[-1]">
          <Icon name="Plane" size={48} className="text-red-400 opacity-50 -rotate-12" />
        </div>
        
        {/* Plane 3 */}
        <div className="absolute top-1/2 -left-16 animate-[slideInRight_18s_ease-in-out_infinite_4s]">
          <Icon name="Plane" size={40} className="text-purple-400 opacity-40 rotate-6" />
        </div>
      </div>
      
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Gaming Title */}
        <h1 
          className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 animate-pulse"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          ПОЛЕТ
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold tracking-wide"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          ПРИСОЕДИНЯЙСЯ К КОМАНДЕ ПИЛОТОВ
        </p>
        
        {/* Telegram Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <a
            href="https://t.me/+3hwRJAbMnXM0MzEy"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xl rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <Icon name="Send" size={32} className="animate-bounce" />
            <span className="tracking-wider">ВЗЛЕТАЕМ!</span>
            <Icon name="Plane" size={32} className="animate-bounce" />
          </a>
        </div>
        
        {/* Gaming Stats UI */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>∞</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Миссии</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Онлайн</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
            <div className="text-3xl font-bold text-red-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Успех</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;