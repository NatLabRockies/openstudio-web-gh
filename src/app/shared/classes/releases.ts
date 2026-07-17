import { Release } from './constants';

export const releases: Release[] = [{
  title: 'OpenStudio SDK Release',
  type: 'sdk',
  version: '3.11.0',
  sha: '241b8abb4d',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Ubuntu-24.04-x86_64.deb'
}, {
  title: 'OpenStudio PAT Release',
  type: 'pat',
  version: '3.9.1',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Darwin.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio-PAT/releases/download/v3.9.1/ParametricAnalysisTool-3.9.1-Linux.deb'
}];

export const developerRelease: Release = {
  title: 'Latest Development Package',
  type: 'developer-sdk',
  version: '3.11.0',
  winUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Windows.exe',
  macUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Darwin-x86_64.dmg',
  macArmUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Darwin-arm64.dmg',
  linuxUrl: 'https://github.com/NatLabRockies/OpenStudio/releases/download/v3.11.0/OpenStudio-3.11.0+241b8abb4d-Ubuntu-24.04-x86_64.deb'
};
