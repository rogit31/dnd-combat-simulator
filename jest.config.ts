import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

const config: Config = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "db", "wasm"]
};

export default config;