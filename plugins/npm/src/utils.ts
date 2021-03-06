import * as fs from 'fs';
import { promisify } from 'util';

export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);

export async function loadPackageJson(): Promise<IPackageJSON> {
  return JSON.parse(await readFile('package.json', 'utf-8'));
}
