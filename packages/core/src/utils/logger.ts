import signale, { Signale } from 'signale';

export interface ILogger {
  logLevel: LogLevel;
  log: signale.Signale<signale.DefaultMethods>;
  verbose: signale.Signale<signale.DefaultMethods>;
  veryVerbose: signale.Signale<signale.DefaultMethods>;
}

export function dummyLog(): ILogger {
  return {
    logLevel: undefined,
    log: new Signale({ disabled: true }),
    verbose: new Signale({ disabled: true }),
    veryVerbose: new Signale({ disabled: true })
  };
}

export type LogLevel = 'verbose' | 'veryVerbose' | undefined;

export default function createLog(mode: LogLevel): ILogger {
  return {
    logLevel: mode,
    log: new Signale(),
    verbose: new Signale({
      disabled: mode !== 'verbose' && mode !== 'veryVerbose'
    }),
    veryVerbose: new Signale({
      disabled: mode !== 'veryVerbose'
    })
  };
}
