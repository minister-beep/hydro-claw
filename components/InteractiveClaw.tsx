import React, { useState } from 'react';

const InteractiveClaw: React.FC = () => {
  // Pressure is 0 to 100
  const [pressure, setPressure] = useState(0);

  // Constants for visualization
  const maxPistonTravel = 60; // Max pixels piston moves
  
  // Master cylinder (Input)
  const masterPistonY = 20 + (pressure / 100) * maxPistonTravel; // Moves down
  
  // Slave cylinder (Output)
  // In a real hydraulic system, Area1 * Distance1 = Area2 * Distance2.
  // Assuming equal area for simplicity of visual.
  // Slave moves UP/OUT as master moves DOWN/IN.
  const slavePistonExtension = (pressure / 100) * maxPistonTravel;
  
  // Claw mechanics
  // As slave piston extends, claw closes.
  // Angle 0 = open, Angle 45 = closed
  const clawAngle = (pressure / 100) * 45;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Interactive Simulation
          </h3>
          <p className="text-sm text-slate-500">Drag the slider to operate the Master Cylinder</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-tech font-bold text-science-600">{Math.round(pressure)}%</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">System Pressure</div>
        </div>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-8 items-center justify-center bg-slate-100/50">
        
        {/* Controls - The "Master Cylinder" Input */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/3 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
          <label htmlFor="pressure-slider" className="font-semibold text-slate-700">Master Cylinder Input</label>
          <input
            id="pressure-slider"
            type="range"
            min="0"
            max="100"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-science-600 hover:accent-science-500 transition-all"
          />
          <div className="flex justify-between w-full text-xs text-slate-500 font-medium">
            <span>Released</span>
            <span>Compressed</span>
          </div>
          <p className="text-sm text-slate-600 text-center mt-2">
            Pushing the slider simulates pushing water through the syringe.
          </p>
        </div>

        {/* Visualization Area */}
        <div className="relative w-full md:w-2/3 h-80 bg-white rounded-xl border border-slate-200 shadow-inner flex items-center justify-center overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          <svg width="500" height="300" viewBox="0 0 500 300" className="w-full h-full">
            <defs>
              <linearGradient id="fluidGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
              </linearGradient>
              <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: 'black', strokeWidth: 1 }} />
              </pattern>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#fff" />
              </marker>
            </defs>

            {/* --- Master Cylinder (Left) --- */}
            <g transform="translate(50, 50)">
              <text x="30" y="-10" fontSize="12" fill="#64748b" textAnchor="middle">Master Cylinder</text>
              {/* Cylinder Body */}
              <rect x="10" y="0" width="40" height="100" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
              
              {/* Fluid inside Master */}
              <rect x="12" y={masterPistonY} width="36" height={100 - masterPistonY} fill="url(#fluidGradient)" />
              
              {/* Piston Head */}
              <rect x="12" y={masterPistonY - 5} width="36" height="5" fill="#334155" />
              {/* Piston Rod */}
              <rect x="28" y={masterPistonY - 55} width="4" height="50" fill="#94a3b8" />
              {/* Handle */}
              <rect x="10" y={masterPistonY - 60} width="40" height="5" rx="2" fill="#1e293b" />
            </g>

            {/* --- Tubing --- */}
            {/* Connecting Master to Slave */}
            <path 
              d="M 80 140 L 80 160 L 250 160 L 250 140" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="8"
            />
            {/* Fluid in Tubing */}
            <path 
              d="M 80 140 L 80 160 L 250 160 L 250 140" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4"
              strokeOpacity="0.8"
            />

            {/* --- Slave Cylinder (Right/Center) --- */}
            <g transform="translate(220, 50)">
              <text x="30" y="-10" fontSize="12" fill="#64748b" textAnchor="middle">Slave Cylinder</text>
              {/* Cylinder Body */}
              <rect x="10" y="40" width="40" height="100" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
              
              {/* Fluid inside Slave */}
              {/* Fluid fills up as piston moves out (up) */}
              <rect x="12" y={140 - 40 - slavePistonExtension} width="36" height={40 + slavePistonExtension} fill="url(#fluidGradient)" />

              {/* Piston Head (moves up) */}
              <rect x="12" y={140 - 40 - slavePistonExtension - 5} width="36" height="5" fill="#334155" />
              
              {/* Piston Rod (pushes the claw mechanism) */}
              <rect x="28" y={140 - 40 - slavePistonExtension - 55} width="4" height="50" fill="#94a3b8" />
            </g>

            {/* --- The Claw Mechanism --- */}
            <g transform="translate(250, 45)">
              <text x="0" y="-20" fontSize="12" fill="#64748b" textAnchor="middle">The Claw</text>
              
              {/* Pivot Point */}
              <circle cx="0" cy="0" r="5" fill="#475569" />

              {/* Left Jaw */}
              <g transform={`rotate(${-clawAngle}, 0, 0)`}>
                {/* Arm */}
                <path d="M -5 0 L -30 60 L -10 80" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
                {/* Gripper Pad */}
                <path d="M -30 60 L -10 80" fill="none" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Right Jaw */}
              <g transform={`rotate(${clawAngle}, 0, 0)`}>
                {/* Arm */}
                <path d="M 5 0 L 30 60 L 10 80" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
                {/* Gripper Pad */}
                <path d="M 30 60 L 10 80" fill="none" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Object to Grab (Tree trunk/Box) */}
              <rect x="-15" y="70" width="30" height="30" fill="#854d0e" rx="2" opacity={0.8} />
              
            </g>

            {/* Flow Arrows (visible only when moving) */}
            {pressure > 5 && pressure < 95 && (
              <g className="animate-pulse">
                <path d="M 120 160 L 140 160" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M 200 160 L 220 160" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InteractiveClaw;