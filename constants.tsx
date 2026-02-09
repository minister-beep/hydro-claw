import React from 'react';
import { AnatomyPart, Step, Feature } from './types';
import { Activity, Anchor, Lock, RefreshCw, Zap, Move } from 'lucide-react';

export const ANATOMY_DATA: AnatomyPart[] = [
  {
    name: "Master Cylinder",
    alias: "The Controller",
    description: "This is where the action starts. It is a pump or syringe that the operator pushes.",
    icon: "🎮"
  },
  {
    name: "Tubing",
    alias: "The Veins",
    description: "These connect the controller to the claw and are filled with fluid (water or oil), transferring the force.",
    icon: "➰"
  },
  {
    name: "Slave Cylinder",
    alias: "The Muscle",
    description: "Sits on the claw arm. When fluid is pushed into it, it expands (pushes out) to move the claw.",
    icon: "💪"
  },
  {
    name: "The Claw",
    alias: "The Hand",
    description: "The actual gripper, usually made of two or more jaws that open and close to grab objects.",
    icon: "🦀"
  }
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: "1. The Input",
    description: "You push down on the Master Cylinder (the controller)."
  },
  {
    title: "2. The Transfer",
    description: "This force pushes the fluid through the tubes. Since liquid cannot be compressed, it rushes into the Slave Cylinder."
  },
  {
    title: "3. The Expansion",
    description: "The fluid forces the Slave Cylinder's piston to extend (push out)."
  },
  {
    title: "4. The Grip",
    description: "This extension pushes against the back of the claw's mechanical fingers, forcing them to pivot and close."
  },
  {
    title: "5. The Hold",
    description: "As long as fluid stays in the cylinder, the claw stays closed tightly. The trapped liquid acts like a solid lock."
  },
  {
    title: "6. The Release",
    description: "When you pull back on the Master Cylinder, it sucks the fluid back out, causing the claw to open."
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    title: "Force Multiplication",
    description: "Hydraulic systems amplify force. A small push on a thin tube can move a heavy load on a wide tube. It's like having super strength!",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Precise Control",
    description: "Fluid moves smoothly, unlike some jerky motors. This allows the claw to pick up delicate items gently or crush heavy ones.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Self-Locking Grip",
    description: "Once the claw grabs an object, the trapped fluid keeps the jaws locked shut even if power is lost.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Durability",
    description: "Because the system often uses oil, parts are constantly lubricated from the inside, reducing wear and tear.",
    icon: <RefreshCw className="w-6 h-6" />
  }
];