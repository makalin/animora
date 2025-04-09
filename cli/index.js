#!/usr/bin/env node
import { execSync } from 'child_process';
import { argv } from 'process';

const [command, sub, arg] = argv.slice(2);

switch (`${command}:${sub}`) {
  case 'gen:anim':
    execSync(`node ./cli/commands/gen-animation.js ${arg}`, { stdio: 'inherit' });
    break;
  case 'gen:theme':
    execSync(`node ./cli/commands/gen-theme.js ${arg}`, { stdio: 'inherit' });
    break;
  case 'add:plugin':
    execSync(`node ./cli/commands/add-plugin.js ${arg}`, { stdio: 'inherit' });
    break;
  default:
    console.log(`Unknown command "${command}:${sub}"`);
}
