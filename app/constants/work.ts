import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025',
    title: 'DIPLOMA',
    subtitle: 'Computer Engineering',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025 (3 months)',
    title: 'connectsoft infotech',
    subtitle: 'Intern',
    position: 'left',
  },
  
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2028',
    title: 'BTECH',
    subtitle: 'AIDS',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]