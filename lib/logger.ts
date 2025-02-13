type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_PREFIX = '[Event Website]';

class Logger {
  private static instance: Logger;
  private isProduction: boolean;

  private constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
    const timestamp = new Date().toISOString();
    return `${LOG_PREFIX} [${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  public debug(message: string, ...args: any[]): void {
    // In production, only log if explicitly enabled
    if (!this.isProduction || process.env.NEXT_PUBLIC_ENABLE_PRODUCTION_LOGS === 'true') {
      console.debug(this.formatMessage('debug', message), ...args);
    }
  }

  public info(message: string, ...args: any[]): void {
    console.info(this.formatMessage('info', message), ...args);
  }

  public warn(message: string, ...args: any[]): void {
    console.warn(this.formatMessage('warn', message), ...args);
  }

  public error(message: string, ...args: any[]): void {
    console.error(this.formatMessage('error', message), ...args);
  }
}

export const logger = Logger.getInstance();