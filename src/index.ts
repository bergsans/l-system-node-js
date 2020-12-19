import { makeLSystem, LRules } from './lsys';

const rules:LRules = new Map().set('F', 'F-F++F-F');

console.log(makeLSystem(4, 'F', rules));
